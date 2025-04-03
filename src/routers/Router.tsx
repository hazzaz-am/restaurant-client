import { createBrowserRouter } from "react-router";
import App from "../app/App";
import HomePage from "../pages/home";


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
        element: <HomePage/>
      },
      {
        path: "/our-menu",
        element: <HomePage/>
      },
      {
        path: "/our-shop",
        element: <HomePage/>
      },
      {
        path: "/sign-in",
        element: <HomePage/>
      },
      {
        path: "/register",
        element: <HomePage/>
      },
    ]
	},
]);