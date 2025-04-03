import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import banner_img_01 from '../../../assets/home/01.jpg'
import banner_img_02 from '../../../assets/home/02.jpg'
import banner_img_03 from '../../../assets/home/03.png'
import banner_img_04 from '../../../assets/home/04.jpg'
import banner_img_05 from '../../../assets/home/05.png'
import banner_img_06 from '../../../assets/home/06.png'

const Banner = () => {
	return (
		<Carousel showArrows={false} autoPlay={true}>
			<div>
				<img src={banner_img_01} />
			</div>
			<div>
				<img src={banner_img_02} />
			</div>
			<div>
				<img src={banner_img_03} />
			</div>
			<div>
				<img src={banner_img_04} />
			</div>
			<div>
				<img src={banner_img_05} />
			</div>
			<div>
				<img src={banner_img_06} />
			</div>
		</Carousel>
	);
};
export default Banner;
