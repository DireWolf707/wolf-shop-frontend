import { useMediaQuery, Stack, Typography, IconButton, Drawer } from "@mui/material"
import { useDispatch, useSelector, cartSliceActions, userApi } from "../../store"
import CloseIcon from "@mui/icons-material/Close"

const Cart = () => {
  const dispatch = useDispatch()
  const { isCartOpen } = useSelector((store) => store.cart)

  const closeCart = () => dispatch(cartSliceActions.toggleCart(false))

  return (
    <Drawer
      anchor="right"
      variant="temporary"
      open={isCartOpen}
      PaperProps={{
        sx: {
          bgcolor: "rgba(0,0,0,0.65)",
          // gap: 2,
          px: "18px",
          py: "32px",
          width: "100%",
        },
      }}
    >
      <Stack position="relative">
        <Typography fontFamily="Sedgwick Ave Display" fontSize="42px" textAlign="center">
          Cart
        </Typography>

        <IconButton onClick={closeCart} sx={{ position: "absolute", top: "-12px", right: 0 }}>
          <CloseIcon fontSize="large" />
        </IconButton>
      </Stack>
    </Drawer>
  )
}

export default Cart
