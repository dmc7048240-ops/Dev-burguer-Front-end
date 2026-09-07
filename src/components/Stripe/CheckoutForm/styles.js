import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 40px auto;
  padding: 30px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  margin-bottom: 25px;
  text-align: center;
  font-size: 28px;
`;

export const CardContainer = styled.div`
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
  background: #fafafa;
`;

export const Button = styled.button`
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 8px;
  background: #ff0000;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.85;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Message = styled.p`
  margin-top: 20px;
  text-align: center;
  font-size: 15px;
`;