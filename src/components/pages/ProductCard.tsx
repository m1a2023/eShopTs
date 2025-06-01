import { useState } from "react";
import type { Product } from "./product";
import SVGImage_Trash from "../../assets/trash";

type ProductCardProps = {
	id: number;
	product: Product;
	changeStatusFunction?: (id: number) => void;
	deleteStatusFunction?: (id: number) => void;
};

export default function ProductCard({
	id,
	product,
	changeStatusFunction,
	deleteStatusFunction,
}: ProductCardProps): React.ReactNode {
	const [pressed, setPressed] = useState(false);
	const [deleteState, setDelete] = useState(false);

	const handleCardClick = () => {
		changeStatusFunction?.(id);
		setPressed(!pressed);
	};

	const handleDeleteClick = (event: React.MouseEvent) => {
		event.stopPropagation();
		deleteStatusFunction?.(id);
		setDelete(!deleteState);
	};

	const debug = () => {
		console.debug(
			`ProductCard{id:${id}, product:{${product.title}, ${product.isBought}, ${product.quantity}}}`
		);
	};

	debug();

	const backgroundColor = product.isBought ? "bg-zinc-500" : "bg-white";

	return (
		<div
			className={`flex w-full h-3/5 relative p-6 rounded-2xl select-none min-w-[200px] transition-transform duration-300 text-xl hover:scale-105 text-black ${backgroundColor}`}
			onClick={handleCardClick}
		>
			<div className="flex w-full justify-between items-center gap-4">
				<span>{id + 1}</span>
				<span>{product.title}</span>
				<span>{product.quantity}</span>
				<button onClick={handleDeleteClick} className="cursor-pointer">
					{""}
					<SVGImage_Trash color={"#E55050"} width={27} height={27} />
				</button>
			</div>
		</div>
	);
}
