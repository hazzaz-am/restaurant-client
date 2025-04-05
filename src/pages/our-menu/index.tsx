import DynamicSiteTitle from "../../components/shared/DynamicSiteTitle";
import Desserts from "./components/Desserts";
import Offered from "./components/Offered";

const MenuPage = () => {
	return (
		<>
			<DynamicSiteTitle title="Menu | Restaurant" />
			<section>
				<Offered />
				<Desserts />
			</section>
		</>
	);
};
export default MenuPage;
