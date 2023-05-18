import { Stack, Button, Typography, Skeleton } from "@mui/material"

const ItemListSkeleton = ({ count = 10 }) => {
  return (
    <>
      {Array(count)
        .fill(0)
        .map((_, idx) => (
          <Stack key={idx} width="300px" bgcolor="#fff" borderRadius="14px">
            <Skeleton variant="rectangular" height="240px" sx={{ borderRadius: "12px", m: "9px" }} />

            <Stack m="6px 14px 14px 14px">
              <Typography>
                <Skeleton height="36px" />
              </Typography>

              <Typography>
                <Skeleton width="64px" />
              </Typography>
            </Stack>

            <Stack mt="auto" p="0 6px 6px 6px" bgcolor="rgba(0,0,0,0.1)">
              <Stack alignItems="center" mt="14px" mb="8px">
                <Skeleton height="36px" width="128px" />
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
        ))}
    </>
  )
}

export default ItemListSkeleton
