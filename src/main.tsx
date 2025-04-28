
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routers/Router.tsx";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from 'react-redux'
import { store } from "./store/store.ts";


createRoot(document.getElementById("root")!).render(
	<HelmetProvider>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</HelmetProvider>
);
