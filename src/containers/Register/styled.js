import styled, { keyframes } from 'styled-components';
import { Link as ReactLink } from 'react-router-dom';
import BackgroundLogin from '../../assets/background-login.jpg';
import BackgroundRigth from '../../assets/backgroundRigth.png';

// 🌟 Animações
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const floatLogo = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
`;

const shakeError = keyframes`
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-4px); }
  40%, 80% { transform: translateX(4px); }
`;

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: #1e1e1e;
`;

export const LeftContainer = styled.div`
  background: linear-gradient(
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3)
    ),
    url('${BackgroundLogin}') center/cover no-repeat;
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;

  img {
    width: 80%;
    max-width: 450px;
    object-fit: contain;
    filter: drop-shadow(0px 8px 20px rgba(0, 0, 0, 0.6));
    animation: ${floatLogo} 4s ease-in-out infinite;
  }

  /* 📱 Oculta a imagem da esquerda em dispositivos móveis */
  @media (max-width: 900px) {
    display: none;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 50%;
  background: url('${BackgroundRigth}') center/cover no-repeat #1e1e1e;
  padding: 20px;
  animation: ${fadeIn} 0.6s ease-out forwards;

  /* Mensagem abaixo do formulário */
  > p {
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
    margin-top: 10px;
    text-align: center;
  }

  /* 📱 Ocupa 100% da largura em telas menores */
  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

export const Title = styled.h2`
  font-family: "Road Rage", sans-serif;
  font-size: 38px;
  color: #ffffff;
  text-align: center;
  line-height: 1.2;
  margin-bottom: 10px;
  letter-spacing: 1px;

  span {
    color: #9758a6;
    font-family: "Road Rage", sans-serif;
  }

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 20px 0;
  width: 100%;
  max-width: 380px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;

  label {
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
    margin-left: 2px;
  }

  input {
    width: 100%;
    height: 50px;
    border-radius: 10px;
    border: 2px solid transparent;
    padding: 0 16px;
    font-size: 15px;
    background-color: #ffffff;
    color: #333333;
    outline: none;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;

    /* Efeito de iluminação no Focus */
    &:focus {
      border-color: #9758a6;
      box-shadow: 0px 0px 12px rgba(151, 88, 166, 0.6);
      transform: translateY(-2px);
    }

    &::placeholder {
      color: #999999;
    }
  }

  /* Mensagem de Erro do Validador */
  p {
    font-size: 13px;
    color: #ff4d4d;
    font-weight: 600;
    margin-top: 2px;
    margin-left: 4px;
    height: 16px;
    animation: ${shakeError} 0.3s ease-in-out;
  }
`;

export const Link = styled(ReactLink)`
  text-decoration: underline;
  color: #9758a6;
  font-weight: 700;
  transition: color 0.2s ease, transform 0.2s ease;
  display: inline-block;

  &:hover {
    color: #b871c8;
    transform: translateY(-1px);
  }
`;