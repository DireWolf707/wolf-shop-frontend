import { Stack, Box, Typography } from "@mui/material"
import BuyNowButton from "./button/BuyNowButton"
import AddToCartButton from "./button/AddToCartButton"
import ItemListSkeleton from "./skeleton/ItemListSkeleton"
import { Link } from "react-router-dom"

const ItemList = ({ items }) => {
  return (
    <Stack flexDirection="row" flexWrap="wrap" justifyContent="center" alignItems="strech" gap={2} p="20px">
      {items ? (
        items.map((item) => (
          <Stack key={item.id} width="300px" bgcolor="#fff" borderRadius="14px">
            <Box
              component="img"
              src={item.thumbnail}
              height="240px"
              bgcolor="grey"
              borderBottom="4px solid #000"
              borderRadius="12px"
              m="9px"
            />

            <Stack m="6px 14px 14px 14px">
              <Link to={item.id}>
                <Typography color="#000" fontFamily="Righteous" fontSize="24px">
                  {item.name}
                </Typography>
              </Link>

              <Typography color="#000" fontFamily="Alkatra" fontSize="16px">
                {item.brand}
              </Typography>
            </Stack>

            <Stack mt="auto" p="0 6px 6px 6px" bgcolor="rgba(0,0,0,0.1)">
              <Typography color="#000" fontFamily="Righteous" fontSize="20px" textAlign="center" mt="14px" mb="8px">
                Rs. {item.price}
              </Typography>

              <Stack flexDirection="row" gap={1} p="4px">
                <BuyNowButton item={item} />

                <AddToCartButton item={item} />
              </Stack>
            </Stack>
          </Stack>
        ))
      ) : (
        <ItemListSkeleton />
      )}
    </Stack>
  )
}

export default ItemList
