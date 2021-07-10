import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from '../../components/layout/Layout';
import { ProductList } from '../../components/lists';
import { getProductsStartAsync } from '../../redux/products/productsActions';
import { RootState } from '../../redux/root-reducer';

export const ProductsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.productsList);

  useEffect(() => {
    dispatch(getProductsStartAsync());
  }, [dispatch]);

  return (
    <Layout>
      <ProductList products={products}/>
    </Layout>
  )
}
