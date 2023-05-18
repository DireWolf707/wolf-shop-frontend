import { useEffect } from "react"
import { itemApi } from "../store"
import { useParams } from "react-router-dom"
import ItemDetail from "../components/item/ItemDetail"
import requestHandler from "../utils/requestHandler"

const Item = () => {
  const { itemId } = useParams()
  const [fetchItem, { data }] = itemApi.useLazyGetItemDetailQuery()

  useEffect(() => {
    requestHandler(fetchItem({ itemId }).unwrap(), "fetching product", "product fetched")
  }, [])

  return <ItemDetail item={data?.data} />
}

export default Item
