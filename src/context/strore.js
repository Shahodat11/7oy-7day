import { configureStore  } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
import wishlistSlice from './wishlistSlice'
import cartSlice from './cartSlice'
import { api } from "./api";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    wishlist: wishlistSlice,
    cart: cartSlice,
    [api.reducerPath]: api.reducer,
  },
    middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),
})
