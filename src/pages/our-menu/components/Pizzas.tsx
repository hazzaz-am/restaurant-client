import { useFetchMenus } from "../../../hooks/useFetchMenus";
import MenusSection from "./MenusSection";
import SectionCover from "../../../components/shared/SectionCover";

import pizza_img from '../../../assets/menu/pizza-bg.jpg'

const Pizzas = () => {
  const [menus] = useFetchMenus("pizza")
  return (
		<section className="mb-12">
			<SectionCover
				bg_img={pizza_img}
				title="pizza"
			/>
			<div className="mt-32">
				<MenusSection menus={Array.isArray(menus) ? menus : []} />
			</div>
		</section>
	);
}
export default Pizzas