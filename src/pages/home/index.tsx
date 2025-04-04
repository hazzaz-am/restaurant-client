import Banner from "./components/Banner";
import CallToAction from "./components/CallToAction";
import Category from "./components/Category";
import ChefService from "./components/ChefService";
import PopularMenus from "./components/PopularMenus";
import RecommendedMenu from "./components/RecommendedMenu";

const HomePage = () => {
	return (
		<section>
			<Banner />
			<Category />
			<ChefService/>
			<PopularMenus/>
			<CallToAction/>
			<RecommendedMenu/>
		</section>
	);
};
export default HomePage;
