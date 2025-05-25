import type { JSX } from "react";

export default function Footer(): JSX.Element {
	return (
		<footer className="fixed bottom-0 left-0 w-full h-[3em] p-4 z-50 text-lg bg-[#004e64]/60 shadow-md flex items-center justify-between">
			<>
				<div>© {new Date().getFullYear()} all rigths reserved</div>
			</>
		</footer>
	);
}
