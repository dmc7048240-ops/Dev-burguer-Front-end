import { ShoppingCart, UserCircle } from "@phosphor-icons/react";
import { useNavigate, useResolvedPath } from "react-router-dom";
import { useUser } from "../../hooks/UserContext.jsx"
import { 
    Container, 
    Navigation, 
    HeaderLink, 
    Options,
    Profile,
    Logout, // Componente de estilo
    LinkContainer,
    Content,
} from './styles.js';

export function Header() { 
    const navigate = useNavigate();
    
    // ✅ Alterado de 'Logout' para 'logout' (com l minúsculo)
    const { logout, userInfo } = useUser(); 

    const { pathname } = useResolvedPath();

    function logoutUser() {
        logout(); // ✅ Agora chama a função corretamente
        navigate('/login');
    }

    return (
        <Container>
            <Content>
                <Navigation>
                    <div>
                        <HeaderLink to="/" $isActive={pathname === '/'} >
                            Home
                        </HeaderLink>
                        <hr />
                        <HeaderLink to="/cardapio" $isActive={pathname === '/cardapio'}>
                            Cardápio
                        </HeaderLink>
                    </div>
                </Navigation>
                
                <Options>
                    <Profile>
                        <UserCircle color="#fff" size={24} />
                        <div>
                            {/* Usa optional chaining ?. para evitar erro se userInfo estiver vazio */}
                            <p>Olá, <span>{userInfo?.name}</span></p> 
                        </div>
                        <Logout onClick={logoutUser}>Sair</Logout>
                    </Profile>
                    
                    <LinkContainer>
                        <ShoppingCart color="#fff" size={24} />
                        <HeaderLink to='/carrinho'>Carrinho</HeaderLink>
                    </LinkContainer>
                </Options>
            </Content>
        </Container>
    );
}