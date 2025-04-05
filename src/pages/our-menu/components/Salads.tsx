import { useFetchMenus } from "../../../hooks/useFetchMenus";
import MenusSection from "./MenusSection";
import SectionCover from "../../../components/shared/SectionCover";

import salad_img from "../../../assets/menu/salad-bg.jpg";

const Salads = () => {
	const [menus] = useFetchMenus("salad");
	return (
		<section className="mb-12">
			<SectionCover bg_img={salad_img} title="salads" />
			<div className="mt-32">
				<MenusSection menus={Array.isArray(menus) ? menus : []} />
			</div>
		</section>
	);
};
export default Salads;
