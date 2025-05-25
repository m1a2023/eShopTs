import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function Welcome() {
	const [markdown, setMarkdown] = useState("");

	useEffect(() => {
		fetch("./welcomePage.md")
			.then((res) => res.text())
			.then((text) => setMarkdown(text));
	}, []);

	return (
		<>
			<div className="prose max-w-none p-5 justify-items-start">
				<ReactMarkdown>{markdown}</ReactMarkdown>
			</div>
		</>
	);
}

export default Welcome;
