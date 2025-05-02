
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routers/Router.tsx";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "./provider/AuthProvider.tsx";


createRoot(document.getElementById("root")!).render(
	<HelmetProvider>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</HelmetProvider>
);
