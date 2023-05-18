import { Stack, Button, Typography, Skeleton } from "@mui/material"

const ItemDetailSkeleton = () => {
  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" }, gap: { xs: 0, md: 4 } }}>
      <Skeleton variant="rectangular" sx={{ bgcolor: "grey", height: { xs: "360px", md: "420px" }, width: { xs: "280px", md: "340px" } }} />

      <Stack gap={4} pt="26px" sx={{ width: { xs: "100%", md: "460px" } }}>
        <Stack gap={4}>
          <Stack>
            <Typography>
              <Skeleton height="42px" width="55%" sx={{ bgcolor: "grey" }} />
            </Typography>

            <Typography>
              <Skeleton width="28%" sx={{ bgcolor: "grey" }} />
            </Typography>
          </Stack>

          <Stack>
            <Typography fontFamily="Sedgwick Ave Display" fontSize="24px" sx={{ textDecoration: "underline" }}>
              Description
            </Typography>

            <Typography>
              <Skeleton sx={{ bgcolor: "grey" }} />

              <Skeleton width="40%" sx={{ bgcolor: "grey" }} />
            </Typography>
          </Stack>
        </Stack>

        <Stack mt="auto" p="0 6px 6px 6px" bgcolor="rgba(255,255,255,0.22)">
          <Stack alignItems="center" mt="14px" mb="8px">
            <Skeleton sx={{ bgcolor: "grey" }} height="36px" width="128px" />
          </Stack>

          <Stack flexDirection="row" gap={1} p="4px">
            <Button variant="contained" fullWidth disabled={true}>
              Buy Now
            </Button>
            <Button variant="contained" fullWidth disabled={true}>
              Add To Cart
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default ItemDetailSkeleton
