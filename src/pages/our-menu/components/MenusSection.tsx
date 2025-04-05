import MenusCategory from "../../../components/shared/MenusCategory";
import PrimaryButton from "../../../components/ui/PrimaryButton";
import type { MenuItemType } from "../../../types/types";

type MenusSectionProps = {
	menus: MenuItemType[];
};

const MenusSection = ({ menus }: MenusSectionProps) => {
	return (
		<>
			<div className="container mx-auto px-4">
				<MenusCategory menus={Array.isArray(menus) ? menus : []} />
			</div>
			<div className="mt-11 text-center">
				<PrimaryButton path="/our-shop">
					ORDER YOUR FAVOURITE FOOD
				</PrimaryButton>
			</div>
		</>
	);
};
export default MenusSection