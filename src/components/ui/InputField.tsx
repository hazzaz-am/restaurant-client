import { FieldValues, Path, RegisterOptions, UseFormRegister } from "react-hook-form";

type InputFieldProps<TFormValues extends FieldValues> = {
	type?: string;
	name: Path<TFormValues>;
	placeholder: string;
	register: UseFormRegister<TFormValues>;
	rules?: RegisterOptions<TFormValues, Path<TFormValues>>
};

export const InputField = <TFormValues extends FieldValues>({ type = "text", name, placeholder, register, rules }: InputFieldProps<TFormValues>) => {
	return (
		<input
			type={type}
			id={name}
			placeholder={placeholder}
		  {...(rules ? register(name, rules) : register(name))}
			className="border p-2 rounded-lg bg-white text-base text-[#A1A1A1] focus:outline-none w-full mt-4"
		/>
	);
}
