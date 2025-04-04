import { useEffect, useState } from "react";
import SectionHeading from "../../../components/shared/SectionHeading";
import MenuItem from "../../../components/shared/MenuItem";
import { Link } from "react-router";

type MenuItem = {
	_id: string;
	name: string;
	recipe: string;
	image: string;
	category: string;
	price: number;
};

const PopularMenus = () => {
	const [menus, setMenus] = useState<MenuItem[]>([]);

	useEffect(() => {
		fetch("/menu.json")
			.then((res) => res.json())
			.then((menu) => {
				const popularMenu = menu.filter(
					(item: MenuItem) => item.category === "popular"
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
				<Link
					to="/our-menu"
					className="uppercase py-5 px-[30px] text-[#1F2937] text-sm md:text-xl border-b-2 rounded-md cursor-pointer"
				>
					View Full Menu
				</Link>
			</div>
		</section>
	);
};
export default PopularMenus;
