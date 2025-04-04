import Banner from "./components/Banner";
import CallToAction from "./components/CallToAction";
import Category from "./components/Category";
import ChefService from "./components/ChefService";
import PopularMenus from "./components/PopularMenus";

const HomePage = () => {
	return (
		<section>
			<Banner />
			<Category />
			<ChefService/>
			<PopularMenus/>
			<CallToAction/>
		</section>
	);
};
export default HomePage;
