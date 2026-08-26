import styled, { keyframes } from 'styled-components';

// 🌟 Animação de entrada (Fade in subindo levemente)
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// 🌟 Animação Pulsante para a linha decorativa do Título
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
  overflow-x: hidden;
  padding-left: 40px;
  padding-bottom: 40px;
  
  /* Animação ao carregar o componente */
  animation: ${fadeInUp} 0.8s ease-out forwards;

  .carousel-item {
    padding-right: 40px;
    transition: transform 0.3s ease, filter 0.3s ease;

    /* Efeito de destaque suave ao passar o mouse no item */
    &:hover {
      transform: translateY(-6px);
    }
  }

  .react-multi-carousel-list {
    overflow: visible;
  }

  /* 📱 Responsividade do Container */
  @media (max-width: 768px) {
    padding-left: 20px;
    padding-bottom: 20px;

    .carousel-item {
      padding-right: 15px; /* Reduz espaço entre cards em telas menores */
    }
  }

  @media (max-width: 480px) {
    padding-left: 10px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #61a120;
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin: 70px 0;
  transition: color 0.3s ease;

  /* Efeito de brilho/opacidade no hover */
  &:hover {
    color: #4e8319;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: #61a120;
    left: calc(50% - 28px);
    border-radius: 2px;
    
    /* Animação contínua na linha */
    animation: ${pulseLine} 3s infinite ease-in-out;
  }

  /* 📱 Responsividade do Título */
  @media (max-width: 768px) {
    font-size: 26px;
    margin: 40px 0 30px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
    margin: 30px 0 20px;
  }
`;