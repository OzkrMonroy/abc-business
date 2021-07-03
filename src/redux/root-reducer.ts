import { combineReducers } from 'redux';
import productsReducer from './products/productsReducer';
import providersReducer from './providers/providersReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  providers: providersReducer,
  products: productsReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>