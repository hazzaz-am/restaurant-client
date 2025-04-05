import { useEffect, useState } from "react";
import SectionHeading from "../../../components/shared/SectionHeading";
import { MenuItemType } from "../../../types/types";
import ShopItem from "../../../components/shared/ShopItem";

const RecommendedMenu = () => {
	const [recommended, setRecommended] = useState([]);
	useEffect(() => {
		fetch("menus.json")
			.then((res) => res.json())
			.then((data) => {
				const recommendedMenus = data.filter(
					(item: MenuItemType) => item.price > 14.6
				);
				setRecommended(recommendedMenus);
			});
	}, []);

	return (
		<section className="container mx-auto px-4 mb-32">
			<SectionHeading subHeading="Should Try" heading="chef recommends" />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {
          recommended.map((item: MenuItemType) => (
            <ShopItem key={item._id} name={item.name} img={item.image} recipe={item.recipe} price={item.price}/>
          ))
        }
      </div>
		</section>
	);
};
export default RecommendedMenu;
