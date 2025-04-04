import { Link } from "react-router";

type ButtonProps = {
	children: React.ReactNode;
	type?: string;
	onButtonClick?: () => void;
	classNames?: string;
	path?: string;
};

const variants = {
	default: "text-[#1F2937] border-[#1F2937] hover:border-0",
	secondary: "text-[#BB8506] bg-[#E8E8E8] border-[#BB8506] hover:border-0",
};

const PrimaryButton = ({
	children,
	path = "#",
	type = "default",
	onButtonClick,
	classNames,
}: ButtonProps) => {
	const variant = variants[type as keyof typeof variants];

	return (
		<Link
			to={path}
			onClick={onButtonClick}
			className={`uppercase py-3 px-[25px] inline-block text-sm 2xl:text-xl font-medium border-b-4 rounded-md cursor-pointer transition-colors duration-500
hover:bg-[#1F2937] hover:text-white ${variant} ${classNames}`}
		>
			{children}
		</Link>
	);
};
export default PrimaryButton;
