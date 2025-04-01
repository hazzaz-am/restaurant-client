import { Outlet } from "react-router"
import NavComponent from "../components/shared/NavComponent"
import FooterComponent from "../components/shared/FooterComponent"

const Layout = () => {
  return (
    <>
      <NavComponent/>
      <Outlet/>
      <FooterComponent/>
    </>
  )
}
export default Layout