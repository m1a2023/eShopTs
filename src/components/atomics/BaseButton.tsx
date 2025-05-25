import type { JSX } from "react";

export type BaseButtonProps = {
	title: string;
	text?: string;
	children?: React.ReactNode;
	action?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	type?: "button" | "submit" | "reset";
};

export default function BaseButton({
	title,
	text,
	children,
	action,
	type = "button",
}: BaseButtonProps): JSX.Element {
	return (
		<button
			title={title}
			type={type}
			onClick={action}
			className={`
				rounded-[8px] py-[0.6em] px-[1.2em]
				bg-[#1a1a1a] cursor-pointer
				text-lg transition duration-180
				hover:scale-108 hover:ring-1 hover:ring-green-700
				focus:outline-4 focus:outline-green-700
			`}
		>
			{children ? children : text}
		</button>
	);
}
