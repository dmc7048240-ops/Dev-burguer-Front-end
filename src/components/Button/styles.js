import styled, { keyframes } from 'styled-components';

// 🌟 Animação sutil de pulso de luz no botão
const pulseGlow = keyframes`
  0% {
    box-shadow: 0 4px 15px rgba(151, 88, 166, 0.4);
  }
  50% {
    box-shadow: 0 6px 22px rgba(151, 88, 166, 0.7);
  }
  100% {
    box-shadow: 0 4px 15px rgba(151, 88, 166, 0.4);
  }
`;

export const ContainerButton = styled.button`
  width: 100%;
  height: 52px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(135deg, #9758a6 0%, #7f448c 100%);
  font-family: "Road Rage", sans-serif;
  font-size: 30px;
  color: #ffffff;
  letter-spacing: 1.5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  /* Transições suaves para transformações e cores */
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 4px 15px rgba(151, 88, 166, 0.35);

  /* Efeito de brilho fluindo na superfície ao passar o cursor */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.25),
      transparent
    );
    transition: left 0.6s ease;
  }

  /* 🌟 Estado HOVER */
  &:hover {
    background: linear-gradient(135deg, #a663b6 0%, #6f357c 100%);
    transform: translateY(-2px);
    animation: ${pulseGlow} 2s infinite ease-in-out;

    &::before {
      left: 100%;
    }
  }

  /* 🌟 Estado ACTIVE (Clique do usuário) */
  &:active {
    transform: translateY(1px) scale(0.98);
    box-shadow: 0 2px 8px rgba(111, 53, 124, 0.4);
    background: #6f357c;
  }

  /* 📱 Responsividade (Ajuste suave em dispositivos móveis) */
  @media (max-width: 768px) {
    height: 48px;
    font-size: 26px;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    height: 44px;
    font-size: 24px;
  }

  /* Estado de Carregamento / Desativado */
  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
    box-shadow: none;
    transform: none;
    
    &::before {
      display: none;
    }
  }
`;