import DynamicSiteTitle from "../../components/shared/DynamicSiteTitle";
import Offered from "./components/Offered";

const MenuPage = () => {
	return (
		<>
			<DynamicSiteTitle title="Menu | Restaurant" />
			<section>
				<Offered />
			</section>
		</>
	);
};
export default MenuPage;
