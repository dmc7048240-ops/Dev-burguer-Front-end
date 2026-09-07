import styled, { keyframes } from 'styled-components';
import {  TableContainer as MuiTableContainer } from '@mui/material';

// Animações profissionais
const fadeIn = keyframes`
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
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 40px 20px;
  animation: ${fadeIn} 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
`;

// Estilização avançada para o componente do Material-UI
export const TableContainer = styled(MuiTableContainer)`
  && {
    background-color: ${(props) => props.theme.black || "#18181b"};
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    max-width: 1000px;
    width: 100%;
    overflow: hidden;

    /* Estilização interna da tabela MUI */
    .MuiTable-root {
      min-width: 650px;
    }

    .MuiTableHead-root {
      background-color: rgba(255, 255, 255, 0.02);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);

      .MuiTableCell-head {
        color: ${(props) => props.theme.white || "#f4f4f5"};
        font-weight: 600;
        font-size: 14px;
        letter-spacing: 0.5px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      }
    }

    .MuiTableBody-root {
      .MuiTableRow-root {
        transition: all 0.2s ease;
        animation: ${fadeIn} 0.5s ease backwards;

        &:nth-child(even) {
          background-color: rgba(255, 255, 255, 0.01);
        }

        &:hover {
          background-color: rgba(99, 102, 241, 0.04);
          transform: scale(1.002);
        }

        .MuiTableCell-body {
          color: rgba(255, 255, 255, 0.85);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          font-size: 14px;
        }
      }
    }
  }
`;

export const ProductImage = styled.img`
  height: 64px;
  width: 64px;
  object-fit: cover;
  padding: 4px;
  background-color: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

export const EditButton = styled.button`
  border: none;
  background-color: ${(props) => props.theme.darkWhite || "rgba(255, 255, 255, 0.08)"};
  height: 36px;
  width: 36px;
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  svg {
    height: 18px;
    width: 18px;
    fill: ${(props) => props.theme.white || "#fff"};
    transition: transform 0.2s ease;
  }

  &:hover {
    background-color: ${(props) => props.theme.purple || "#6366f1"};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);

    svg {
      transform: scale(1.1);
      fill: ${(props) => props.theme.white || "#fff"};
    }
  }

  &:active {
    transform: translateY(0);
  }
`;