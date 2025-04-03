import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";

import slider_img_01 from "../../../assets/home/slide1.jpg";
import slider_img_02 from "../../../assets/home/slide2.jpg";
import slider_img_03 from "../../../assets/home/slide3.jpg";
import slider_img_04 from "../../../assets/home/slide4.jpg";
import slider_img_05 from "../../../assets/home/slide5.jpg";

const Category = () => {
	return (
		<section className="my-20 select-none">
			<Swiper
				slidesPerView={4}
				spaceBetween={30}
				centeredSlides={true}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className="mySwiper"
			>
				<SwiperSlide>
					<img src={slider_img_01} alt="fresh_salad" />
					<h4 className="font-cinzel text-xs  md:text-2xl 2xl:text-3xl text-center -mt-4 md:-mt-14 text-white">
						salads
					</h4>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slider_img_02} alt="pizzas" />
					<h4 className="font-cinzel text-xs  md:text-2xl 2xl:text-3xl text-center -mt-4 md:-mt-14 text-white">
						pizza
					</h4>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slider_img_03} alt="soups" />
					<h4 className="font-cinzel text-xs  md:text-2xl 2xl:text-3xl text-center -mt-4 md:-mt-14 text-white">
						soups
					</h4>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slider_img_04} alt="cakes" />
					<h4 className="font-cinzel text-xs  md:text-2xl 2xl:text-3xl text-center -mt-4 md:-mt-14 text-white">
						cakes
					</h4>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slider_img_05} alt="salads" />
					<h4 className="font-cinzel text-xs  md:text-2xl 2xl:text-3xl text-center -mt-4 md:-mt-14 text-white">
						salads
					</h4>
				</SwiperSlide>
			</Swiper>
		</section>
	);
};
export default Category;
