import { Table } from '../index';
import { useCart } from '../../hooks/CartContext';
import { formatPrice } from '../../utils/formatPrice';
import { ButtonGroup, EmptyCart, ProductImage, ProductTotalPrice, TrashImagem } from './styles';
import TrashIcon from '../../assets/trash.svg';

export function CartItems() {
    const { cartProducts, decreaseProduct, increaseProduct, deleteProduct } = useCart();

    return (
        <Table.Root>
            <Table.Header>
                <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th>Itens</Table.Th>
                    <Table.Th>Preço</Table.Th>
                    <Table.Th>Quantidade</Table.Th>
                    <Table.Th>Total</Table.Th>
                    <Table.Th></Table.Th>
                </Table.Tr>
            </Table.Header>
            <Table.Body>
                {cartProducts?.length ? (
                    cartProducts.map(product => (
                        <Table.Tr key={product.id}>
                            <Table.Td data-label="Imagem">
                                <ProductImage src={product.url} alt={product.name} />
                            </Table.Td>
                            <Table.Td data-label="Item">
                                {product.name}
                            </Table.Td>
                            <Table.Td data-label="Preço">
                                {product.currencyValue}
                            </Table.Td>
                            <Table.Td data-label="Quantidade">
                                <ButtonGroup>
                                    <button onClick={() => decreaseProduct(product.id)}>-</button>
                                    <span>{product.quantity}</span>
                                    <button onClick={() => increaseProduct(product.id)}>+</button>
                                </ButtonGroup>
                            </Table.Td>
                            <Table.Td data-label="Total">
                                <ProductTotalPrice>
                                    {formatPrice(product.quantity * product.price)}
                                </ProductTotalPrice>
                            </Table.Td>
                            <Table.Td data-label="Ações">
                                <TrashImagem 
                                    src={TrashIcon} 
                                    alt="lixeira" 
                                    onClick={() => deleteProduct(product.id)} 
                                />
                            </Table.Td>
                        </Table.Tr>
                    ))
                ) : (
                    <Table.Tr>
                        <EmptyCart colSpan={6}>Carrinho Vazio</EmptyCart>
                    </Table.Tr>
                )}
            </Table.Body>
        </Table.Root>
    );
}
