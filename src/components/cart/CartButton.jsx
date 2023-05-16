import { Stack, Button, Badge, Typography } from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { useSelector, useDispatch, cartSliceActions } from "../../store"

const CartButton = ({ gap = 0, textTransform = "lowercase", closeSidebar = null }) => {
  const dispatch = useDispatch()
  const { cart } = useSelector((store) => store.cart)

  const openCartHandler = () => {
    if (closeSidebar) closeSidebar()
    dispatch(cartSliceActions.toggleCart(true))
  }

  return (
    <Button onClick={openCartHandler}>
      <Stack flexDirection="row" alignItems="center" gap={gap}>
        <Badge
          badgeContent={cart.reduce((acc, item) => acc + item.qty, 0)}
          max={99}
          color="primary"
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <ShoppingCartIcon />
        </Badge>

        <Typography fontFamily="Righteous" fontSize="14px" textTransform={textTransform}>
          Cart
        </Typography>
      </Stack>
    </Button>
  )
}

export default CartButton
