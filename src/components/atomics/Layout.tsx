import type { JSX } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({
	title,
	isSignedIn,
	setSignedIn,
	children,
}: {
	title: string;
	isSignedIn: boolean;
	setSignedIn: (isi: boolean) => void;
	children: JSX.Element;
}) {
	return (
		<>
			<div className="layout">
				<Header
					title={title}
					isSignedIn={isSignedIn}
					setSignedIn={setSignedIn}
				></Header>
				<main>{children}</main>
				<Footer />
			</div>
		</>
	);
}

export default Layout;
