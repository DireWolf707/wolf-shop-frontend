import Navbar from "./components/layout/Navbar"
import Sidebar from "./components/layout/Sidebar"
import LoggedInRoute from "./components/wrapper/LoggedInRoute"
import SocketProvider from "./components/wrapper/SocketProvider"
import { Stack } from "@mui/material"
import { Routes, Route } from "react-router-dom"
import { Home, Profile, Shop, Error404, Error500 } from "./pages"
import { userApi } from "./store"

const App = () => {
  const { data: profile } = userApi.useFetchProfileQuery()
  const user = profile.data

  return (
    <Stack height="100vh" width="100vw" overflow="auto" bgcolor="#191924">
      <Navbar />
      {user && <Sidebar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        {/* LoggedIn Routes */}
        <Route element={<LoggedInRoute />}>
          {/* Socket Enabled Routes */}
          <Route element={<SocketProvider />}></Route>
          {/* Socket Disabled Routes */}
          <Route path="/shop" element={<Shop />} />
          <Route path="/profile" element={<Profile />} />
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
