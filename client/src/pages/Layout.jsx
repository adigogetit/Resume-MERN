import { Outlet } from "react-router-dom"
import Navbar from "../components/other/Navbar"

const Layout = () => {
  return (
    <div>

      <div className="min-h-screen bg-gray-100">
        <Navbar/>
        <Outlet/>
      </div>

    </div>
  )
}

export default Layout
