import { Button } from "@mui/material"
import { useDispatch, cartSliceActions } from "../../../store"

const AddToCartButton = ({ item }) => {
  const dispatch = useDispatch()

  return (
    <Button onClick={() => dispatch(cartSliceActions.addItem(item))} variant="contained" color="primary" fullWidth>
      Add To Cart
    </Button>
  )
}

export default AddToCartButton
