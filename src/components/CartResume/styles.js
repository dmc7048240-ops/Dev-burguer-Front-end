import styled, { keyframes } from 'styled-components';

// 🌟 Animação de entrada fluida (Fade In subindo levemente)
const fadeInUp = keyframes`
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
  background-color: #ffffff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 24px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  width: 100%;
  max-width: 450px;
  
  /* Animação ao carregar */
  animation: ${fadeInUp} 0.5s ease-out forwards;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.12);
  }

  * {
    color: #484848;
    font-weight: 500;
  }

  .container-top {
    display: grid;
    grid-gap: 14px 20%;
    grid-template-areas:
      'title title'
      'items items-price'
      'delivery-tax delivery-tax-price';
    padding-bottom: 15px;

    .title {
      grid-area: title;
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 15px;
      background-color: #484848;
      color: #ffffff;
      width: 100%;
      padding: 16px;
      text-align: center;
      letter-spacing: 0.5px;
    }

    .items {
      grid-area: items;
      padding-left: 24px;
      font-size: 15px;
    }

    .items-price {
      grid-area: items-price;
      padding-right: 24px;
      text-align: right;
      font-size: 15px;
    }

    .delivery-tax {
      grid-area: delivery-tax;
      padding-left: 24px;
      font-size: 15px;
    }

    .delivery-tax-price {
      grid-area: delivery-tax-price;
      padding-right: 24px;
      text-align: right;
      font-size: 15px;
    }
  }

  .container-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    font-weight: 700;
    margin-top: 10px;
    padding: 18px 24px;
    background-color: #f9f9f9;
    border-top: 1px dashed #e0e0e0;

    p {
      color: #484848;
      font-weight: 700;
      font-size: 20px;
    }

    /* Destaca a cor do valor total para dar ênfase comercial */
    p:last-child {
      color: #9758a6;
      font-size: 22px;
      font-weight: 800;
    }
  }

  /* 📱 Responsividade */
  @media (max-width: 768px) {
    max-width: 100%;
    
    .container-top {
      grid-gap: 12px 10%;

      .title {
        font-size: 18px;
        padding: 14px;
      }

      .items, .delivery-tax {
        padding-left: 16px;
      }

      .items-price, .delivery-tax-price {
        padding-right: 16px;
      }
    }

    .container-bottom {
      padding: 14px 16px;

      p {
        font-size: 18px;
      }

      p:last-child {
        font-size: 20px;
      }
    }
  }
`;