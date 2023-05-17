import { Button } from "@mui/material"
import useCheckout from "../../../hooks/useCheckout"
import { userApi } from "../../../store"

const BuyNowButton = ({ item }) => {
  const { checkoutHandler } = useCheckout()
  const {
    data: { data: user = null },
  } = userApi.useFetchProfileQuery()

  if (!user) return

  return (
    <Button onClick={() => checkoutHandler([{ ...item, qty: 1 }])} variant="contained" color="error" fullWidth>
      Buy Now
    </Button>
  )
}

export default BuyNowButton
