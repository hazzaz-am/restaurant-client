import { Outlet, useLocation } from "react-router";
import NavComponent from "../components/shared/NavComponent";
import FooterComponent from "../components/shared/FooterComponent";

const Layout = () => {
	const location = useLocation();
	const isAuthPage = location.pathname.includes("sign-in");

	return (
		<>
			{isAuthPage || <NavComponent />}
			<Outlet />
			{isAuthPage || <FooterComponent />}
		</>
	);
};
export default Layout;
