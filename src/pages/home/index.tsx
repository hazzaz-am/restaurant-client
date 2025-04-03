import Banner from "./components/Banner";
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
		</section>
	);
};
export default HomePage;
