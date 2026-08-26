import { 
    Container,
    Banner,
    Title,
    Content,
 } from "./styled";
import Logo from "../../assets/logo.png"
import { CartItems } from "../../components/CartItems";
import { CartResume } from "../../components";


 export function Cart(){
    return(
      <Container>
        <Banner>
            <img src={Logo}  alt="logo"/>
        </Banner> 
        <Title>
          Checkout - Pedido
        </Title>
        <Content>
            <CartItems />
            <CartResume />
        </Content>
      </Container>
    )
}
