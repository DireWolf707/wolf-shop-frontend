import { Stack, Box, Typography, IconButton, Drawer, Button } from "@mui/material"
import { useDispatch, useSelector, cartSliceActions } from "../../store"
import CloseIcon from "@mui/icons-material/Close"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import useCheckout from "../../hooks/useCheckout"
import { Player } from "@lottiefiles/react-lottie-player"

const Cart = () => {
  const dispatch = useDispatch()
  const { isCartOpen, cart } = useSelector((store) => store.cart)
  const { checkoutHandler } = useCheckout(true)

  const closeCart = () => dispatch(cartSliceActions.toggleCart(false))

  const cartCheckout = () => {
    closeCart()
    checkoutHandler(cart)
  }

  return (
    <Drawer
      anchor="right"
      variant="temporary"
      open={isCartOpen}
      PaperProps={{
        sx: {
          bgcolor: "rgba(0,0,0,0.65)",
          p: "26px 32px 16px 32px",
          gap: 2,
          width: "100%",
        },
      }}
    >
      <Stack position="relative">
        <Typography fontFamily="Sedgwick Ave Display" fontSize="42px" textAlign="center">
          Cart
        </Typography>

        <IconButton onClick={closeCart} sx={{ position: "absolute", top: "-10px", right: "12px" }}>
          <CloseIcon fontSize="large" />
        </IconButton>
      </Stack>

      {cart.length ? (
        <Stack gap={2} p="12px 36px 36px 36px" overflow="auto" mx="auto" sx={{ width: { xs: "100%", md: "840px" } }}>
          {cart.map((item) => (
            <Stack
              key={item.id}
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              bgcolor="rgb(236,236,236)"
              px="12px"
              py="6px"
              position="relative"
            >
              <IconButton
                onClick={() => dispatch(cartSliceActions.clearItem(item.id))}
                sx={{ position: "absolute", top: 0, left: 0, transform: "translate(-50%,-50%)" }}
              >
                <CloseIcon sx={{ bgcolor: "red", borderRadius: "100%" }} />
              </IconButton>

              <Stack flexDirection="row" gap={3.5}>
                <Box component="img" src={item.thumbnail} height="90px" width="90px" borderRadius="6px" />

                <Stack gap={1}>
                  <Stack>
                    <Typography color="#000" fontFamily="Righteous" fontSize="20px">
                      {item.name}
                    </Typography>
                    <Typography color="#000" fontFamily="Alkatra" fontSize="16px">
                      {item.brand}
                    </Typography>
                  </Stack>

                  <Typography color="#000" fontFamily="Righteous" fontSize="20px">
                    Rs. {item.price}
                  </Typography>
                </Stack>
              </Stack>

              <Stack alignItems="center">
                <IconButton onClick={() => dispatch(cartSliceActions.addItem(item))}>
                  <KeyboardArrowUpIcon sx={{ fill: "#2258E7" }} />
                </IconButton>

                <Typography fontFamily="Righteous" color="#000">
                  {item.qty}
                </Typography>

                <IconButton onClick={() => dispatch(cartSliceActions.removeItem(item.id))}>
                  <KeyboardArrowDownIcon sx={{ fill: "#2258E7" }} />
                </IconButton>
              </Stack>
            </Stack>
          ))}

          <Stack flexDirection="row" justifyContent="space-between" alignItems="center" borderTop="4px solid #fff" px="16px" py="24px">
            <Typography fontFamily="Sedgwick Ave Display" fontSize="36px" color="red">
              Total
            </Typography>

            <Typography fontFamily="Righteous" fontSize="28px" fontWeight="bold" color="red">
              Rs: {cart.reduce((acc, item) => acc + item.price, 0)}
            </Typography>
          </Stack>

          <Button onClick={cartCheckout} variant="contained" color="error">
            Checkout
          </Button>
        </Stack>
      ) : (
        <Stack alignItems="center" mt="26px">
          <Player autoplay loop src="/assets/animations/order/empty-cart.json" style={{ height: "480px" }} />

          <Typography fontFamily="Sedgwick Ave Display" fontSize="32px">
            Your cart is empty 🙁
          </Typography>
        </Stack>
      )}
    </Drawer>
  )
}

export default Cart
