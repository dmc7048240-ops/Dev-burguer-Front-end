import Cart from '../../assets/card.svg'
import { Container } from './styles'




export function CartButton({...props}){
     
    return(
        <Container {...props}>
            <img src={Cart} alt='carrinho-de-compras' />
        </Container>
    )
}