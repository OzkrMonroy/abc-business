import { useDispatch, useSelector } from 'react-redux';
import { ProductInterface } from '../../../interfaces/ProductInterface';
import { removeProductToPurchaseAction } from '../../../redux/productsToPurchase/productsToPurchaseActions';
import { RootState } from '../../../redux/root-reducer';
import { ProductPurchaseItem } from '../../productPurchaseItem/ProductPurchaseItem';
import { DataListContainer } from '../listsStyles';
import { headerItemsList } from './headerItemsList';
import { ProductsPurchaseHeader, ProductsPurchaseHeaderItem, ProductsPurchaseListContainer, Total } from './productsPurchaseListStyles';

export const ProductsPurchaseList = () => {
  const { productsToPurchase, totalToPay, possibleEarnings } = useSelector((state: RootState) => state.productsToPurchase);
  const dispatch = useDispatch();

  const removeProduct = (product: ProductInterface) => {
    dispatch(removeProductToPurchaseAction(product, productsToPurchase, totalToPay, possibleEarnings));
  }

  return (
    <DataListContainer>
      <h1>Register purchase</h1>
      {productsToPurchase.length ? (
        <ProductsPurchaseListContainer>
          <ProductsPurchaseHeader>
            {headerItemsList.map(headerItem => (
              <ProductsPurchaseHeaderItem key={headerItem}>
                <p>{headerItem}</p>
              </ProductsPurchaseHeaderItem>
            ))}
          </ProductsPurchaseHeader>
          { productsToPurchase.map(product => (
              <ProductPurchaseItem product={product} key={product.id} removeProduct={removeProduct}/>
            ))
          }
        </ProductsPurchaseListContainer>
      ) : <p>No products yet!</p>}
      <Total>Total to pay: <span>${totalToPay}</span></Total>
      <Total>Possible earings: <span>${possibleEarnings}</span></Total>
    </DataListContainer>
  )
}
