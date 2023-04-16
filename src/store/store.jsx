import { configureStore } from '@reduxjs/toolkit'
import {logger} from 'redux-logger'
import AdminSlice from './reducers/AdminSlice'
import ProductSlice from './reducers/ProductSlice'


export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: {
      admin: AdminSlice,
      product: ProductSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: true,
    preloadedState,
  })

  
  return store
}
