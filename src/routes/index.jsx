import { createBrowserRouter } from "react-router-dom";
import  { Login, Cart, Home, Menu, Register } from "../containers"


import { Header } from "../components/Header"
import { Footer } from "../components/Footer"


export const router = createBrowserRouter([
    {
        path: '/',
        element: 
        (
            <>
            <Header />
            <Home />
            <Footer />
            
            </>
        ),
    },
    {
       path: '/login',
       element: <Login />,
    },
    {
        path: '/cadastro',
        element: <Register />
    },
    {
        path: '/cardapio',
        element: (
            <>
            <Header />
            <Menu />
            <Footer />
            </>
        )
    },
    {
        path: '/carrinho',
        element: (
            <>
            <Header />
            <Cart />
           </>
    )
            
        
    }
    
])