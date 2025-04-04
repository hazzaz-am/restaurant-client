import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import SectionHeading from "../../../components/shared/SectionHeading";
import { Rating } from "@smastrom/react-rating";
import { BiSolidQuoteLeft } from "react-icons/bi";
import "@smastrom/react-rating/style.css";



type ReviewType = {
	_id: string;
	name: string;
	details: string;
	rating: number;
};

const Testimonials = () => {
	const [reviews, setReviews] = useState<ReviewType[]>([]);

	useEffect(() => {
		fetch("reviews.json")
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, []);

	return (
		<section className="mt-32 container px-4 mx-auto">
			<SectionHeading
				subHeading="What Our Clients Say"
				heading="testimonials"
			/>
			<Swiper
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				navigation={true}
				modules={[Navigation, Autoplay]}
				className="mySwiper"
			>
				{reviews.map((review: ReviewType) => (
					<SwiperSlide key={review._id}>
						<div className="flex flex-col gap-4 items-center px-10 md:px-20 text-center justify-center">
							<Rating
								style={{ maxWidth: 180 }}
								value={review.rating}
								readOnly
							/>
							<BiSolidQuoteLeft size={100} color="#151515" />
							<p className="text-[#444444] text-sm md:text-lg 2xl:text-xl md:leading-[35px]">
								{review.details}
							</p>
							<h4 className="text-[#CD9003] font-medium text-lg lg:text-xl 2xl:text-3xl">
								{review.name}
							</h4>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};
export default Testimonials;
