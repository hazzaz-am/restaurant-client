import { useFetchMenus } from "../../../hooks/useFetchMenus";
import MenusSection from "./MenusSection";
import SectionCover from "./SectionCover";

import soup_img from "../../../assets/menu/soup-bg.jpg";

const Soups = () => {
	const [menus] = useFetchMenus("soup");
	return (
		<section className="mb-12">
			<SectionCover bg_img={soup_img} title="soups" />
			<div className="mt-32">
				<MenusSection menus={Array.isArray(menus) ? menus : []} />
			</div>
		</section>
	);
};
export default Soups;
