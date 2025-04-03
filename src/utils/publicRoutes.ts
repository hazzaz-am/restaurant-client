type RouteType = {
	url: string;
	name: string;
};

export const publicRoutes: RouteType[] = [
	{
		url: "/",
		name: "home",
	},
	{
		url: "/contact-us",
		name: "contact us",
	},
	{
		url: "/our-menu",
		name: "our menu",
	},
	{
		url: "/our-shop",
		name: "our shop",
	},
];
