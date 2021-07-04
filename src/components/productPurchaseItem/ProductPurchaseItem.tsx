import { ProductInterface } from '../../interfaces/ProductInterface';
import { ProductInfoContainer, Container } from './productPurchaseItemStyles';

interface Props {
  product: ProductInterface;
  removeProduct: (product: ProductInterface) => void;
}

export const ProductPurchaseItem = ({ product, removeProduct }: Props) => {
  const { name, description, quantity, purchasePrice, salePrice } = product;
  
  return (
    <Container>
      <ProductInfoContainer>
        <p>{name}</p>
      </ProductInfoContainer>
      <ProductInfoContainer>
        <p>{description}</p>
      </ProductInfoContainer>
      <ProductInfoContainer>
        <p>{quantity}</p>
      </ProductInfoContainer>
      <ProductInfoContainer>
        <p>$ {purchasePrice}</p>
      </ProductInfoContainer>
      <ProductInfoContainer>
        <p>$ {salePrice}</p>
      </ProductInfoContainer>
      <ProductInfoContainer>
        <p>Acá va la foto :)</p>
      </ProductInfoContainer>
      <ProductInfoContainer>
        <p>
          <img src="/assets/delete.svg" alt="delete product" onClick={() => removeProduct(product)}/>
        </p>
      </ProductInfoContainer>
    </Container>
  )
}
