import { ChangeEvent } from "react";

type InputFieldProps = {
	type?: string;
	name: string;
	placeholder: string;
	value: string;
	onHandleChange: (event: ChangeEvent<HTMLInputElement>) => void
};

export const InputField = ({ type = "text", name, placeholder, value, onHandleChange }: InputFieldProps) => {
	return (
		<input
			type={type}
			id={name}
			name={name}
			placeholder={placeholder}
			value={value}
			onChange={onHandleChange}
			className="border p-2 rounded-lg bg-white text-base text-[#A1A1A1] focus:outline-none w-full mt-4"
		/>
	);
}
