import { InputField } from "../ui/InputField";
import { FieldError, FieldValues, Path, RegisterOptions, UseFormRegister } from "react-hook-form";

type InputGroupProps<TFormValues extends FieldValues> = {
	type?: string;
	label: string;
	name: Path<TFormValues>;
	placeholder: string;
	errors: FieldError | undefined
	register: UseFormRegister<TFormValues>
	rules?: RegisterOptions<TFormValues, Path<TFormValues>>
};

export const InputGroup = <TFormValues extends FieldValues>({
	type = "text",
	label,
	name,
	placeholder,
	register,
	errors,
	rules
}: InputGroupProps<TFormValues>) => {


	return (
		<div className="flex flex-col mb-2">
			<label htmlFor={name} className="text-[#444444] text-xl font-semibold">
				{label}
			</label>
			<InputField type={type} name={name} placeholder={placeholder} register={register} rules={rules} />
			{errors && <p className="text-red-600 mt-2 capitalize">{name} is required</p>}
		</div>
	);
};
