import bg_img from "../../../assets/home/featured.jpg";
import SectionHeading from "../../../components/shared/SectionHeading";
import PrimaryButton from "../../../components/ui/PrimaryButton";

const Featured = () => {
	return (
		<section
			style={{ backgroundImage: `url(${bg_img})` }}
			className="bg-cover bg-center bg-no-repeat bg-fixed"
		>
			<div className="h-full w-full bg-black/70 py-32">
				<div className="container px-4 mx-auto">
					<SectionHeading subHeading="Check it out" heading="from out menu" theme="dark"/>
					<div className="mt-12 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
						<img src={bg_img} alt="a waiter with dish" className="md:w-1/2 w-full" />
						<div className="md:w-1/2 w-full text-white text-center md:text-left">
							<h6 className="text-sm lg:text-xl 2xl:text-2xl leading-[26px]">
								March 20, 2023
							</h6>
							<h4 className="uppercase text-sm lg:text-xl 2xl:text-2xl leading-[26px] my-3">
								where can i get some?
							</h4>
							<p className="text-xs lg:text-lg 2xl:text-xl mb-7">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
								voluptate facere, deserunt dolores maiores quod nobis quas
								quasi. Eaque repellat recusandae ad laudantium tempore
								consequatur consequuntur omnis ullam maxime tenetur.
							</p>
							<PrimaryButton type="default">Read More</PrimaryButton>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Featured;
