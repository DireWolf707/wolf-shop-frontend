import { Stack, Box, Typography } from "@mui/material"
import BuyNowButton from "./BuyNowButton"
import AddToCartButton from "./AddToCartButton"

const ItemList = ({ items }) => {
  return (
    <Stack flexDirection="row" flexWrap="wrap" justifyContent="center" alignItems="strech" gap={2} p="20px">
      {items.map((item) => (
        <Stack key={item.id} width="300px" bgcolor="#fff" borderRadius="14px">
          <Box component="img" src={item.thumbnail} height="240px" bgcolor="grey" borderBottom="4px solid #000"  borderRadius="12px" m="9px" sx={{ objectFit: "cover" }} />

          <Stack m="6px 14px 14px 14px">
            <Typography color="#000" fontFamily="Righteous" fontSize="24px">
              {item.name}
            </Typography>
            
            <Typography color="#000" fontFamily="Alkatra" fontSize="16px">
              {item.brand}
            </Typography>
          </Stack>

          <Stack mt="auto" p="0 6px 6px 6px" bgcolor="rgba(0,0,0,0.1)">
            <Typography color="#000" fontFamily="Righteous" fontSize="20px" textAlign="center" mt="14px" mb="8px">
              Rs. {item.price}
            </Typography>

            <Stack flexDirection="row" gap={1} p="4px">
              <BuyNowButton itemId={item.id} />
              <AddToCartButton itemId={item.id} />
            </Stack>
          </Stack>
        </Stack>
      ))}
    </Stack>
  )
}

export default ItemList
