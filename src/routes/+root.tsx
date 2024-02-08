import Footer from "../components/footer"
import Header from "../components/header"
import { Outlet } from "react-router-dom"

export default function Root() {
	return (
		<div className="flex flex-col h-svh">
			<Header />
			<main className="wrapper flex-grow my-5">
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}
