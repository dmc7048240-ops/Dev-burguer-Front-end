import styled, { keyframes } from "styled-components";
import ReactSelect from "react-select";
import { Button } from "../../../components/Button";

// Animações
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
  
  padding: 20px;
`;

export const Form = styled.form`
  border-radius: 24px;
  background-color: ${(props) => props.theme.black || "#18181b"};
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  padding: 40px 32px;
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  animation: ${fadeIn} 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  animation: ${fadeIn} 0.5s ease backwards;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.white || "#f4f4f5"};
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.3px;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 10px;
  padding: 0 16px;
  background-color: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: ${(props) => props.theme.white || "#fff"};
  font-size: 14px;
  transition: all 0.2s ease-in-out;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.primary || "#6366f1"};
    background-color: rgba(255, 255, 255, 0.07);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
  }
`;

export const LabelUpload = styled.label`
  cursor: pointer;
  border: 2px dashed rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.white || "#f4f4f5"};
  font-size: 14px;
  font-weight: 500;
  margin: 12px 0;
  background-color: rgba(255, 255, 255, 0.02);
  transition: all 0.3s ease;

  &:hover {
    border-color: ${(props) => props.theme.primary || "#6366f1"};
    background-color: rgba(99, 102, 241, 0.04);
    transform: translateY(-2px);
  }

  > svg {
    width: 22px;
    height: 22px;
    fill: ${(props) => props.theme.white || "#fff"};
    margin-right: 8px;
    transition: transform 0.3s ease;
  }

  &:hover > svg {
    transform: scale(1.1);
  }

  input {
    display: none;
  }
`;

export const Image = styled.img`
  display: none;
`;

export const Select = styled(ReactSelect)`
  .react-select__control {
    background-color: rgba(255, 255, 255, 0.04) !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    border-radius: 10px !important;
    min-height: 48px !important;
    box-shadow: none !important;
    transition: all 0.2s ease-in-out;

    &:hover {
      border-color: rgba(255, 255, 255, 0.2) !important;
    }
  }

  .react-select__control--is-focused {
    border-color: ${(props) => props.theme.primary || "#6366f1"} !important;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15) !important;
    background-color: rgba(255, 255, 255, 0.07) !important;
  }

  .react-select__menu {
    background-color: #1a1a1e !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    border-radius: 10px !important;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5) !important;
    overflow: hidden;
  }

  .react-select__option {
    background-color: transparent !important;
    color: #fff !important;
    font-size: 14px;
    cursor: pointer;
    transition: background 0.2s ease;

    &:hover, &__option--is-focused {
      background-color: rgba(99, 102, 241, 0.2) !important;
    }

    &--is-selected {
      background-color: ${(props) => props.theme.primary || "#6366f1"} !important;
    }
  }

  .react-select__single-value {
    color: #fff !important;
  }

  .react-select__placeholder {
    color: rgba(255, 255, 255, 0.3) !important;
  }

  .react-select__indicator-separator {
    background-color: rgba(255, 255, 255, 0.1) !important;
  }

  .react-select__indicator {
    color: rgba(255, 255, 255, 0.5) !important;
    &:hover {
      color: #fff !important;
    }
  }
`;

export const SubmitButton = styled(Button)`
  margin-top: 24px;
  height: 50px;
  border-radius: 10px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:not(:disabled):hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ErrorMessage = styled.span`
  color: ${(props) => props.theme.darkRed || "#ff6b6b"};
  font-size: 12px;
  line-height: 120%;
  font-weight: 500;
  margin-top: 2px;
  animation: ${fadeIn} 0.3s ease;
`;

export const ContainerCheckbox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  margin-top: 8px;
  user-select: none;

  input[type="checkbox"] {
    cursor: pointer;
    width: 18px;
    height: 18px;
    accent-color: ${(props) => props.theme.primary || "#6366f1"};
    border-radius: 4px;
  }

  label {
    cursor: pointer;
  }
`;