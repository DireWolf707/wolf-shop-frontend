import { Stack, Typography, Accordion, AccordionSummary, AccordionDetails, Button } from "@mui/material"
import OrderListSkeleton from "./OrderListSkeleton"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Player } from "@lottiefiles/react-lottie-player"

const OrderList = ({ orders }) => {
  return (
    <Stack mx="auto" p="36px" sx={{ width: { xs: "100%", md: "780px" } }}>
      <Typography fontFamily="Sedgwick Ave Display" fontSize="36px" textAlign="center" mb="4px">
        Order List
      </Typography>

      {orders ? (
        orders.length ? (
          orders.map((order) => (
            <Accordion key={order.id}>
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fill: "#000" }} />}>
                <Stack flexGrow={1} flexDirection="row" justifyContent="space-between" alignItems="center" gap={2}>
                  <Typography fontFamily="Righteous" fontSize="18px" color="#000">
                    #{order.razorpayOrderId}
                  </Typography>

                  <Typography color="#000" fontSize="15px">
                    Rs. {order.amount}
                  </Typography>
                </Stack>
              </AccordionSummary>

              <AccordionDetails sx={{ px: "36px" }}>
                <Typography color="#000" fontWeight="bold" sx={{ textDecoration: "underline" }}>
                  Date Time
                </Typography>

                <Typography color="#000" mb="12px">
                  {new Date(order.createdAt).toLocaleString()}
                </Typography>

                <Typography color="#000" fontWeight="bold" sx={{ textDecoration: "underline" }}>
                  Amount
                </Typography>

                <Typography color="#000" mb="12px">
                  Rs. {order.amount}
                </Typography>

                <Typography color="#000" fontWeight="bold" sx={{ textDecoration: "underline" }}>
                  Order Id
                </Typography>

                <Typography color="#000" mb="12px">
                  #{order.razorpayOrderId}
                </Typography>

                <Typography color="#000" fontWeight="bold" sx={{ textDecoration: "underline" }}>
                  Payment Id
                </Typography>

                <Typography color="#000" mb="12px">
                  #{order.razorpayPaymentId}
                </Typography>

                <Stack flexDirection="row" justifyContent="end" mb="2px">
                  <Button target="_blank" href={order.invoice} download={`${order.razorpayPaymentId}.pdf`} variant="contained">
                    Incoice
                  </Button>
                </Stack>
              </AccordionDetails>
            </Accordion>
          ))
        ) : (
          <Stack justifyContent="center" alignItems="center">
            <Player autoplay loop src="/assets/animations/order/empty-orders.json" style={{ height: "380px" }} />

            <Typography fontFamily="Sedgwick Ave Display" sx={{ fontSize: { xs: "28px", sm: "32px" } }}>
              No orders placed 🙁
            </Typography>
          </Stack>
        )
      ) : (
        <OrderListSkeleton />
      )}
    </Stack>
  )
}

export default OrderList
