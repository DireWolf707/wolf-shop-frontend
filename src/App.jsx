import Navbar from "./components/layout/Navbar"
import Sidebar from "./components/layout/Sidebar"
import LoggedInRoute from "./components/wrapper/LoggedInRoute"
import SocketProvider from "./components/wrapper/SocketProvider"
import { Stack } from "@mui/material"
import { Routes, Route } from "react-router-dom"
import { Home, Profile, Shop, Orders, Item, Error404, Error500 } from "./pages"
import { useSelector } from "./store"
import Cart from "./components/cart/Cart"
import Checkout from "./components/checkout/Checkout"

const App = () => {
  const { isCheckout } = useSelector((store) => store.checkout)

  return (
    <Stack height="100vh" width="100vw" overflow="auto" bgcolor="#191924">
      <Navbar />

      <Sidebar />

      <Cart />

      {isCheckout && <Checkout />}

      <Routes>
        {/* Public Routes */}

        {/* Socket Disabled Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:itemId" element={<Item />} />

        {/* Socket Enabled Routes */}
        {/* <Route element={<SocketProvider />}></Route> */}

        {/* LoggedIn Routes */}
        <Route element={<LoggedInRoute />}>
          {/* Socket Disabled Routes */}
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />

          {/* Socket Enabled Routes */}
          {/* <Route element={<SocketProvider />}></Route> */}
        </Route>

        {/* Server Error (500) */}
        <Route path="/500" element={<Error500 />} />

        {/* Unknown Routes (404) */}
        <Route path="*" element={<Error404 />} />
        {/* End */}
      </Routes>
    </Stack>
  )
}

export default App
