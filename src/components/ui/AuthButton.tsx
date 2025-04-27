type AuthButtonProps = {
  children: React.ReactNode;
	isVerified: boolean
};

export const AuthButton = ({children, isVerified}: AuthButtonProps) => {
  return (
		<button disabled={isVerified} type="submit" className={`bg-[#D1A054] text-white py-2 px-4 rounded-lg w-full text-xl font-bold  hover:bg-[#B18A3A] transition duration-300 ease-in-out ${isVerified ? "cursor-default" : "cursor-pointer"}`}>
			{children}
		</button>
	);
}
