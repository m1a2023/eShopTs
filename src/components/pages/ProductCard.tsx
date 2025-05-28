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
	return (
		<div
			className={`flex w-full h-full relative p-8 items-center justify-between rounded-2xl select-none min-w-[200px] transition-transform duration-300 text-2xl hover:scale-105 cursor-pointer text-black ${
				product.isBought ? "bg-gray-700" : "bg-white"
			}`}
			onClick={() => changeStatus?.(id)}
		>
			<span>{id + 1}</span>
			<span>{product.title}</span>
			<span>{product.isBought ? "yes" : "no"}</span>
		</div>
	);
}
