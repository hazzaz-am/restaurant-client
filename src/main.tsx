import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routers/Router.tsx";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
	<HelmetProvider>
		<RouterProvider router={router} />
	</HelmetProvider>
);
