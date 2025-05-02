import DynamicSiteTitle from "../../../components/shared/DynamicSiteTitle";
import bg_img from "../../../assets/others/authentication.png";
import authImg from "../../../assets/others/authentication2.png";
import { InputGroup } from "../../../components/shared/InputGroup";
import { AuthButton } from "../../../components/ui/AuthButton";
import { ReCaptcha } from "../../../components/shared/ReCaptcha";
import { SocialAuth } from "../../../components/shared/SocialAuth";
import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { SubmitHandler, useForm } from "react-hook-form";

type FormData = {
	email: string;
	password: string;
};

const SignInPage = () => {
	const [isVerified, setIsVerified] = useState(true)
	const auth = useAuth()

	const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

	if (!auth) {
		return null
	}
	const { signInHandler } = auth

	const onSubmit: SubmitHandler<FormData> = data => {
		signInHandler(data.email, data.password)
			.then((result) => console.log(result))
			.catch((error) => console.log(error))
	};


	const handleVerification = (value: boolean) => {
		if (value) {
			setIsVerified(true)
		} else {
			setIsVerified(false)
		}
	}

	return (
		<>
			<DynamicSiteTitle title="Sign In" />
			<section
				style={{ backgroundImage: `url(${bg_img})` }}
				className="bg-cover bg-repeat bg-center h-full flex items-center justify-center"
			>
				<div className="flex flex-col md:flex-row md:items-center justify-between rounded-l-2xl shadow-2xl w-3/4 mx-auto">
					<div className="md:w-1/2 p-10">
						<img src={authImg} alt="Authentication" />
					</div>
					<div className="md:w-1/2 p-10">
						<h3 className="text-[40px] font-bold text-center">Sign In</h3>
						<form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
							<InputGroup<FormData>
								type="email"
								label="Email"
								name="email"
								placeholder="Type here"
								register={register}
								errors={errors.email}
								rules={{ required: "Email is required" }}
							/>
							<InputGroup<FormData>
								type="password"
								label="Password"
								name="password"
								placeholder="Type here"
								register={register}
								errors={errors.password}
								rules={{ required: "Password is required" }}

							/>
							<ReCaptcha name="captcha" placeholder="Enter captcha here" handleVerification={handleVerification} />
							<AuthButton isVerified={isVerified}>Sign In</AuthButton>
						</form>
						<SocialAuth
							title="New here? Create a New Account"
							subTitle="Or sign in with"
						/>
					</div>
				</div>
			</section>
		</>
	);
};
export default SignInPage;
