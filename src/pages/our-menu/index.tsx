import DynamicSiteTitle from "../../components/shared/DynamicSiteTitle";
import Desserts from "./components/Desserts";
import Offered from "./components/Offered";
import Pizzas from "./components/Pizzas";
import Salads from "./components/Salads";
import Soups from "./components/Soups";

const MenuPage = () => {
	return (
		<>
			<DynamicSiteTitle title="Menu | Restaurant" />
			<section>
				<Offered />
				<Desserts />
        <Pizzas/>
        <Salads/>
        <Soups/>
			</section>
		</>
	);
};
export default MenuPage;
