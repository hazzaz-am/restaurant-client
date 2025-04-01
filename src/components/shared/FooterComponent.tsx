import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const FooterComponent = () => {
	return (
		<footer>
			<div className="flex flex-col md:flex-row">
				<div className="md:w-1/2 bg-[#1F2937] text-center text-white h-[400px] flex flex-col justify-center gap-8">
					<h2 className="uppercase lg:text-[32px] md:text-xl">Contact us</h2>
					<div className="font-medium lg:text-xl md:text-lg leading-9">
						<p>123 ABS Street, Uni 21, Bangladesh</p>
						<p>+88 123456789</p>
						<p>Mon - Fri: 08:00 - 22:00</p>
						<p>Sat - Sun: 10:00 - 23:00</p>
					</div>
				</div>
				<div className="md:w-1/2 bg-[#111827] text-center text-white h-[400px]  flex flex-col justify-center gap-8">
					<h2 className="uppercase lg:text-[32px] md:text-xl">Follow US</h2>
					<p className="font-medium lg:text-xl md:text-lg leading-9">
						Join us on social media
					</p>
					<div className="flex items-center justify-center gap-4">
						<FaFacebook className="md:text-xl lg:text-2xl cursor-pointer hover:text-[#CD9003] ease-in transition-colors" />
						<FaInstagram className="md:text-xl lg:text-2xl cursor-pointer hover:text-[#CD9003] ease-in transition-colors" />
						<FaXTwitter className="md:text-xl lg:text-2xl cursor-pointer hover:text-[#CD9003] ease-in transition-colors" />
					</div>
				</div>
			</div>
			<div className="bg-black text-center text-white py-3 font-medium lg:text-xl leading-9">
				Copyright © Hazzaz. All rights reserved.
			</div>
		</footer>
	);
};
export default FooterComponent;
