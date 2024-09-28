
import { configureStore } from '@reduxjs/toolkit';
import { productsApi} from './redux/productsApi.js';

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
       .concat(productsApi.middleware),
  devTools: true,
});

export default store