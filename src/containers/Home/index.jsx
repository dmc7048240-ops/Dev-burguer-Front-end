import CategoryCarousel from "../../components/CategoryCarousel/index.jsx";
import OffersCarousel from "../../components/OffersCarousel/index.jsx";
import { 
    Container, 
    Banner, 
    Content,

 } from "../Home/styles.js";
import { useUser } from "../../hooks/UserContext.jsx"

export function Home(){

    console.log(useUser);

    return (
        <main>
            <Banner>
                <h1>Bem-vindo(a)!</h1>
            </Banner>
            <Container>
                <Content>

                    <CategoryCarousel />
                    <OffersCarousel />
                </Content>
            </Container>
           
        </main>
    )
}