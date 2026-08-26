import styled, { keyframes } from "styled-components";

// 🌟 Animações
const fadeInRow = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulseEmpty = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.04);
    opacity: 1;
  }
`;

export const Table = {
  Root: styled.table`
    width: 100%;
    background-color: #ffffff;
    border-radius: 20px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.06);
    border-collapse: collapse;
    overflow: hidden;

    /* 📱 ESTRUTURA PARA SMARTPHONES (Modo Card Mobile) */
    @media (max-width: 640px) {
      display: block;
      background: transparent;
      box-shadow: none;
      border-radius: 0;
    }
  `,

  Header: styled.thead`
    background-color: #424242;

    @media (max-width: 640px) {
      display: none; /* Esconde o cabeçalho original em celulares */
    }
  `,

  Body: styled.tbody`
    @media (max-width: 640px) {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  `,

  Tr: styled.tr`
    border-bottom: 1px solid #f0f0f0;
    transition: all 0.3s ease;
    animation: ${fadeInRow} 0.4s ease-out forwards;

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      background-color: #fcf6ff;
    }

    /* 📱 Transformação da linha em Card Mobile */
    @media (max-width: 640px) {
      display: grid;
      grid-template-columns: 80px 1fr auto;
      grid-template-areas: 
        "img name trash"
        "img price price"
        "img qty total";
      gap: 8px 14px;
      padding: 16px;
      background-color: #ffffff;
      border-radius: 16px;
      box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.05);
      border-bottom: none;
      align-items: center;

      &:hover {
        background-color: #ffffff;
      }
    }
  `,

  Th: styled.th`
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    padding: 16px 20px;
    text-align: left;
  `,

  Td: styled.td`
    padding: 16px 20px;
    color: #333333;
    font-size: 16px;
    vertical-align: middle;

    /* 📱 Posicionamento dos dados dentro do Card Mobile */
    @media (max-width: 640px) {
      padding: 0;
      font-size: 15px;

      &[data-label="Imagem"] {
        grid-area: img;
      }
      &[data-label="Item"] {
        grid-area: name;
        font-weight: 700;
        font-size: 16px;
        color: #222;
      }
      &[data-label="Preço"] {
        grid-area: price;
        color: #777;
        font-size: 14px;
      }
      &[data-label="Quantidade"] {
        grid-area: qty;
      }
      &[data-label="Total"] {
        grid-area: total;
        justify-self: end;
      }
      &[data-label="Ações"] {
        grid-area: trash;
        justify-self: end;
      }
    }
  `,
};

export const ProductImage = styled.img`
  height: 75px;
  width: 75px;
  border-radius: 14px;
  object-fit: cover;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.06);
  }

  @media (max-width: 640px) {
    height: 75px;
    width: 75px;
    border-radius: 12px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  color: #333333;

  span {
    min-width: 16px;
    text-align: center;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    border-radius: 8px;
    background-color: #9758a6;
    border: none;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0px 2px 6px rgba(151, 88, 166, 0.3);

    &:hover {
      background-color: #7b3e8a;
    }

    &:active {
      transform: scale(0.92);
    }
  }

  @media (max-width: 640px) {
    gap: 8px;
    
    button {
      height: 28px;
      width: 28px;
    }
  }
`;

export const ProductTotalPrice = styled.p`
  font-weight: 800;
  color: #9758a6;
  font-size: 17px;

  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

export const TrashImagem = styled.img`
  height: 22px;
  width: 22px;
  cursor: pointer;
  opacity: 0.7;
  transition: transform 0.2s ease, opacity 0.2s ease;

  &:hover {
    opacity: 1;
    transform: scale(1.18) rotate(6deg);
  }

  &:active {
    transform: scale(0.9);
  }

  @media (max-width: 640px) {
    height: 20px;
    width: 20px;
    opacity: 0.85;
  }
`;

export const EmptyCart = styled.td`
  font-size: 18px;
  text-align: center;
  font-weight: 700;
  color: #888888;
  padding: 40px 20px !important;
  animation: ${pulseEmpty} 2.5s infinite ease-in-out;
  display: table-cell !important;

  @media (max-width: 640px) {
    background-color: #ffffff;
    border-radius: 16px;
  }
`;