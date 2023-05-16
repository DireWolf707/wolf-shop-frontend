import { createSlice } from "@reduxjs/toolkit"

export const checkoutSlice = createSlice({
  name: "checkout",

  initialState: {
    isCheckout: false,
    isOrderPreping: false,
    isOrderConfirmed: false,
  },

  reducers: {
    setCheckoutStart(state, action) {
      state.isCheckout = true
      state.isOrderPreping = true
    },

    setCheckoutPayment(state, action) {
      state.isOrderPreping = false
    },

    setCheckoutComplete(state, action) {
      state.isOrderConfirmed = true
    },

    resetOrderState(state, action) {
      state.isCheckout = false
      state.isOrderPreping = false
      state.isOrderConfirmed = false
    },
  },
})

export const checkoutSliceActions = checkoutSlice.actions
