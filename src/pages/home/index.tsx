import Banner from "./components/Banner";
import CallToAction from "./components/CallToAction";
import Category from "./components/Category";
import ChefService from "./components/ChefService";
import Featured from "./components/Featured";
import PopularMenus from "./components/PopularMenus";
import RecommendedMenu from "./components/RecommendedMenu";
import Testimonials from "./components/Testimonials";

const HomePage = () => {
	return (
		<section>
			<Banner />
			<Category />
			<ChefService/>
			<PopularMenus/>
			<CallToAction/>
			<RecommendedMenu/>
			<Featured/>
			<Testimonials/>
		</section>
	);
};
export default HomePage;
