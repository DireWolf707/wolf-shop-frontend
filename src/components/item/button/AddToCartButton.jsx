import { Button } from "@mui/material"
import { useDispatch, cartSliceActions } from "../../../store"
import { toast } from "react-hot-toast"
import Toast from "../../layout/Toast"

const AddToCartButton = ({ item }) => {
  const dispatch = useDispatch()

  const addToCartHandler = () => {
    dispatch(cartSliceActions.addItem(item))
    toast.success(Toast(`${item.name} added to cart!`))
  }

  return (
    <Button onClick={addToCartHandler} variant="contained" color="primary" fullWidth>
      Add To Cart
    </Button>
  )
}

export default AddToCartButton
