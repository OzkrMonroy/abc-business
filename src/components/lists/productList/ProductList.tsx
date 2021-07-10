import { ProductInterface } from '../../../interfaces/ProductInterface';
import { DataListContainer, DataItem, DataItemsContainer } from '../listsStyles';

interface Props {
  products: ProductInterface[];
}

export const ProductList = ({ products }: Props) => {
  return (
    <DataListContainer>
      <h1>Products</h1>
      {products.length ? (
        <DataItemsContainer>
          {products.map(product => (
            <DataItem key={product.id}>
              {product.name}
            </DataItem>
          ))}
        </DataItemsContainer>
      ): (<p>No Products found!</p>)}
    </DataListContainer>
  )
}
