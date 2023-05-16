import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export default createApi({
  reducerPath: "item",

  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_URL}/item`,
    credentials: "include",
  }),

  endpoints(builder) {
    return {
      getItemList: builder.query({
        query: () => ({
          url: "/",
          method: "GET",
        }),
      }),

      getItemDetail: builder.query({
        query: ({ itemId }) => ({
          url: `/${itemId}`,
          method: "GET",
        }),
      }),

      checkout: builder.mutation({
        query: ({ body }) => ({
          url: "/checkout",
          method: "POST",
          body,
        }),
      }),
    }
  },
})
