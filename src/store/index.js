import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { dataSlice, dataSliceActions } from "./slices/dataSlice"
import { checkoutSlice, checkoutSliceActions } from "./slices/checkoutSlice"
import { cartSlice, cartSliceActions } from "./slices/cartSlice"
import userApi from "./apis/userApi"
import itemApi from "./apis/itemApi"

export const store = configureStore({
  reducer: {
    // slices
    [dataSlice.name]: dataSlice.reducer,
    [checkoutSlice.name]: checkoutSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    // apis
    [userApi.reducerPath]: userApi.reducer,
    [itemApi.reducerPath]: itemApi.reducer,
  },
  // apis middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(userApi.middleware).concat(itemApi.middleware),
})

setupListeners(store.dispatch)

export { useSelector, useDispatch } from "react-redux"
export { dataSliceActions, checkoutSliceActions, cartSliceActions }
export { userApi, itemApi }
