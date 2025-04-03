import { Link } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import profile_img from "../../assets/others/profile.png";
import cart_icon from "../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png";

const NavComponent = () => {
	const [showMenus, setShowMenus] = useState(true);
	const user = true;

	const publicRoutes = [
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

	const menuLinks = publicRoutes.map((page) => (
		<Link
			key={page.url}
			to={page.url}
			className={`uppercase font-extrabold 2xl:text-xl hover:text-[#EEFF25] transition-colors ${
				page.url === "/our-shop" && "flex items-center justify-between gap-1"
			}`}
		>
			{page.name}
			{page.url === "/our-shop" && (
				<img src={cart_icon} alt="cart_icon" className="h-10 w-12" />
			)}
		</Link>
	));

	return (
		<nav className="bg-black/50 py-4 px-4 fixed top-0 w-full">
			<div className="container mx-auto flex items-center justify-between">
				<div className="flex flex-col">
					<h1 className="text-white uppercase font-cinzel font-black text-2xl lg:text-3xl 2xl:text-4xl">
						BISTRO BOSS
					</h1>
					<h2 className="text-white capitalize font-cinzel font-bold text-xl lg:text-2xl 2xl:text-3xl tracking-tightest">
						Restaurant
					</h2>
				</div>
				<menu className="hidden lg:flex items-center gap-4 text-white">
					{menuLinks}
					{user ? (
						<Link
							to="/sign-in"
							className="uppercase font-extrabold 2xl:text-xl hover:text-[#EEFF25] transition-colors flex items-center gap-2"
						>
							sign in
							<img
								src={profile_img}
								alt="default_profile"
								className="h-9 w-9 rounded-full"
							/>
						</Link>
					) : (
						<button className="text-left uppercase font-extrabold 2xl:text-xl hover:text-[#EEFF25] transition-colors">
							sign out
						</button>
					)}
				</menu>
				<button
					onClick={() => setShowMenus(!showMenus)}
					className="lg:hidden cursor-pointer text-white hover:text-[#EEFF25]"
				>
					<GiHamburgerMenu className="text-2xl" />
				</button>
			</div>
			{showMenus && (
				<menu
					className={`lg:hidden flex flex-col gap-4 fixed top-0 right-0 text-white bg-black/80 min-h-screen py-8 px-5 transition-[0.5s] w-0 ${
						showMenus ? "w-60" : "w-0"
					}`}
				>
					<button
						className="ml-auto cursor-pointer mb-5"
						onClick={() => setShowMenus(!showMenus)}
					>
						<ImCross className="text-xl hover:text-[#EEFF25]" />
					</button>
					{menuLinks}
					{user ? (
						<Link
							to="/sign-in"
							className="uppercase font-extrabold 2xl:text-xl hover:text-[#EEFF25] transition-colors flex items-center justify-between gap-2"
						>
							sign in
							<img
								src={profile_img}
								alt="default_profile"
								className="h-9 w-9 rounded-full"
							/>
						</Link>
					) : (
						<button className="text-left uppercase font-extrabold 2xl:text-xl hover:text-[#EEFF25] transition-colors">
							sign out
						</button>
					)}
				</menu>
			)}
		</nav>
	);
};
export default NavComponent;
