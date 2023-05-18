import { useCallback } from "react"
import { useDispatch, checkoutSliceActions, cartSliceActions, itemApi } from "../store"
import requestHandler from "../utils/requestHandler"

const useCheckout = (cartCheckout = false) => {
  const dispatch = useDispatch()
  const [checkout] = itemApi.useCheckoutMutation()

  const options = ({ orderId }) => ({
    key: import.meta.env.VITE_RAZORPAY_KEY_ID,
    name: "Direwolf Corp",
    image: "/assets/favicon.svg",
    order_id: orderId,
    handler: (resp) => {
      if (cartCheckout) dispatch(cartSliceActions.clearCart())
      dispatch(checkoutSliceActions.setCheckoutComplete())
    },
    modal: { ondismiss: () => dispatch(checkoutSliceActions.resetOrderState()) },
  })

  const checkoutHandler = useCallback((cart) => {
    dispatch(checkoutSliceActions.setCheckoutStart())

    const body = { cart: cart.map(({ id, qty }) => ({ id, qty })) }
    requestHandler(checkout({ body }).unwrap(), "preparing order", "order prepared")
      .then((data) => {
        dispatch(checkoutSliceActions.setCheckoutPayment())

        const rzp = new Razorpay(options(data.data))
        rzp.open()
      })
      .catch(() => dispatch(checkoutSliceActions.resetOrderState()))
  }, [])

  return { checkoutHandler }
}

export default useCheckout
