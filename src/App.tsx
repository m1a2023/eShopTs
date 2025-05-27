import { Routes, Route } from "react-router";
import "./App.css";
import Layout from "./components/atomics/Layout";
import Welcome from "./components/atomics/Welcome";
import { useState } from "react";
import Purchases from "./components/pages/Purchases";
import Auth from "./components/atomics/Auth";

export default function App() {
	const APP_TITLE = "eCommerce";
	const [isSignedIn, setSignedIn] = useState(false);

	return (
		<>
			<Layout
				title={APP_TITLE}
				isSignedIn={isSignedIn}
				setSignedIn={setSignedIn}
			>
				<Routes>
					<Route path="/" element={<Welcome />} />
					<Route path="/auth" element={<Auth />} />

					<Route path="/shop" element={<Purchases />} />
				</Routes>
			</Layout>
		</>
	);
}
