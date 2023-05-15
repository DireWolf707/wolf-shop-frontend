import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { dataSlice, dataSliceActions } from "./slices/dataSlice"
import userApi from "./apis/userApi"
import itemApi from "./apis/itemApi"

export const store = configureStore({
  reducer: {
    // slices
    [dataSlice.name]: dataSlice.reducer,
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
export { dataSliceActions }
export { userApi, itemApi }
