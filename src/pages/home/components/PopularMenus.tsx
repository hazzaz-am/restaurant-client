import { useEffect, useState } from "react";
import SectionHeading from "../../../components/shared/SectionHeading";
import MenuItem from "../../../components/shared/MenuItem";
import type { MenuItemType } from "../../../types/types";
import PrimaryButton from "../../../components/ui/PrimaryButton";


const PopularMenus = () => {
	const [menus, setMenus] = useState<MenuItemType[]>([]);

	useEffect(() => {
		fetch("/menu.json")
			.then((res) => res.json())
			.then((menu) => {
				const popularMenu = menu.filter(
					(item: MenuItemType) => item.category === "popular"
				);
				setMenus(popularMenu);
			});
	}, []);

	return (
		<section className="container px-4 mx-auto mb-32">
			<SectionHeading
				subHeading="Check out popular items"
				heading="from our menu"
			/>
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
			<div className="text-center">
				<PrimaryButton path="/our-menu">View Full Menu</PrimaryButton>
			</div>
		</section>
	);
};
export default PopularMenus;
