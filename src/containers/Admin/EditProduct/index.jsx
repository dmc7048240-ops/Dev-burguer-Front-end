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
import { useLocation, useNavigate } from "react-router-dom";

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
});

export function EditProduct() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);

  const {
    state: { product },
  } = useLocation();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),

    defaultValues: {
      name: product.name,
      price: product.price / 100,
      category: null,
      offer: product.offer,
    },
  });

  useEffect(() => {
    async function loadCategories() {
      try {
        const { data } = await api.get("/categories");

        setCategories(data);

        // Encontrar a categoria do produto
        const productCategory = data.find(
          (category) =>
            category.id === product.category_id ||
            category.id === product.category?.id ||
            category.name === product.category
        );

        reset({
          name: product.name,
          price: product.price / 100,
          category: productCategory || null,
          offer: product.offer,
        });
      } catch (error) {
        console.error(error);
      }
    }

    loadCategories();
  }, [product, reset]);

  const fileRegister = register("file");

  const onSubmit = async (data) => {
    try {
      const productFormData = new FormData();

      productFormData.append("name", data.name);
      productFormData.append("price", data.price);
      productFormData.append("category_id", data.category.id);
      productFormData.append("offer", data.offer);

      // Só envia arquivo se o usuário escolher um novo
      if (data.file && data.file.length > 0) {
        productFormData.append("file", data.file[0]);
      }

      await toast.promise(
        api.put(`/products/${product.id}`, productFormData),
        {
          pending: "Editando o produto...",
          success: "Produto editado com sucesso!",
          error: "Falha ao editar o produto, tente novamente.",
        }
      );

      setTimeout(() => {
        navigate("/admin/produtos");
      }, 2000);
    } catch (error) {
      console.error(error);
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
            {...register("price")}
          />

          <ErrorMessage>
            {errors?.price?.message}
          </ErrorMessage>
        </InputGroup>

        {/* ARQUIVO */}
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
                  event.target.files[0]?.name
                );
              }}
            />

            {fileName || "Upload do Produto"}
          </LabelUpload>
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
        <SubmitButton type="submit">
          Editar Produto
        </SubmitButton>

      </Form>
    </Container>
  );
}