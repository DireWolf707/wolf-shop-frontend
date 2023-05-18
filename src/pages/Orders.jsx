import { useEffect } from "react"
import { itemApi } from "../store"
import OrderList from "../components/orders/OrderList"
import requestHandler from "../utils/requestHandler"

const Orders = () => {
  const [fetchOrders, { data }] = itemApi.useLazyGetOrdersQuery()

  useEffect(() => {
    requestHandler(fetchOrders().unwrap(), "fetching orders", "orders fetched")
  }, [])

  return <OrderList orders={data?.data} />
}

export default Orders
