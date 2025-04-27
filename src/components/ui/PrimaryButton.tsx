import { Link } from "react-router";

type ButtonProps = {
	children: React.ReactNode;
	type?: string;
	onButtonClick?: () => void;
	classNames?: string;
	path?: string;
	
};

const variants = {
	default:
		"text-white border-white hover:bg-white hover:text-[#1F2937]",
	primary:
		"text-[#1F2937] hover:bg-[#1F2937] hover:text-white border-[#1F2937]",
	secondary:
		"text-[#BB8506] bg-[#E8E8E8] hover:bg-[#1F2937] hover:text-white border-[#BB8506]",
};

const PrimaryButton = ({
	children,
	path = "#",
	type = "primary",
	onButtonClick,
	classNames,
}: ButtonProps) => {
	const variant = variants[type as keyof typeof variants];

	return (
		<Link
			to={path}
			onClick={onButtonClick}
			className={`uppercase pt-3 pb-2 px-[25px] inline-block text-sm 2xl:text-xl font-medium border-b-4 rounded-md cursor-pointer transition-colors duration-500 hover:border-transparent ${variant} ${classNames}`}
		>
			{children}
		</Link>
	);
};
export default PrimaryButton;
