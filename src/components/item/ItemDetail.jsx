import { Stack, Typography } from "@mui/material"
import BuyNowButton from "./button/BuyNowButton"
import AddToCartButton from "./button/AddToCartButton"
import ItemCarousel from "./ItemCarousel"

const ItemDetail = ({ item }) => {
  return (
    <Stack m="auto" p="28px">
      {item ? (
        <Stack sx={{ flexDirection: { xs: "column", md: "row" }, gap: { xs: 0, md: 4 } }}>
          <ItemCarousel images={[item.thumbnail, ...item.images.map((img) => img.link)]} />

          <Stack gap={4} pt="26px" sx={{ width: { xs: "100%", md: "460px" } }}>
            <Stack gap={4}>
              <Stack>
                <Typography fontFamily="Righteous" fontSize="36px">
                  {item.name}
                </Typography>
                <Typography fontFamily="Alkatra" fontSize="22px">
                  {item.brand}
                </Typography>
              </Stack>

              <Stack>
                <Typography fontFamily="Sedgwick Ave Display" fontSize="24px" sx={{ textDecoration: "underline" }}>
                  Description
                </Typography>

                <Typography fontFamily="Righteous" fontSize="18px">
                  {item.description}
                </Typography>
              </Stack>
            </Stack>

            <Stack mt="auto" p="0 6px 6px 6px" bgcolor="rgba(255,255,255,0.22)">
              <Typography fontFamily="Righteous" fontSize="20px" textAlign="center" mt="14px" mb="8px">
                Rs. {item.price}
              </Typography>

              <Stack flexDirection="row" gap={1} p="4px">
                <BuyNowButton item={item} />

                <AddToCartButton item={item} />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      ) : (
        <></>
      )}
    </Stack>
  )
}

export default ItemDetail
