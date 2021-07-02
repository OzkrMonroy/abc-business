import { useState } from 'react';
import { Layout } from '../../components/layout/Layout';
import { CreateProductForm } from '../../components/forms'

export const ProductsPage = () => {
  const [isCreating, setIsCreating] = useState(true);

  const showForm = () => {
    setIsCreating(!isCreating);
    window.scrollTo({ top: 0, behavior: 'smooth'});
  }

  return (
    <Layout>
      {isCreating ? (
        <CreateProductForm showForm={showForm}/>
      ) : (
        <p>Products List</p>
      )}
    </Layout>
  )
}
