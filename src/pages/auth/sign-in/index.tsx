import DynamicSiteTitle from "../../../components/shared/DynamicSiteTitle";
import bg_img from "../../../assets/others/authentication.png";
import authImg from "../../../assets/others/authentication2.png";
import { InputGroup } from "../../../components/shared/InputGroup";

const SignInPage = () => {
	return (
		<>
			<DynamicSiteTitle title="Sign In" />
			<section
				style={{ backgroundImage: `url(${bg_img})` }}
				className="bg-cover bg-repeat bg-center h-screen flex items-center justify-center"
			>
				<div className="flex items-center justify-between rounded-l-2xl shadow-2xl w-3/4 mx-auto">
					<div className="w-1/2 p-10">
						<img src={authImg} alt="Authentication" />
					</div>
					<div className="w-1/2 p-10">
						<h3 className="text-[40px] font-bold text-center">Sign In</h3>
						<form className="mt-10">
								<InputGroup
									type="email"
									label="Email"
									name="email"
									placeholder="Type here"
								/>
								<InputGroup
									type="password"
									label="Password"
									name="password"
									placeholder="Type here"
								/>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};
export default SignInPage;
