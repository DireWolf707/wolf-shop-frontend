import { useCallback } from "react"
import { useDispatch, checkoutSliceActions, cartSliceActions, itemApi } from "../store"
import requestHandler from "../utils/requestHandler"

const useCheckout = (cartCheckout = false) => {
  const dispatch = useDispatch()
  const [checkout] = itemApi.useCheckoutMutation()

  const options = ({ orderId, customerId }) => ({
    key: import.meta.env.VITE_RAZORPAY_KEY_ID,
    name: "Direwolf Corp",
    image: "/assets/favicon.svg",
    order_id: orderId,
    prefill: {
      name: "Gaurav Kumar",
      email: "gaurav.kumar@example.com",
      contact: "9000090000",
    },
    customer_id: customerId,
    remember_customer: true,
    handler: (resp) => {
      if (cartCheckout) dispatch(cartSliceActions.clearCart())
      dispatch(checkoutSliceActions.setCheckoutComplete())
    },
    modal: {
      animation: false,
      ondismiss: () => dispatch(checkoutSliceActions.resetOrderState()),
    },
  })

  const checkoutHandler = useCallback(async (items) => {
    dispatch(checkoutSliceActions.setCheckoutStart())

    const body = { itemIds: items.map((item) => item.id) }
    const data = await requestHandler(checkout({ body }).unwrap(), "preparing order", "order prepared")

    dispatch(checkoutSliceActions.setCheckoutPayment())

    const rzp = new Razorpay(options(data.data))
    rzp.open()
  }, [])

  return { checkoutHandler }
}

export default useCheckout
