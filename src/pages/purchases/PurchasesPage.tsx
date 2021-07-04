import { AddProductToPurchase } from "../../components/addProductToPurchase/AddProductToPurchase"
import { CreateContainerForm } from "../../components/forms"
import { Layout } from "../../components/layout/Layout"
import { ProductsPurchaseList } from "../../components/lists"

export const PurchasesPage = () => {
  
  return (
    <Layout>
      <ProductsPurchaseList/>
      <AddProductToPurchase />
      <CreateContainerForm/>
    </Layout>
  )
}
