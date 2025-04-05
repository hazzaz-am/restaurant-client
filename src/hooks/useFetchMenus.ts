import { useEffect, useState } from "react";
import type { MenuItemType } from "../types/types";

export const useFetchMenus = (category?: string) => {
	const [menus, setMenus] = useState<MenuItemType[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("/menus.json")
			.then((res) => res.json())
			.then((data) => {
				if (category) {
					const menus = data.filter(
						(item: MenuItemType) => item.category === category
					);
					setMenus(menus);
				} else {
					setMenus(data);
				}
				setLoading(false);
			});
	}, [category]);

	return [menus, loading];
};
