import { Outlet } from "react-router-dom"
import Navbar from "../components/other/Navbar"

const Layout = () => {
  return (
    <div>

      <div className="min-h-screen bg-black">
        <Navbar/>
        <Outlet/>
      </div>

    </div>
  )
}

export default Layout
