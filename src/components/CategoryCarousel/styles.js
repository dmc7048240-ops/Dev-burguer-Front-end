import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

// 🌟 Animação de entrada suave da seção
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// 🌟 Animação contínua para a linha abaixo do título
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
  padding-left: 40px;
  animation: ${fadeIn} 0.6s ease-out forwards;

  .carousel-item {
    padding-right: 40px;
  }

  /* 📱 Responsividade do Container */
  @media (max-width: 768px) {
    padding-left: 20px;

    .carousel-item {
      padding-right: 15px;
    }
  }

  @media (max-width: 480px) {
    padding-left: 10px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #9758a6;
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 20px;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: #9758a6;
    left: calc(50% - 28px);
    border-radius: 2px;
    animation: ${pulseLine} 3s infinite ease-in-out;
  }

  /* 📱 Responsividade do Título */
  @media (max-width: 768px) {
    font-size: 26px;
    margin-bottom: 30px;
    margin-top: 15px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
    margin-bottom: 20px;
  }
`;

export const ContainerItems = styled.div`
  background: url('${props => props.imageUrl}');
  background-position: center;
  background-size: cover;
  border-radius: 20px;

  display: flex;
  align-items: center;
  padding: 20px 10px;
  width: 100%;
  height: 250px;
  
  /* Efeito de transição na imagem de fundo e escala */
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 10px 20px rgba(151, 88, 166, 0.25);
  }

  /* 📱 Responsividade do Card */
  @media (max-width: 768px) {
    height: 200px;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    height: 170px;
    border-radius: 12px;
  }
`;

export const CategoryButton = styled(Link)`
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px); /* Suaviza o fundo atrás do botão */
  padding: 10px 30px;
  border-radius: 30px;
  font-size: 22.5px;
  font-weight: 500;
  margin-top: 50px;
  text-decoration: none;
  
  /* Transições para animação fluida ao interagir */
  transition: all 0.3s ease;

  &:hover {
    background-color: #9758a6;
    transform: translateY(-3px);
    box-shadow: 0px 5px 15px rgba(151, 88, 166, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  /* 📱 Responsividade do Botão */
  @media (max-width: 768px) {
    font-size: 18px;
    padding: 8px 22px;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
    padding: 6px 16px;
    margin-top: 20px;
  }
`;