import bg_img from "../../../assets/home/chef-service.jpg";

const ChefService = () => {
  return (
		<section className="container mx-auto px-4 mb-20">
			<div
				style={{ backgroundImage: `url(${bg_img})` }}
				className="bg-center bg-cover bg-no-repeat p-10 lg:py-28 lg:px-28"
			>
				<div className="p-5 lg:py-24 lg:px-32 bg-white text-center">
					<h2 className="uppercase font-cinzel font-normal text-xl md:text-2xl lg:text-3xl 2xl:text-[45px]">bistro boss</h2>
					<p className="text-xs md:text-[16px] leading-[26px] mt-7">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Necessitatibus, libero accusamus laborum deserunt ratione dolor
						officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
						nihil iusto ducimus incidunt quibusdam nemo.
					</p>
				</div>
			</div>
		</section>
	);
}
export default ChefService