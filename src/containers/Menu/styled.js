import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Background from '../../assets/fundo-black.svg';
import BannerHamburger from '../../assets/hamburger-banner.svg';

// 🌟 Animação de entrada do conteúdo do Banner
const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// 🌟 Animação de entrada fluida dos cards de produto
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

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('${Background}');
  background-attachment: fixed;
`;

export const Banner = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 480px;
  width: 100%;
  position: relative;
  padding: 0 10%;

  background: url('${BannerHamburger}') center/cover no-repeat #1f1f1f;

  /* Overlay escuro para melhorar contraste do texto em mobile */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.35);
  }

  h1 {
    position: relative;
    z-index: 1;
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    line-height: 65px;
    color: #fff;
    text-shadow: 2px 4px 10px rgba(0, 0, 0, 0.6);
    animation: ${slideInRight} 0.8s ease-out forwards;

    span {
      display: block;
      color: #fff;
      font-family: 'Poppins', sans-serif;
      font-size: 20px;
      font-weight: 400;
      margin-top: 15px;
      letter-spacing: 0.5px;
    }
  }

  /* 📱 Responsividade do Banner */
  @media (max-width: 1024px) {
    height: 380px;

    h1 {
      font-size: 64px;
      line-height: 55px;
      
      span {
        font-size: 18px;
      }
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    text-align: center;
    height: 300px;
    padding: 0 20px;

    h1 {
      font-size: 48px;
      line-height: 42px;

      span {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 480px) {
    height: 240px;

    h1 {
      font-size: 38px;
      line-height: 35px;

      span {
        font-size: 14px;
      }
    }
  }
`;

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin: 40px auto 30px;
  padding: 10px 20px;
  max-width: 100%;
  overflow-x: auto; /* Permite scroll horizontal em celulares muito pequenos */
  white-space: nowrap;

  /* Oculta scrollbar mantendo a funcionalidade de rolagem */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (max-width: 768px) {
    gap: 24px;
    margin: 30px auto 20px;
  }

  @media (max-width: 480px) {
    justify-content: flex-start; /* Scroll natural no mobile */
    gap: 16px;
    padding: 10px 16px;
  }
`;

export const CategoryButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  background: none;
  color: ${props => (props.$isActiveCategory ? '#9758a6' : '#696969')};
  font-size: 22px;
  font-weight: ${props => (props.$isActiveCategory ? '700' : '500')};
  padding-bottom: 8px;
  line-height: 20px;
  border: none;
  position: relative;
  transition: color 0.3s ease, transform 0.2s ease;

  /* Linha indicadora animada no botão ativo */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props => (props.$isActiveCategory ? '100%' : '0%')};
    height: 3px;
    background-color: #9758a6;
    border-radius: 2px;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #9758a6;
    transform: translateY(-2px);

    &::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px 40px 60px;
  gap: 40px;
  justify-content: center;
  max-width: 1280px;
  margin: 0 auto;
  
  /* Animação fluida de entrada */
  animation: ${fadeInUp} 0.6s ease-out forwards;

  /* 📱 Breakpoints responsivos do Grid */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    padding: 20px 30px 40px;
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr; /* 1 coluna em celulares */
    gap: 24px;
    padding: 10px 20px 30px;
  }
`;