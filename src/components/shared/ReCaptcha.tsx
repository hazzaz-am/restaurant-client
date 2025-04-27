import { useEffect, useRef, useState } from "react";
import {
	loadCaptchaEnginge,
	LoadCanvasTemplate,
	validateCaptcha
} from "react-simple-captcha";
import PrimaryButton from "../ui/PrimaryButton";

type ReCaptchaProps = {
	name: string;
	placeholder: string;
	handleVerification: (value: boolean) => void
};

export const ReCaptcha = ({ name, placeholder, handleVerification }: ReCaptchaProps) => {
	const captchaRef = useRef<HTMLInputElement>(null)
	const [showMessage, setShowMessage] = useState(false)
	const [isError, setIsError] = useState(false)
	const [showButton, setShowButton] = useState(true)

	const validateCaptchaValue = () => {
		const user_captcha_value = captchaRef.current?.value

		if (validateCaptcha(user_captcha_value)) {
			handleVerification(false)
			setShowMessage(true)
			setIsError(false)
			setShowButton(false)
		} else {
			setShowMessage(true)
			setIsError(true)
		}
	}

	useEffect(() => {
		loadCaptchaEnginge(6);
	}, []);

	return (
		<div className="my-4">
			<div className="bg-gray-100 p-4 rounded-lg shadow flex items-center justify-center text-center text-black">
				{/* This is the Captcha Canvas */}
				<LoadCanvasTemplate />
			</div>
			<input
				id={name}
				name={name}
				placeholder={placeholder}
				ref={captchaRef}
				className="border p-2 rounded-lg bg-white text-base text-[#A1A1A1] focus:outline-none w-full mt-4"
			/>
			{showMessage && <p className={`${isError ? "text-red-600" : "text-green-600"} mt-4`}>{isError ? "Verification Failed. Please try again." : "Verification Successful!"}</p>}
			{
				showButton && <PrimaryButton onButtonClick={validateCaptchaValue} classNames="w-full mt-4 text-center">Verify</PrimaryButton>
			}
		</div>
	);
};
