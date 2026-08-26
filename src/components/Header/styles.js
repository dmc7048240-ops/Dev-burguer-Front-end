import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

// 🌟 Animações
const iconBounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
`;

export const Container = styled.header`
  background-color: rgba(31, 31, 31, 0.95);
  backdrop-filter: blur(10px);
  width: 100%;
  height: 72px;
  padding: 0 56px;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
    padding: 14px 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 14px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 24px;

    hr {
      height: 20px;
      border: none;
      width: 1px;
      background: linear-gradient(180deg, transparent, #625E5E, transparent);
    }

    @media (max-width: 480px) {
      gap: 16px;
    }
  }
`;

export const HeaderLink = styled(Link)`
  text-decoration: none;
  color: ${props => (props.$isActive ? '#9758a6' : '#e0e0e0')};
  font-size: 15px;
  font-weight: ${props => (props.$isActive ? '700' : '500')};
  position: relative;
  padding: 6px 0;
  transition: color 0.3s ease;

  /* 🌟 Linha animada abaixo do link ativo/hover */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props => (props.$isActive ? '100%' : '0%')};
    height: 2px;
    background-color: #9758a6;
    border-radius: 2px;
    box-shadow: 0 0 8px rgba(151, 88, 166, 0.8);
    transition: width 0.3s ease-in-out;
  }

  &:hover {
    color: #9758a6;

    &::after {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    gap: 16px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  background: rgba(255, 255, 255, 0.04);
  padding: 6px 14px;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);

    svg {
      animation: ${iconBounce} 0.6s ease;
    }
  }

  p {
    color: #f5f5f5;
    font-weight: 400;

    span {
      font-weight: 700;
      color: #9758a6;
    }
  }

  @media (max-width: 480px) {
    padding: 4px 10px;
    font-size: 13px;
  }
`;

export const Logout = styled.button`
  color: #ff5252;
  font-weight: 700;
  font-size: 13px;
  background: rgba(255, 82, 82, 0.1);
  border: 1px solid rgba(255, 82, 82, 0.2);
  padding: 4px 10px;
  border-radius: 6px;
  cursor: pointer;
  margin-left: 4px;
  transition: all 0.2s ease;

  &:hover {
    background: #ff5252;
    color: #ffffff;
    box-shadow: 0 2px 8px rgba(255, 82, 82, 0.4);
    transform: translateY(-1px);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);

    svg {
      animation: ${iconBounce} 0.6s ease;
      color: #9758a6 !important;
    }
  }

  svg {
    transition: color 0.3s ease;
  }
`;