import SectionCover from "../../../components/shared/SectionCover" 
import desserts_img from '../../../assets/menu/dessert-bg.jpeg'
import { useFetchMenus } from "../../../hooks/useFetchMenus";
import MenusSection from "./MenusSection";

const Desserts = () => {
  const [menus] = useFetchMenus("dessert");

  return (
		<section className="mb-12">
			<SectionCover
				bg_img={desserts_img}
				description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
				title="desserts"
			/>
			<div className="mt-32">
				<MenusSection menus={Array.isArray(menus) ? menus : []} />
			</div>
		</section>
	);
}
export default Desserts