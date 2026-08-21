import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from "react-toastify";
import * as yup from "yup";
import { api } from "../../services/api.js"
import { useUser } from "../../hooks/UserContext.jsx"

import { 
    Container, 
    LeftContainer, 
    RightContainer, 
    Title, 
    Form, 
    InputContainer, 
    Link,
} from './styled';
import Logo from '../../assets/bem-vinda-burguer.png';

import { Button } from '../../components/Button'


export function Login() {
    const navigate = useNavigate()
    const { putUserData }  = useUser()
    
    const schema = yup.object({
  email: yup.string().email('Digite um email válido').required('O email é obrigatório'),
  password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('A senha é obrigatória'),
}).required();


    const { register,
         handleSubmit,
          formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
   console.log(errors);

  const onSubmit = async (data) => {
    const { data: UserData } = await toast.promise(
        api.post('/sessions', {
        email: data.email,
        password: data.password,
    }),
    {
        pending: 'Verifique seus dados',
        success: {
            render(){
                setTimeout(() => {
                    navigate('/');
                }, 2000);
                return 'Bem-vindo(a)';
            },
        },
        error: 'Email ou Senha Incorretos'
    },
);
putUserData(UserData);
    
  //  localStorage.setItem('token',  token);
  };




    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="Logo" />
            </LeftContainer>
            <RightContainer>
                <Title>
                    Olá, seja bem vindo ao<span> Dev Burguer!</span>
                    <br />
                     Acesse com seu <span> Login e senha</span> 
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
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
                    
                    <Button type="submit">Entrar</Button>
                </Form>
                <p>
                    Não possui conta? <Link to="/cadastro">Clique aqui.</Link>
                </p>
            </RightContainer>
            

        </Container>
    );
}