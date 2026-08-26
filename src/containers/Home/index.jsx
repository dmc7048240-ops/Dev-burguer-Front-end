import  CategoryCarousel  from "../../components/CategoryCarousel";
import  OffersCarousel  from "../../components/OffersCarousel";

import { 
    Container, 
    Banner, 
    Content,

 } from "../Home/styles.js";



export function Home(){

   

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