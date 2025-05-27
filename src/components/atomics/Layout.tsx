import type { JSX } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({
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
			<div className="flex flex-col min-h-screen min-w-full">
				<Header
					title={title}
					isSignedIn={isSignedIn}
					setSignedIn={setSignedIn}
				></Header>

				<div className="flex mt-[2em] py-[5em] w-full">
					<main>{children}</main>
				</div>

				<Footer />
			</div>
		</>
	);
}
