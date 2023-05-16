import { createSlice } from "@reduxjs/toolkit"

export const cartSlice = createSlice({
  name: "cart",

  initialState: {
    isCartOpen: false,
    cart: [],
  },

  reducers: {
    toggleCart(state, action) {
      state.isCartOpen = action.payload
    },

    addItem(state, action) {
      const newItem = action.payload
      const prevItem = state.cart.find((item) => item.id === newItem.id)

      if (prevItem) prevItem.qty++
      else state.cart.push({ ...newItem, qty: 1 })
    },

    removeItem(state, action) {
      state.cart = state.cart.filter((item) => {
        if (item.id !== action.payload) return true
        if (item.qty <= 1) return false

        item.qty--
        return true
      })
    },

    clearItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload)
    },

    clearCart(state, action) {
      state.cart = []
    },
  },
})

export const cartSliceActions = cartSlice.actions
