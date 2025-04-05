import SectionCover from "../../components/shared/SectionCover";

import shop_bg from "../../assets/shop/banner2.jpg";
import OrderCategory from "./components/OrderCategory";

const ShopPage = () => {
	return (
		<section>
			<SectionCover
				bg_img={shop_bg}
				title="our shop"
				description="WOULD YOU LIKE TO TRY A DISH ?"
				page_banner={true}
			/>
			<OrderCategory />
		</section>
	);
};
export default ShopPage;
