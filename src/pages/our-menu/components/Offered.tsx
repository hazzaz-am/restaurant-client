import SectionCover from "./SectionCover";
import menu_bg from "../../../assets/menu/menu.jpg";
import SectionHeading from "../../../components/shared/SectionHeading";
import MenusCategory from "../../../components/shared/MenusCategory";
import { useFetchMenus } from "../../../hooks/useFetchMenus";
import PrimaryButton from "../../../components/ui/PrimaryButton";

const Offered = () => {
	const [menus] = useFetchMenus("offered");
	return (
		<section className="mb-12">
			<SectionCover
				bg_img={menu_bg}
				title="OUR MENU"
				description="would you like to try a dish"
				page_banner={true}
			/>
			<div className="mt-32">
				<SectionHeading heading="today's offer" subHeading="Don't miss" />
				<div className="container mx-auto px-4">
					<MenusCategory menus={Array.isArray(menus) ? menus : []} />
				</div>
				<div className="mt-11 text-center">
					<PrimaryButton path="/our-shop">ORDER YOUR FAVOURITE FOOD</PrimaryButton>
				</div>
			</div>
		</section>
	);
};
export default Offered;
