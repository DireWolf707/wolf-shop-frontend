import { useEffect } from "react"
import { Stack } from "@mui/material"
import { itemApi } from "../store"
import ItemList from "../components/item/ItemList"
import requestHandler from "../utils/requestHandler"

const Shop = () => {
  const [fetchItems, { data }] = itemApi.useLazyGetItemListQuery()

  useEffect(() => {
    requestHandler(fetchItems().unwrap(), "fetching products", "products fetched")
  }, [])

  return (
    <Stack flexGrow={1}>
      {data && <ItemList items={data.data} />}
      {!data && "loading skeleton..."}
    </Stack>
  )
}

export default Shop
