import { Stack, Skeleton, Divider } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

const OrderListSkeleton = ({ count = 4 }) => {
  return (
    <Stack divider={<Divider />}>
      {Array(count)
        .fill(0)
        .map((_, idx) => (
          <Stack key={idx} bgcolor="white">
            <Stack flexDirection="row" justifyContent="space-between" alignItems="center" gap={2} px="16px" py="8px">
              <Skeleton height="36px" width="160px" />

              <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
                <Skeleton height="28px" width="70px" />
                <ExpandMoreIcon sx={{ fill: "#000" }} />
              </Stack>
            </Stack>
          </Stack>
        ))}
    </Stack>
  )
}

export default OrderListSkeleton
