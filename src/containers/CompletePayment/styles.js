import styled, { keyframes } from "styled-components";

// Animação de entrada suave e surgimento do card
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

// Animação de pulso sutil para o ícone de sucesso
const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #121214 0%, #1a1a1e 100%);
  padding: 20px;
`;

export const Card = styled.div`
  background-color: #18181b;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 40px 32px;
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  animation: ${fadeIn} 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
`;

export const CheckIconContainer = styled.div`
  color: #10b981; /* Verde sucesso */
  margin-bottom: 4px;
  animation: ${bounce} 2s infinite ease-in-out;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.white || "#fff"};
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0.3px;
`;

export const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  line-height: 150%;
  margin-bottom: 8px;
`;

export const Button = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 12px;
  border: none;
  background-color: ${(props) => props.theme.purple || "#6366f1"};
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);
    filter: brightness(1.1);
  }

  &:active {
    transform: translateY(0);
  }
`;