import { createSlice } from "@reduxjs/toolkit"

export const dataSlice = createSlice({
  name: "data",

  initialState: {
    topRef: null,
    sidebar: false,
  },

  reducers: {
    toggleSidebar(state, action) {
      state.sidebar = action.payload
    },

    setTopRef(state, action) {
      state.topRef = action.payload
    },
  },
})

export const dataSliceActions = dataSlice.actions
