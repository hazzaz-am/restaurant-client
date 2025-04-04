import type { ItemType } from "../../types/types";
import PrimaryButton from "../ui/PrimaryButton";

const ShopItem = ({ name, recipe, price, img }: ItemType) => {
	return (
		<div className="bg-[#F3F3F3] rounded-lg">
			<div className="relative overflow-hidden">
				<img
					src={img}
					alt={name}
					className="w-full hover:scale-110 transition-transform duration-500"
				/>
				<span className="text-white rounded-md p-4 bg-[#111827] absolute top-4 right-4">
					$ {price}
				</span>
			</div>
			<div className="text-center py-8 px-10">
				<h4 className="capitalize font-semibold text-xl lg:text-2xl text-[#151515]">
					{name}
				</h4>
				<p className="capitalize text-[#151515] text-[16px] leading-[26px] mb-6">
					{recipe}
				</p>
				<PrimaryButton type="secondary">Add to cart</PrimaryButton>
			</div>
		</div>
	);
};
export default ShopItem;
