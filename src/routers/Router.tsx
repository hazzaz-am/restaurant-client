import { createBrowserRouter } from "react-router";
import App from "../app/App";
import HomePage from "../pages/home";
import ContactPage from "../pages/contact-us";
import MenuPage from "../pages/our-menu";
import ShopPage from "../pages/our-shop";
import SignInPage from "../pages/auth/sign-in";
import RegistrationPage from "../pages/auth/register";


export const router = createBrowserRouter([
	{
		path: "/",
		element: <App/>,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/contact-us",
        element: <ContactPage/>
      },
      {
        path: "/our-menu",
        element: <MenuPage/>
      },
      {
        path: "/our-shop/:category",
        element: <ShopPage/>
      },
      {
        path: "/sign-in",
        element: <SignInPage/>
      },
      {
        path: "/registration",
        element: <RegistrationPage/>
      },
    ]
	},
]);