import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import StoreIcon from "@mui/icons-material/Store"
import CartButton from "../components/cart/CartButton"

export const navHeight = "96px"

export const navType = {
  link: 0,
  button: 1,
}

export const publicNavLinks = [
  {
    title: "shop",
    type: navType.link,
    href: "/shop",
    Icon: StoreIcon,
  },
  {
    type: navType.button,
    Button: CartButton,
  },
]

export const privateNavLinks = [
  {
    title: "profile",
    type: navType.link,
    href: "/profile",
    Icon: AccountCircleIcon,
  },
]
