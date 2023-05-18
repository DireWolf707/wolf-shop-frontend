import { Box } from "@mui/material"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const ItemCarousel = ({ images, xsHeight = "360px", xsWidth = "280px", mdHeight = "420px", mdWidth = "340px" }) => {
  return (
    <Box alignSelf="center" component={Carousel} showThumbs={false} autoPlay infiniteLoop interval={1500} sx={{ width: { xs: xsWidth, md: mdWidth } }}>
      {images.map((image, idx) => (
        <Box
          key={idx}
          component="img"
          src={image}
          bgcolor="grey"
          borderBottom="4px solid #000"
          borderRadius="12px"
          sx={{ height: { xs: xsHeight, md: mdHeight } }}
        />
      ))}
    </Box>
  )
}

export default ItemCarousel
