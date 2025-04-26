import { useEffect } from "react";
import {
	loadCaptchaEnginge,
	LoadCanvasTemplate,
} from "react-simple-captcha";
import { InputField } from "../ui/InputField";

type ReCaptchaProps = {
  name: string;
  placeholder: string;
};

export const ReCaptcha = ({name, placeholder}: ReCaptchaProps) => {
  
	useEffect(() => {
		loadCaptchaEnginge(6);
	}, []);

	return (
		<div className="my-4">
			<label htmlFor={name} className="text-[#444444] font-semibold">
				<LoadCanvasTemplate />
			</label>
			<InputField name={name} placeholder={placeholder} />
		</div>
	);
};
