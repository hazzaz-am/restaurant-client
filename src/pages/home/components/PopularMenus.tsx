import SectionHeading from "../../../components/shared/SectionHeading";
import PrimaryButton from "../../../components/ui/PrimaryButton";
import MenusCategory from "../../../components/shared/MenusCategory";
import { useFetchMenus } from "../../../hooks/useFetchMenus";

const PopularMenus = () => {
	const [menus, loading] = useFetchMenus("popular");

	return (
		<section className="container px-4 mx-auto mb-32">
			<SectionHeading
				subHeading="Check out popular items"
				heading="from our menu"
			/>
			{loading ? (
				<p className="text-center">Loading....</p>
			) : (
				<MenusCategory menus={Array.isArray(menus) ? menus : []} />
			)}
			<div className="text-center">
				<PrimaryButton path="/our-menu">View Full Menu</PrimaryButton>
			</div>
		</section>
	);
};
export default PopularMenus;
