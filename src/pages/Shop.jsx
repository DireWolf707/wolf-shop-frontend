import { useEffect } from "react"
import { Stack } from "@mui/material"
import { useSelector, itemApi } from "../store"
import ItemList from "../components/item/ItemList"
import ItemListSkeleton from "../components/item/skeleton/ItemListSkeleton"
import Checkout from "../components/item/Checkout"
import requestHandler from "../utils/requestHandler"

const Shop = () => {
  const { isCheckout } = useSelector((store) => store.checkout)
  const [fetchItems, { data }] = itemApi.useLazyGetItemListQuery()

  useEffect(() => {
    requestHandler(fetchItems().unwrap(), "fetching products", "products fetched")
  }, [])

  return (
    <Stack flexGrow={1}>
      {data && <ItemList items={data.data} />}
      {!data && <ItemListSkeleton />}
      {isCheckout && <Checkout />}
    </Stack>
  )
}

export default Shop
