/*
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCart } from '../../hooks/CartContext.jsx'
import { api } from '../../services/api.js'
import formatPrice from '../../utils/formatPrice.js'
import { Button } from '../Button'
import { Container } from './styles.js'


export function CartResume(){
  const [ finalPrice, setFinalPrice ] =useState(0);
  const [ deliveryTax] = useState(500);
  const { cartProducts, clearCart} = useCart();

  const navigate = useNavigate();

  useEffect(() => {
    const sumAllItems = cartProducts.reduce( (acc, current) => {
        return current.price * current.quantity + acc;
    }, 0);
     
    setFinalPrice(sumAllItems);

  },[cartProducts]);

  const submitOrder = async () => {
    const products = cartProducts.map( (product) => {
        return { id: product.id, quantity: product.quantity };
    });

     try {
      const { status } = await api.post(
        '/orders', 
        {products}, 
        {
            validateStatus: () => true,
        });
    
      if (status === 200 || status === 201) {
        
        setTimeout(() => {
            navigate('/');
        },2000);
        clearCart();
        toast.success('Pedido realizado com sucesso!')
      } else if (status === 400) {
        toast.error('Falha ao realizar o seu pedido')
      } else {
        toast.error('Falha no sistema! Tente novamente!')
      }
    } catch {
      
      toast.error('Falha no sistema! Tente novamente!')
    }
       

  };

    return(
        <div>
         <Container>
            <div className="container-top">
              <h2 className="title">Resumo do Pedido</h2>
              <p className="items">Itens</p>
              <p className="items-price">{formatPrice(finalPrice)}</p>
              <p className="delivery-tax">Taxa de entrega</p>
              <p className="delivery-tax-price">{formatPrice(deliveryTax)}</p>
            </div>
            <div className="container-bottom">
                <p>Total</p>
                <p>{formatPrice(finalPrice + deliveryTax)}</p>

            </div>
         </Container>
         <Button onClick={submitOrder}>Finalizar Pedido</Button>
        </div>
    )
}*/

import { useState } from 'react'; // pode remover useState/useEffect se não usar em outro lugar
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCart } from '../../hooks/CartContext.jsx';
import { api } from '../../services/api.js';
import { formatPrice } from '../../utils/formatPrice.js';
import { Button } from '../Button';
import { Container } from './styles.js';

export function CartResume() {
  const [deliveryTax] = useState(500);
  const { cartProducts } = useCart();
  const navigate = useNavigate();

  //  Calcula diretamente na renderização sem disparar re-render extra
  const finalPrice = cartProducts.reduce((acc, current) => {
    return current.price * current.quantity + acc;
  }, 0);

  const submitOrder = async () => {
    const products = cartProducts.map((product) => {
      return { id: product.id, 
        quantity: product.quantity, 
        price: product.price };
    });

  try{
    const { data } = await api.post('/create-payment-intent', { products});
    
    navigate('/checkout', {
      state: data,
    })

  } catch{
    toast.error('Erro tente novamenteI!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
   
});

  }

/*
    try {
      const { status } = await api.post(
        '/orders',
        { products },
        {
          validateStatus: () => true,
        },
      );

      if (status === 200 || status === 201) {
        setTimeout(() => {
          navigate('/');
        }, 2000);
        clearCart();
        toast.success('Pedido realizado com sucesso!');
      } else if (status === 400) {
        toast.error('Falha ao realizar o seu pedido');
      } else {
        toast.error('Falha no sistema! Tente novamente!');
      }
    } catch {
      toast.error('Falha no sistema! Tente novamente!');
    }*/
  };

  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do Pedido</h2>
          <p className="items">Itens</p>
          <p className="items-price">{formatPrice(finalPrice)}</p>
          <p className="delivery-tax">Taxa de entrega</p>
          <p className="delivery-tax-price">{formatPrice(deliveryTax)}</p>
        </div>
        <div className="container-bottom">
          <p>Total</p>
          <p>{formatPrice(finalPrice + deliveryTax)}</p>
        </div>
      </Container>
      <Button onClick={submitOrder}>Finalizar Pedido</Button>
    </div>
  );
}