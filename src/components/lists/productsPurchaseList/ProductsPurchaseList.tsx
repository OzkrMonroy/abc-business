import { ProductPurchaseItem } from '../../productPurchaseItem/ProductPurchaseItem';
import { DataListContainer } from '../listsStyles';
import { headerItemsList } from './headerItemsList';
import { ProductsPurchaseHeader, ProductsPurchaseHeaderItem, ProductsPurchaseListContainer } from './productsPurchaseListStyles';

export const ProductsPurchaseList = () => {
  return (
    <DataListContainer>
      <h1>Register purchase</h1>
      <ProductsPurchaseListContainer>
        <ProductsPurchaseHeader>
          {headerItemsList.map(headerItem => (
            <ProductsPurchaseHeaderItem key={headerItem}>
              <p>{headerItem}</p>
            </ProductsPurchaseHeaderItem>
          ))}
        </ProductsPurchaseHeader>
        <ProductPurchaseItem/>
        <ProductPurchaseItem/>
        <ProductPurchaseItem/>
      </ProductsPurchaseListContainer>
    </DataListContainer>
  )
}
