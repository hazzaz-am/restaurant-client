import SectionCover from "./SectionCover";
import menu_bg from "../../../assets/menu/menu.jpg";
import SectionHeading from "../../../components/shared/SectionHeading";
import { useFetchMenus } from "../../../hooks/useFetchMenus";
import MenusSection from "./MenusSection";

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
				<MenusSection menus={Array.isArray(menus) ? menus : []} />
			</div>
		</section>
	);
};
export default Offered;
