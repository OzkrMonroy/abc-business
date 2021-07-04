import { useDispatch, useSelector } from 'react-redux';
import { ProductInterface } from '../../../interfaces/ProductInterface';
import { removeProductToPurchaseAction } from '../../../redux/productsToPurchase/productsToPurchaseActions';
import { RootState } from '../../../redux/root-reducer';
import { ProductPurchaseItem } from '../../productPurchaseItem/ProductPurchaseItem';
import { DataListContainer } from '../listsStyles';
import { headerItemsList } from './headerItemsList';
import { ProductsPurchaseHeader, ProductsPurchaseHeaderItem, ProductsPurchaseListContainer, Total } from './productsPurchaseListStyles';

export const ProductsPurchaseList = () => {
  const { productsToPurchase, totalToPay } = useSelector((state: RootState) => state.productsToPurchase);
  const dispatch = useDispatch();

  const removeProduct = (product: ProductInterface) => {
    dispatch(removeProductToPurchaseAction(product, productsToPurchase, totalToPay));
  }

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
        {productsToPurchase.length ? 
          productsToPurchase.map(product => (
            <ProductPurchaseItem product={product} key={product.id} removeProduct={removeProduct}/>
          ))
        : <p>No products yet!</p>}
      </ProductsPurchaseListContainer>
      <Total>Total to pay: <span>${totalToPay}</span></Total>
    </DataListContainer>
  )
}
