import { FaFacebook, FaGoogle } from "react-icons/fa6";

type SocialAuthProps = {
	title: string;
	subTitle: string;
};
export const SocialAuth = ({ title, subTitle }: SocialAuthProps) => {
	return (
		<div className="text-center mt-8">
			<h4 className="text-[#D1A054] font-bold text-xl">{title}</h4>
			<h5 className="text-[#444444] font-medium text-xl">{subTitle}</h5>
			<div className="flex justify-center gap-4 mt-4">
				<div className="border-2 border-[#444444] p-2 rounded-full">
					<FaFacebook color="#444444" size={18} className="" />
				</div>
				<div className="border-2 border-[#444444] p-2 rounded-full">
					<FaGoogle color="#444444" size={18} className="" />
				</div>
			</div>
		</div>
	);
};
