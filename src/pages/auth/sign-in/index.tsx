import DynamicSiteTitle from "../../../components/shared/DynamicSiteTitle";
import bg_img from "../../../assets/others/authentication.png";
import authImg from "../../../assets/others/authentication2.png";
import { InputGroup } from "../../../components/shared/InputGroup";
import { AuthButton } from "../../../components/ui/AuthButton";
import { ReCaptcha } from "../../../components/shared/ReCaptcha";
import { SocialAuth } from "../../../components/shared/SocialAuth";
import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../../hooks/useAuth";

const INITIAL_USER = {
	password: "",
	email: "",
}
const SignInPage = () => {
	const [user, setUser] = useState({ ...INITIAL_USER })
	const [isVerified, setIsVerified] = useState(true)
	const [emailError, setEmailError] = useState("")
	const [passwordError, setPasswordError] = useState("")
	const auth = useAuth()

	if (!auth) {
		return null
	}

	const { signInHandler } = auth

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const name = event.target.name
		const value = event.target.value

		setUser({
			...user,
			[name]: value
		})
	}

	const handleVerification = (value: boolean) => {
		if (value) {
			setIsVerified(true)
		} else {
			setIsVerified(false)
		}
	}

	const handleFormSubmission = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (!user.email && !user.password) {
			return toast.error('All Fields are required');
		}

		if (user.email === "") {
			return setEmailError("Field can't be empty")
		}

		if (user.password === "") {
			return setPasswordError("Field can't be empty")
		}

		console.log(user);
		signInHandler(user.email, user.password)
			.then((result) => console.log(result))
			.catch((error) => console.log(error))

		setUser({ ...INITIAL_USER })

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
						<form className="mt-10" onSubmit={handleFormSubmission}>
							<InputGroup
								type="email"
								label="Email"
								name="email"
								placeholder="Type here"
								value={user.email}
								onHandleChange={handleInputChange}
								errorMessage={emailError}
							/>
							<InputGroup
								type="password"
								label="Password"
								name="password"
								placeholder="Type here"
								value={user.password}
								errorMessage={passwordError}
								onHandleChange={handleInputChange}
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
