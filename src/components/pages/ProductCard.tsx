import { useState } from "react";

type ProductCardProps = {
	id: number;
	title: string;
	isBought?: boolean;
	onClick?: () => void;
};

export default function ProductCard({
	id,
	title,
	onClick,
}: ProductCardProps): React.ReactNode {
	const [isBought, setIsBought] = useState(false);

	return (
		<div
			className={`flex w-full h-full relative ${
				isBought ? "bg-gray-700" : "bg-white"
			} p-8 items-center justify-between rounded-2xl min-w-[200px] transition-transform duration-300 text-2xl hover:scale-105 cursor-pointer text-black`}
			onClick={() => setIsBought(!isBought)}
		>
			<span>{id + 1}</span>
			<span>{title}</span>
			<span>{isBought ? "x" : "o"}</span>
		</div>
	);
}
