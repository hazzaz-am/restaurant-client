
type InputFieldProps = {
  type?: string;
  name: string;
  placeholder: string;
};

export const InputField = ({type = "text", name, placeholder}: InputFieldProps) => {
  return (
		<input
			type={type}
			id={name}
			name={name}
			placeholder={placeholder}
			className="border p-2 rounded-lg bg-white text-base text-[#A1A1A1] focus:outline-none"
		/>
	);
}
