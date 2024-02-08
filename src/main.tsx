import React from "react"
import ReactDOM from "react-dom/client"
import Root from "./routes/+root"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Dashboard from "./routes/dashboard"
import Catalog from "./routes/catalog"
const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <div>Error</div>,
		children: [
			{
				path: "/dashboard",
				element: <Dashboard />,
			},
			{
				path: "/catalog",
				element: <Catalog />,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
