import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { dataSlice, dataSliceActions } from "./slices/dataSlice"
import { checkoutSlice, checkoutSliceActions } from "./slices/checkoutSlice"
import { cartSlice, cartSliceActions } from "./slices/cartSlice"
import userApi from "./apis/userApi"
import itemApi from "./apis/itemApi"

const rootReducer = combineReducers({
  // slices
  [dataSlice.name]: dataSlice.reducer,
  [checkoutSlice.name]: checkoutSlice.reducer,
  [cartSlice.name]: cartSlice.reducer,
  // apis
  [userApi.reducerPath]: userApi.reducer,
  [itemApi.reducerPath]: itemApi.reducer,
})

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
    whitelist: [cartSlice.name],
  },
  rootReducer
)

export const store = configureStore({
  reducer: persistedReducer,
  // apis middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(userApi.middleware).concat(itemApi.middleware),
})
setupListeners(store.dispatch)

export const persistor = persistStore(store)

export { useSelector, useDispatch } from "react-redux"
export { dataSliceActions, checkoutSliceActions, cartSliceActions }
export { userApi, itemApi }
