
import { useEffect, useState, useMemo } from "react";
import { 
    Container, 
    Banner,
    CategoryMenu,
    ProductsContainer,
    CategoryButton,
} from "./styled.js";
import { api } from "../../services/api.js";
import { formatPrice } from "../../utils/formatPrice.js";
import { CardProduct } from "../../components/cardProduct/index.jsx";
import { useLocation, useNavigate } from "react-router-dom";

  



export function Menu(){

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    //const [filteredProducts, setFilteredProducts] = useState([]);
    //const [activeCategory, setActiveCategory] = useState(0);

    const navigate = useNavigate();
    const { search } = useLocation();
    
    const queryParms =  new URLSearchParams(search)

    

    const [ activeCategory, setActiveCategory ] = useState(() => {
        const categoryId = +queryParms.get('categoria')

        if(categoryId){
            return categoryId
        }
        return 0;
    })
    

     useEffect( () => {
                
                async function loadCategories(){
                    const { data } = await api.get('/categories');

                    const newCategories = [ {id: 0, name: 'Todas'}, ...data];
    
                    setCategories(newCategories);
                    console.log(data);
                    
                }


                 async function loadProducts(){
                                const { data } = await api.get('/products');
                
                                const newProducts = data.map((product) => ({
                                  currencyValue: formatPrice(product.price), 
                                    ...product,
                                  }
                                )
                                );
                                
                                setProducts(newProducts);
                                
                            }
                
                            loadCategories();
                            loadProducts();
    
                
            }, []);

    const filteredProducts = useMemo(() => {
        
        if (activeCategory === 0) {
            return products;
        }

        return products.filter(
            product => product.category_id === activeCategory
        );
    }, [products, activeCategory]);

    return(
        <Container>
            <Banner>
                <h1>
                    O MELHOR <br /> HAMBURGER <br /> ESTÁ AQUI
                    <span>
                    Esse cardápio está irresistível!
                </span>
                    </h1>
            
            </Banner>
            <CategoryMenu>
                {categories.map(category => (
                    <CategoryButton 
                    key={category.id}
                    $isActiveCategory={category.id === activeCategory}
                    onClick={() => {
                        console.log('CATEGORIA CLICADA:',
                            category.id,
                            category.name
                        );
                        navigate(
                            {
                                pathname: '/cardapio',
                                search: `?categoria=${category.id}`
                            },
                            {
                                replace: true,
                            },
                        );
                        setActiveCategory(category.id);
                    }}
                    >{category.name}</CategoryButton>
                ))}
            </CategoryMenu>

            <ProductsContainer>
                {filteredProducts.map((product) => (
                    <CardProduct  product={product} key={product.id}/>
                ))}
            </ProductsContainer>
            
        </Container>
    );
}

export default Menu;