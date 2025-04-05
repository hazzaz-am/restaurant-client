import ShopItem from "../../../components/shared/ShopItem";
import { useFetchMenus } from "../../../hooks/useFetchMenus";
import type { MenuItemType } from "../../../types/types";

type OrderTabProps = {
	category: string;
};

const OrderTab = ({ category }: OrderTabProps) => {
	const [menus] = useFetchMenus(category);
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
			{Array.isArray(menus) ? (
				menus.map((item: MenuItemType) => (
					<ShopItem
						key={item._id}
						img={item.image}
						name={item.name}
						price={item.price}
						recipe={item.recipe}
					/>
				))
			) : (
				<p>No Data Found</p>
			)}
		</div>
	);
};
export default OrderTab;
