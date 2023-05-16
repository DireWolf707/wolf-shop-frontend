import { createPortal } from "react-dom"
import { Stack, Typography, Backdrop, Button } from "@mui/material"
import { useSelector } from "../../store"
import { Player } from "@lottiefiles/react-lottie-player"
import { useDispatch, checkoutSliceActions } from "../../store"

const Checkout = () => {
  const dispatch = useDispatch()
  const { isOrderPreping, isOrderConfirmed } = useSelector((store) => store.checkout)

  let component = <></>
  
  if (isOrderPreping)
    component = (
      <Stack alignItems="center">
        <Typography fontFamily="Sedgwick Ave Display" fontSize="32px">
          Preparing your order 🚀
        </Typography>
        <Player autoplay loop src="/assets/animations/order/preparing-order.json" style={{ height: "420px" }} />
      </Stack>
    )

  if (isOrderConfirmed)
    component = (
      <Stack alignItems="center" position="relative">
        <Player
          autoplay
          loop
          src="/assets/animations/order/order-confirmed-bg.json"
          style={{ width: "720px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
        />
        <Player autoplay loop src="/assets/animations/order/order-confirmed.json" style={{ height: "460px" }} />

        <Button onClick={() => dispatch(checkoutSliceActions.resetOrderState())}>
          <Typography variant="button" fontFamily="Sedgwick Ave Display" fontSize="28px">
            Check your order 😎
          </Typography>
        </Button>
      </Stack>
    )

  return createPortal(
    <Backdrop open={true} sx={{ bgcolor: "rgba(0,0,0,0.65)", zIndex: 2 }}>
      {component}
    </Backdrop>,
    document.getElementById("root")
  )
}

export default Checkout
