import { useState } from "react";
import type { Product } from "./product";

type ProductCardProps = {
	id: number;
	product: Product;
	changeStatus?: (id: number) => void;
};

export default function ProductCard({
	id,
	product,
	changeStatus,
}: ProductCardProps): React.ReactNode {
	const [pressed, setPressed] = useState(false);

	const changeBoughtStatus = () => {
		changeStatus?.(id);
	};

	const handlePressed = () => {
		setPressed(!pressed);
	};

	return (
		<div
			className={`flex w-full h-3/5 relative p-6 items-center justify-between rounded-2xl select-none min-w-[200px] transition-transform duration-300 text-xl hover:scale-105 cursor-pointer text-black ${
				product.isBought ? "bg-zinc-500" : "bg-white"
			}`}
			onClick={() => {
				changeBoughtStatus();
				handlePressed();
			}}
		>
			<span>{id + 1}</span>
			<span>{product.title}</span>
			<span>{product.quantity}</span>
			<input
				name="delete"
				placeholder="delete"
				type="checkbox"
				checked={pressed}
			/>
		</div>
	);
}
