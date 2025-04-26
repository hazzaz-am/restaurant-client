type AuthButtonProps = {
  children: React.ReactNode;
};

export const AuthButton = ({children}: AuthButtonProps) => {
  return (
		<button type="submit" className="bg-[#D1A054] text-white py-2 px-4 rounded-lg w-full text-xl font-bold cursor-pointer hover:bg-[#B18A3A] transition duration-300 ease-in-out">
			{children}
		</button>
	);
}
