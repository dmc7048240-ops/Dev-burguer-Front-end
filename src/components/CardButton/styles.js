import styled, { keyframes } from "styled-components";

// 🌟 Animação de brilho deslizante ao passar o mouse
const shimmer = keyframes`
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
`;

// 🌟 Micro-interação: carrinho dando um leve salto/balanço
const cartBounce = keyframes`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  30% {
    transform: translateY(-4px) rotate(-6deg);
  }
  60% {
    transform: translateY(-2px) rotate(4deg);
  }
`;

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 52px;
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, #9758a6 0%, #7f448c 100%);
  color: #ffffff;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  /* Transições suaves */
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0px 4px 14px rgba(151, 88, 166, 0.35);

  /* Estilização da imagem/ícone */
  img {
    height: 24px;
    width: 24px;
    object-fit: contain;
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2));
    transition: transform 0.3s ease;
  }

  /* Efeito de luz passando pelo botão */
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
  }

  /* 🌟 Estado HOVER (Passar o mouse) */
  &:hover {
    background: linear-gradient(135deg, #a663b6 0%, #6f357c 100%);
    transform: translateY(-2px);
    box-shadow: 0px 8px 20px rgba(151, 88, 166, 0.5);

    &::before {
      animation: ${shimmer} 0.75s ease-in-out;
    }

    img {
      animation: ${cartBounce} 0.6s ease-in-out;
    }
  }

  /* 🌟 Estado ACTIVE (Clique do usuário) */
  &:active {
    transform: translateY(1px) scale(0.97);
    box-shadow: 0px 2px 8px rgba(111, 53, 124, 0.4);
    background: #6f357c;
  }

  /* 📱 Responsividade para Telas Menores */
  @media (max-width: 768px) {
    height: 46px;

    img {
      height: 20px;
      width: 20px;
    }
  }

  /* Estado desativado (opcional) */
  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
    box-shadow: none;
    transform: none;

    img {
      opacity: 0.6;
      animation: none;
    }

    &::before {
      display: none;
    }
  }
`;