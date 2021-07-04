import { combineReducers } from 'redux';
import productsReducer from './products/productsReducer';
import productsToPurchaseReducer from './productsToPurchase/productsToPurchaseReducer';
import providersReducer from './providers/providersReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  providers: providersReducer,
  products: productsReducer,
  productsToPurchase: productsToPurchaseReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>