type HeadingProps = {
	subHeading: string;
	heading: string;
};

const SectionHeading = ({ subHeading, heading }: HeadingProps) => {
	return (
		<div className="mb-12 text-center w-60 md:w-sm mx-auto">
			<p className="text-[#D99904] italic text-sm md:text-xl">---{subHeading}---</p>
			<div className="mt-5">
				<h2 className="uppercase py-5 text-[#151515] text-xl md:text-2xl lg:text-4xl 2xl:text-[40px] border-y-2 border-[#E8E8E8]">
					{heading}
				</h2>
			</div>
		</div>
	);
};
export default SectionHeading;
