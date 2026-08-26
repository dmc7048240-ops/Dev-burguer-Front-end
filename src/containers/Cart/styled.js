import styled, { keyframes } from 'styled-components';
import Background from '../../assets/fundo-black.svg';
import Texture from '../../assets/texture.svg';

// 🌟 Animação de entrada fluida da página inteira
const fadeInPage = keyframes`
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// 🌟 Animação flutuante contínua para a Logo
const floatLogo = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
`;

// 🌟 Animação pulsante elegante para a linha verde abaixo do Título
const pulseLine = keyframes`
  0%, 100% {
    width: 56px;
    opacity: 1;
  }
  50% {
    width: 80px;
    opacity: 0.7;
  }
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f0f0f0;
  background: linear-gradient(
      rgba(255, 255, 255, 0.65),
      rgba(255, 255, 255, 0.65)
    ),
    url('${Background}');
  background-attachment: fixed;
  animation: ${fadeInPage} 0.6s ease-out forwards;
`;

export const Banner = styled.div`
  background: url('${Texture}') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 180px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);

  img {
    height: 135px;
    width: auto;
    object-fit: contain;
    filter: drop-shadow(0px 6px 10px rgba(0, 0, 0, 0.3));
    animation: ${floatLogo} 4s infinite ease-in-out;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  /* 📱 Responsividade do Banner */
  @media (max-width: 768px) {
    height: 140px;

    img {
      height: 100px;
    }
  }

  @media (max-width: 480px) {
    height: 110px;

    img {
      height: 75px;
    }
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  padding-bottom: 12px;
  color: #61a120;
  text-align: center;
  position: relative;
  margin: 40px 0 20px;
  letter-spacing: -0.5px;
  transition: color 0.3s ease;

  &:hover {
    color: #4e8319;
  }

  &::after {
    position: absolute;
    left: calc(50% - 28px);
    bottom: 0;
    content: '';
    width: 56px;
    height: 4px;
    background-color: #61a120;
    border-radius: 2px;
    animation: ${pulseLine} 3s infinite ease-in-out;
  }

  /* 📱 Responsividade do Título */
  @media (max-width: 768px) {
    font-size: 26px;
    margin: 30px 0 15px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
    margin: 24px 0 10px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 360px; /* Largura fixa ideal para a coluna do CartResume */
  gap: 32px;
  width: 100%;
  max-width: 1280px;
  padding: 20px 40px 60px;
  margin: 0 auto;
  align-items: start; /* Impede que o resumo do pedido estique verticalmente */

  /* 📱 Responsividade do Grid de Conteúdo */
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 320px;
    gap: 24px;
    padding: 20px 24px 40px;
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr; /* Transforma em 1 coluna (Carrinho em cima, Resumo embaixo) */
    gap: 32px;
    padding: 16px 16px 40px;
  }
`;