import { useEffect } from "react"
import { itemApi } from "../store"
import ItemList from "../components/item/ItemList"
import requestHandler from "../utils/requestHandler"

const Shop = () => {
  const [fetchItems, { data }] = itemApi.useLazyGetItemListQuery()

  useEffect(() => {
    requestHandler(fetchItems().unwrap(), "fetching products", "products fetched")
  }, [])

  return <ItemList items={data?.data} />
}

export default Shop
