import { createSlice } from "@reduxjs/toolkit"

export const cartSlice = createSlice({
  name: "cart",

  initialState: {
    isCartOpen: false,
  },

  reducers: {
    toggleCart(state, action) {
      state.isCartOpen = action.payload
    },
  },
})

export const cartSliceActions = cartSlice.actions
