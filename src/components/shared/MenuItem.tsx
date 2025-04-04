import { type ItemType } from "../../types/types";

const MenuItem = ({ img, name, recipe, price }: ItemType) => {
	return (
		<div className="flex flex-col lg:flex-row gap-4">
			<img
				src={img}
				alt={name}
				style={{
					borderRadius: "0px 200px 200px 200px",
				}}
				className="w-[100px]"
			/>
			<div>
				<div className="flex justify-between items-center">
					<h4 className="font-cinzel uppercase text-[#151515] text-sm md:text-xl">
						{name} ------
					</h4>
					<span className="text-[#BB8506] text-sm md:text-xl leading-[26px]">
						${price}
					</span>
				</div>
				<p className="text-[#737373] leading-[26px] text-xs md:text-[16px]">
					{recipe}
				</p>
			</div>
		</div>
	);
};
export default MenuItem;
