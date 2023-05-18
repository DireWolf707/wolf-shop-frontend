import { Stack, Box, Typography, IconButton, Drawer, Button } from "@mui/material"
import { useDispatch, useSelector, cartSliceActions, userApi } from "../../store"
import CloseIcon from "@mui/icons-material/Close"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import useCheckout from "../../hooks/useCheckout"
import LoginButton from "../layout/button/LoginButton"
import { Player } from "@lottiefiles/react-lottie-player"
import { motion, AnimatePresence } from "framer-motion"
import { cartItemVariant, stagerChildrenVariant, animateConstants } from "../../utils/animations"

const Cart = () => {
  const dispatch = useDispatch()
  const { isCartOpen, cart } = useSelector((store) => store.cart)
  const { checkoutHandler } = useCheckout(true)
  const {
    data: { data: user = null },
  } = userApi.useFetchProfileQuery()

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
        <Stack
          component={motion.div}
          variants={stagerChildrenVariant}
          {...animateConstants}
          gap={2}
          p="12px 36px 36px 36px"
          overflow="auto"
          mx="auto"
          sx={{ width: { xs: "100%", md: "840px" } }}
        >
          <AnimatePresence>
            {cart.map((item) => (
              <Stack
                key={item.id}
                component={motion.div}
                variants={cartItemVariant}
                layout
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                bgcolor="rgb(236,236,236)"
                px="12px"
                position="relative"
                sx={{ py: { xs: "16px", sm: "6px" } }}
              >
                <IconButton
                  onClick={() => dispatch(cartSliceActions.clearItem(item.id))}
                  sx={{ position: "absolute", top: 0, left: 0, transform: "translate(-50%,-50%)" }}
                >
                  <CloseIcon sx={{ bgcolor: "red", borderRadius: "100%" }} />
                </IconButton>

                <Stack flexGrow={1} gap={3.5} sx={{ flexDirection: { xs: "column", sm: "row" } }}>
                  <Box component="img" src={item.thumbnail} borderRadius="6px" height="90px" width="90px" />

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
          </AnimatePresence>

          <Stack flexDirection="row" justifyContent="space-between" alignItems="center" borderTop="4px solid #fff" px="16px" py="24px">
            <Typography fontFamily="Sedgwick Ave Display" color="red" sx={{ fontSize: { xs: "28px", sm: "36px" } }}>
              Total
            </Typography>

            <Typography fontFamily="Righteous" fontWeight="bold" color="red" sx={{ fontSize: { xs: "18px", sm: "28px" } }}>
              Rs: {cart.reduce((acc, item) => acc + item.price * item.qty, 0)}
            </Typography>
          </Stack>

          {user ? (
            <Button onClick={cartCheckout} variant="contained" color="error">
              Checkout
            </Button>
          ) : (
            <LoginButton />
          )}
        </Stack>
      ) : (
        <Stack flexGrow={1} justifyContent="center" alignItems="center">
          <Player autoplay loop src="/assets/animations/order/empty-cart.json" style={{ height: "420px" }} />

          <Typography fontFamily="Sedgwick Ave Display" sx={{ fontSize: { xs: "28px", sm: "32px" } }}>
            Your cart is empty 🙁
          </Typography>
        </Stack>
      )}
    </Drawer>
  )
}

export default Cart
