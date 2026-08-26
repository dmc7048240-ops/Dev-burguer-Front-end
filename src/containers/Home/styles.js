import styled, { keyframes } from 'styled-components';
import Background from '../../assets/fundo-black.svg';
import BannerHome from '../../assets/banner-home.svg';

// 🌟 Animação de entrada do título vindo da direita
const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// 🌟 Animação de aparição fluida para o conteúdo principal
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

export const Banner = styled.div`
  background: url('${BannerHome}') center/cover no-repeat #1f1f1f;
  height: 480px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 15%;

  /* Overlay escuro elegante para garantir a leitura do texto em qualquer tela */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
  }

  h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    color: #ffffff;
    position: relative;
    z-index: 1;
    text-shadow: 2px 4px 12px rgba(0, 0, 0, 0.7);
    letter-spacing: 2px;
    
    /* Animação fluida de surgimento */
    animation: ${slideInRight} 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
  }

  /* 📱 Responsividade do Banner */
  @media (max-width: 1024px) {
    height: 380px;
    padding-right: 10%;

    h1 {
      font-size: 64px;
    }
  }

  @media (max-width: 768px) {
    height: 300px;
    justify-content: center;
    padding-right: 0;
    text-align: center;

    &::before {
      background: rgba(0, 0, 0, 0.4);
    }

    h1 {
      font-size: 52px;
    }
  }

  @media (max-width: 480px) {
    height: 220px;

    h1 {
      font-size: 38px;
    }
  }
`;

export const Container = styled.section`
  width: 100%;
  min-height: calc(100vh - 480px);
  background: linear-gradient(
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.6)
    ),
    url('${Background}');
  background-attachment: fixed; /* Efeito parallax de fundo fixo */
  padding-bottom: 60px;

  @media (max-width: 768px) {
    padding-bottom: 40px;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;

  /* Animação suave para os carrosséis */
  animation: ${fadeInUp} 0.8s ease-out forwards;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;