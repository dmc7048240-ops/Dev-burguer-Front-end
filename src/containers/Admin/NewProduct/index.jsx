import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  Container,
  Form,
  InputGroup,
  Label,
  Input,
  LabelUpload,
  Image,
  Select,
  SubmitButton,
  ErrorMessage,
  ContainerCheckbox,
} from "./styles";

import { api } from "../../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  name: yup
    .string()
    .required("Digite o nome do produto"),

  price: yup
    .number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .positive("O preço deve ser maior que zero")
    .integer("Digite um preço válido")
    .required("Digite o preço")
    .typeError("Digite o preço do produto"),

  category: yup
    .object()
    .required("Selecione uma categoria"),

  offer: yup
    .bool(),

  file: yup
    .mixed()
    .test(
      "required",
      "Escolha um arquivo para continuar",
      (value) => {
        return value && value.length > 0;
      }
    )
    .test(
      "fileSize",
      "Carregue um arquivo de até 3MB",
      (value) => {
        return (
          value &&
          value.length > 0 &&
          value[0].size <= 3 * 1024 * 1024
        );
      }
    )
    .test(
      "type",
      "Carregue apenas imagens PNG ou JPEG",
      (value) => {
        return (
          value &&
          value.length > 0 &&
          (
            value[0].type === "image/jpeg" ||
            value[0].type === "image/png"
          )
        );
      }
    ),
});

export function NewProduct() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadCategories() {
      try {
        const { data } = await api.get("/categories");
        setCategories(data);
      } catch (error) {
        console.error(error);
        toast.error("Não foi possível carregar as categorias");
      }
    }

    loadCategories();
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),

    defaultValues: {
      name: "",
      price: "",
      category: null,
      offer: false,
      file: null,
    },
  });

  const fileRegister = register("file");

  const onSubmit = async (data) => {
    try {
      const productFormData = new FormData();

      productFormData.append("name", data.name);
      productFormData.append("price", data.price);
      productFormData.append("category_id", data.category.id);
      productFormData.append("file", data.file[0]);
      productFormData.append("offer", data.offer);

      await toast.promise(
        api.post("/products", productFormData),
        {
          pending: "Adicionando o produto...",
          success: "Produto criado com sucesso!",
          error: "Falha ao adicionar o produto. Tente novamente.",
        }
      );

      setTimeout(() => {
        navigate("/admin/produtos");
      }, 2000);

    } catch (error) {
      console.error("Erro ao criar produto:", error);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>

        {/* NOME */}
        <InputGroup>
          <Label>Nome</Label>

          <Input
            type="text"
            placeholder="Digite o nome do produto"
            {...register("name")}
          />

          <ErrorMessage>
            {errors?.name?.message}
          </ErrorMessage>
        </InputGroup>

        {/* PREÇO */}
        <InputGroup>
          <Label>Preço</Label>

          <Input
            type="number"
            placeholder="Digite o preço"
            {...register("price")}
          />

          <ErrorMessage>
            {errors?.price?.message}
          </ErrorMessage>
        </InputGroup>

        {/* IMAGEM */}
        <InputGroup>
          <LabelUpload>
            <Image />

            <input
              type="file"
              {...fileRegister}
              accept="image/png, image/jpeg"
              onChange={(event) => {
                fileRegister.onChange(event);

                setFileName(
                  event.target.files[0]?.name || null
                );
              }}
            />

            {fileName || "Upload do Produto"}
          </LabelUpload>

          <ErrorMessage>
            {errors?.file?.message}
          </ErrorMessage>
        </InputGroup>

        {/* CATEGORIA */}
        <InputGroup>
          <Label>Categoria</Label>

          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={categories}
                getOptionLabel={(category) => category.name}
                getOptionValue={(category) =>
                  String(category.id)
                }
                placeholder="Categorias"
                menuPortalTarget={document.body}
              />
            )}
          />

          <ErrorMessage>
            {errors?.category?.message}
          </ErrorMessage>
        </InputGroup>

        {/* OFERTA */}
        <InputGroup>
          <ContainerCheckbox>
            <input
              type="checkbox"
              {...register("offer")}
            />

            <Label>
              Produto em Oferta?
            </Label>
          </ContainerCheckbox>
        </InputGroup>

        {/* BOTÃO */}
        <SubmitButton
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? "Adicionando..."
            : "Adicionar Produto"}
        </SubmitButton>

      </Form>
    </Container>
  );
}