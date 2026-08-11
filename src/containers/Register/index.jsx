import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from "react-toastify";
import * as yup from "yup";
import { api } from "../../services/api.js"
import { useNavigate } from "react-router-dom";

import { 
  Container, 
  LeftContainer, 
  RightContainer, 
  Title, 
  Form, 
  InputContainer,
  Link, 
} from './styled.js';
import Logo from '../../assets/logo.png';

import { Button } from '../../components/Button/index.jsx'



export function Register() {
   
    const navigate = useNavigate();

    const schema = yup.object({
  name: yup.string().required('O nome e obrigatorio'),      
  email: yup
  .string()
  .email('Digite um email válido')
  .required('O email é obrigatório'),
  password: yup
  .string()
  .min(6, 'A senha deve ter pelo menos 6 caracteres')
  .required('A senha é obrigatória'),


  confirmPassword: yup
  .string()
  .oneOf([yup.ref('password')], 'As senhas  devem ser iguais ')
  .required('Confirma sua senha')
}).required();


    const { register,
         handleSubmit,
          formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
   console.log(errors);

  const onSubmit = async (data) => {
  try {
  const { status } = await api.post(
    '/users',
    {
      name: data.name,
      email: data.email,
      password: data.password,
    },
    {
      validateStatus: () => true,
    }
  )

  if (status === 200 || status === 201) {
    setTimeout(() => {
        navigate('/login');
    },2000);
    toast.success('Conta criada com sucesso!')
  } else if (status === 400) {
    toast.error('Email já existe, faça login para continuar!')
  } else {
    toast.error('Falha no sistema! Tente novamente!')
  }
} catch {
  
  toast.error('Falha no sistema! Tente novamente!')
}
    
  };

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="Logo" />
            </LeftContainer>
            <RightContainer>
                <Title>
                    Criar Conta
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Nome</label>
                        <input type="text" placeholder='Digite seu nome' {...register("name")} />
                        <p>{errors?.name?.message}</p>   
                    </InputContainer>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" placeholder='Digite seu email' {...register("email")} />
                        <p>{errors?.email?.message}</p>   
                    </InputContainer>
                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" placeholder='Digite sua senha' {...register("password")} />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>
                    <InputContainer>
                        <label>Confirmar Senha</label>
                        <input type="password" placeholder='Digite sua senha' {...register("confirmPassword")} />
                        <p>{errors?.confirmPassword?.message}</p>
                    </InputContainer>
                    
                    <Button type="submit">Criar Conta</Button>
                </Form>
                <p>
                    Já possui conta ? <Link to="/login">Clique aqui.</Link>
                </p>
            </RightContainer>
            

        </Container>
    );
}