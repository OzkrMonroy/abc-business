import { combineReducers } from 'redux';
import providersReducer from './providers/providersReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  providers: providersReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>