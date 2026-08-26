import styled, { keyframes } from "styled-components";

// 🌟 Animação de entrada suave do Card
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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 24px 20px 20px;
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.08);
  position: relative;
  margin-top: 50px; /* Dá espaço para a imagem flutuante acima */
  width: 100%;
  max-width: 280px;

  /* Animação ao carregar */
  animation: ${fadeIn} 0.5s ease-out forwards;

  /* Transição suave para efeitos interativos */
  transition: transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275),
              box-shadow 0.35s ease;

  /* Efeito Hover profissional (Elevação em 3D) */
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0px 20px 35px rgba(255, 140, 5, 0.2);

    /* Faz a imagem do hambúrguer flutuar/aumentar um pouco no hover */
    img {
      transform: scale(1.08) rotate(-2deg);
    }
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
    margin-top: 40px; /* Espaço ajustado para o texto não sobrepor a imagem */

    p {
      font-size: 18px;
      color: #ff8c05;
      line-height: 22px;
      font-weight: 700;
      /* Trunca textos muito longos com reticências (...) para não quebrar o design */
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      min-height: 44px;
    }

    strong {
      font-size: 22px;
      color: #363636;
      font-weight: 800;
      line-height: 24px;
    }
  }

  /* 📱 Responsividade */
  @media (max-width: 768px) {
    padding: 20px 16px 16px;
    margin-top: 40px;
    max-width: 100%;

    div {
      margin-top: 30px;

      p {
        font-size: 16px;
        line-height: 20px;
        min-height: 40px;
      }

      strong {
        font-size: 20px;
      }
    }
  }

  @media (max-width: 480px) {
    div {
      p {
        font-size: 15px;
      }
      
      strong {
        font-size: 18px;
      }
    }
  }
`;

export const CardImage = styled.img`
  height: 120px;
  width: auto;
  object-fit: contain;
  position: absolute;
  top: -55px;
  filter: drop-shadow(0px 8px 12px rgba(0, 0, 0, 0.25)); /* Sombra realista na própria imagem */
  transition: transform 0.35s ease, filter 0.35s ease;

  /* 📱 Responsividade da Imagem */
  @media (max-width: 768px) {
    height: 100px;
    top: -45px;
  }

  @media (max-width: 480px) {
    height: 90px;
    top: -40px;
  }
`;