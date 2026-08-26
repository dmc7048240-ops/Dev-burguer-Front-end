import { useContext, createContext, useState } from 'react';

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    // 1. Inicializa o estado lendo do localStorage diretamente (resolve o aviso do useEffect)
    const [cartProducts, setCartProducts] = useState(() => {
        const clientCartData = localStorage.getItem('devburger:cartInfo');
        return clientCartData ? JSON.parse(clientCartData) : [];
    });

    const updateLocalStorage = (products) => {
        localStorage.setItem('devburger:cartInfo', JSON.stringify(products));
    };

    const putProductInCart = (product) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);

        let newProductsInCart;

        if (cartIndex >= 0) {
            // 2. Cria imutabilidade usando .map (cópia sem alterar o estado original)
            newProductsInCart = cartProducts.map((prd, index) =>
                index === cartIndex ? { ...prd, quantity: prd.quantity + 1 } : prd
            );
        } else {
            // 3. Adiciona novo item garantindo imutabilidade
            newProductsInCart = [...cartProducts, { ...product, quantity: 1 }];
        }

        setCartProducts(newProductsInCart);
        updateLocalStorage(newProductsInCart);
    };

    const clearCart = () => {
        setCartProducts([]);
        updateLocalStorage([]);
    };


    const deleteProduct = (productId) => {
        const newCart = cartProducts.filter((prd) => prd.id !== productId);
        setCartProducts(newCart);
        updateLocalStorage(newCart);
    };

    const increaseProduct = (productId) => {
        const newCart = cartProducts.map((prd) =>
            prd.id === productId ? { ...prd, quantity: prd.quantity + 1 } : prd
        );
        setCartProducts(newCart);
        updateLocalStorage(newCart);
    };

    const decreaseProduct = (productId) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === productId);

        if (cartIndex >= 0 && cartProducts[cartIndex].quantity > 1) {
            const newCart = cartProducts.map((prd) =>
                prd.id === productId ? { ...prd, quantity: prd.quantity - 1 } : prd
            );
            setCartProducts(newCart);
            updateLocalStorage(newCart);
        } else {
            deleteProduct(productId);
        }
    };

    return (
        <CartContext.Provider
            value={{
                cartProducts,
                putProductInCart,
                clearCart,
                decreaseProduct,
                increaseProduct,
                deleteProduct,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
    // 4. Corrigido: useContext recebe CartContext (não CartProvider)
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }

    return context;
};



/*
import { useContext, createContext, useEffect, useState} from 'react'

const CartContext = createContext({});

export const CartProvider = ({children}) =>{

    const [ cartProducts, setCartProducts] = useState([])

    const putProductInCart = (product) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);
        
        let newProductsInCart =[]
        if(cartIndex >= 0){
            newProductsInCart = cartProducts;

            newProductsInCart[cartIndex].quantity = 
            newProductsInCart[cartIndex].quantity +1

            setCartProducts(newProductsInCart);
 
        }else{
            product.quantity = 1
            newProductsInCart = [...cartProducts, product];
            setCartProducts(newProductsInCart)

        }

     updateLocalStorage(newProductsInCart);
    };

   
    const clearCart = () => {

    }

    const deleteProduct =(productId) => {
      const newCart =cartProducts.filter((prd) => prd.id !== productId)

      setCartProducts(newCart);
      updateLocalStorage(newCart);
    }

    const increaseProduct = (productId) => {
      const newCart = cartProducts.map( prd => {
        return prd.id === productId ? { ...prd, quantity: prd.quantity +1} 
        : prd;
      });

      setCartProducts(newCart);
      updateLocalStorage(newCart);
    }

    const decreaseProduct =(productId) => {
      const cartIndex = cartProducts.findIndex((prd) => prd.id === productId);
      
      if(cartProducts[cartIndex].quantity > 1){
        const newCart = cartProducts.map( prd => {
        return prd.id === productId ? { ...prd, quantity: prd.quantity -1} 
        : prd;
      });

      setCartProducts(newCart);
      updateLocalStorage(newCart);

      }else{
        deleteProduct(productId);
      }
    }

     const updateLocalStorage = (products) => {
      localStorage.setItem('devburger:cartInfo', JSON.stringify(products));
    };

    useEffect(() => {
       
        const clientCartData =localStorage.getItem('devburger:cartInfo');
            
        if(clientCartData){
            setCartProducts(JSON.parse(clientCartData))
        }
        
    }, []);
    return (
        <CartContext.Provider value={{
         cartProducts,
         putProductInCart, 
         clearCart, 
         decreaseProduct, 
         increaseProduct,
         deleteProduct,
         }}>

            {children}
        </CartContext.Provider>

    );
};

export const useCart = () => {
    const context = useContext(CartProvider);

    if(!context){
        throw new Error('useCart must be used with a context')
    }

    return context;
}*/