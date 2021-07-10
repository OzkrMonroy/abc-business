import { ProductInterface } from "../../interfaces/ProductInterface";

export interface ProductsState {
  productsList: ProductInterface[];
  isLoading: boolean;
  error: boolean;
  errorMessage: string | null;
}

export const initialState: ProductsState = {
  productsList: [],
  isLoading: false,
  error: false,
  errorMessage: null,
}