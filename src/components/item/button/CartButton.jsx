import { Stack, Button, Badge, Typography } from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { useDispatch, cartSliceActions } from "../../../store"

const CartButton = ({ gap = 0, textTransform = "lowercase", closeSidebar = null }) => {
  const dispatch = useDispatch()

  const openCartHandler = () => {
    if (closeSidebar) closeSidebar()
    dispatch(cartSliceActions.toggleCart(true))
  }

  return (
    <Button onClick={openCartHandler}>
      <Stack flexDirection="row" alignItems="center" gap={gap}>
        <ShoppingCartIcon />

        <Typography fontFamily="Righteous" fontSize="14px" textTransform={textTransform}>
          Cart
        </Typography>
      </Stack>
    </Button>
  )
}

export default CartButton
