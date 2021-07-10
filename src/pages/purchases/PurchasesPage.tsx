import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AddProductToPurchase } from "../../components/addProductToPurchase/AddProductToPurchase"
import { CreateContainerForm } from "../../components/forms"
import { Layout } from "../../components/layout/Layout"
import { ProductsPurchaseList } from "../../components/lists"
import { getProvidersListStartAsync } from "../../redux/providers/providersActions"
import { RootState } from "../../redux/root-reducer"

export const PurchasesPage = () => {
  const { hasChecked } = useSelector((state: RootState) => state.providers);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!hasChecked){
      dispatch(getProvidersListStartAsync());
    }
  }, [dispatch, hasChecked])

  return (
    <Layout>
      <ProductsPurchaseList/>
      <AddProductToPurchase />
      <CreateContainerForm/>
    </Layout>
  )
}
