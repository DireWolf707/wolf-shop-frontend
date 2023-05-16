import { Button } from "@mui/material"
import useCheckout from "../../../hooks/useCheckout"

const BuyNowButton = ({ item }) => {
  const { checkoutHandler } = useCheckout()

  return (
    <Button onClick={() => checkoutHandler([item])} variant="contained" color="error" fullWidth>
      Buy Now
    </Button>
  )
}

export default BuyNowButton
