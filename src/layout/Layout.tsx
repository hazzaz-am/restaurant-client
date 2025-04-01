import { Outlet } from "react-router"
import NavComponent from "../components/shared/NavComponent"
import FooterComponent from "../components/shared/FooterComponent"

const Layout = () => {
  return (
    <div>
      <NavComponent/>
      <Outlet/>
      <FooterComponent/>
    </div>
  )
}
export default Layout