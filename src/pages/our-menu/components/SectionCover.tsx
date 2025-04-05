type SectionCoverProps = {
	bg_img: string;
	title: string;
	description?: string;
	page_banner?: boolean;
};

const SectionCover = ({
	bg_img,
	title,
	description = "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
	page_banner = false,
}: SectionCoverProps) => {
	return (
		<div
			style={{ backgroundImage: `url(${bg_img})` }}
			className="bg-center bg-cover bg-no-repeat p-10 lg:py-28 lg:px-28"
		>
			<div className="p-8 md:p-16 lg:py-24 lg:px-32 bg-black/70 text-center text-white">
				<h2
					className={`uppercase font-cinzel font-bold text-xl md:text-2xl lg:text-3xl ${
						page_banner ? "2xl:text-[85px]" : "2xl:text-[45px]"
					} `}
				>
					{title}
				</h2>
				<p
					className={`${
						page_banner && "font-cinzel font-semibold"
					}  text-xs md:text-[16px] leading-5 md:leading-[26px] mt-7`}
				>
					{description}
				</p>
			</div>
		</div>
	);
};
export default SectionCover;
