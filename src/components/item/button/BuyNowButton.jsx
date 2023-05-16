import { Button } from "@mui/material"
import itemApi from "../../../store/apis/itemApi"
import requestHandler from "../../../utils/requestHandler"
import { useDispatch, checkoutSliceActions } from "../../../store"

const BuyNowButton = ({ itemId }) => {
  const dispatch = useDispatch()
  const [buyNow] = itemApi.useBuyNowMutation()

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
      dispatch(checkoutSliceActions.setCheckoutComplete())
      // alert(resp.razorpay_payment_id)
      // alert(resp.razorpay_order_id)
      // alert(resp.razorpay_signature)
    },
    modal: {
      animation: false,
      ondismiss: () => dispatch(checkoutSliceActions.resetOrderState()),
    },
  })

  const buyNowhandler = async () => {
    dispatch(checkoutSliceActions.setCheckoutStart())
    const data = await requestHandler(buyNow({ itemId }).unwrap(), "preparing order", "order prepared")
    dispatch(checkoutSliceActions.setCheckoutPayment())

    const rzp = new Razorpay(options(data.data))
    rzp.open()
  }

  return (
    <Button onClick={buyNowhandler} variant="contained" color="error" fullWidth>
      Buy Now
    </Button>
  )
}

export default BuyNowButton
