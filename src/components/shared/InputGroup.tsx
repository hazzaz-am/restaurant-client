import { InputField } from "../ui/InputField";
type InputGroupProps = {
	type?: string;
	label: string;
	name: string;
	placeholder: string;
};

export const InputGroup = ({
	type = "text",
	label,
	name,
	placeholder,
}: InputGroupProps) => {
	return (
		<div className="flex flex-col mb-2">
			<label htmlFor={name} className="text-[#444444] text-xl font-semibold">
				{label}
			</label>
			<InputField type={type} name={name} placeholder={placeholder} />
		</div>
	);
};
