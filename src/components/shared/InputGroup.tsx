import { ChangeEvent } from "react";
import { InputField } from "../ui/InputField";
type InputGroupProps = {
	type?: string;
	label: string;
	name: string;
	placeholder: string;
	value: string;
	errorMessage: string;
	onHandleChange: (event: ChangeEvent<HTMLInputElement>) => void
};

export const InputGroup = ({
	type = "text",
	label,
	name,
	placeholder,
	value,
	errorMessage = "",
	onHandleChange
}: InputGroupProps) => {
	return (
		<div className="flex flex-col mb-2">
			<label htmlFor={name} className="text-[#444444] text-xl font-semibold">
				{label}
			</label>
			<InputField type={type} name={name} placeholder={placeholder} value={value} onHandleChange={onHandleChange} />
			{value.length <= 0 && <p className="text-red-600 mt-2">{errorMessage}</p>}
		</div>
	);
};
