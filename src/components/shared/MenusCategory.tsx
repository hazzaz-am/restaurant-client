import type { MenuItemType } from "../../types/types";
import MenuItem from "./MenuItem";

type MenusType = {
	menus: MenuItemType[];
};

const MenusCategory = ({ menus }: MenusType) => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
			{menus.map((menu) => (
				<MenuItem
					key={menu._id}
					img={menu.image}
					name={menu.name}
					recipe={menu.recipe}
					price={menu.price}
				/>
			))}
		</div>
	);
};
export default MenusCategory;
