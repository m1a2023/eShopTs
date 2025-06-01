import { useState } from "react";
import { type Product } from "./product";

type AddProductProps = { addFunction: (p: Product) => void };

export default function AddProduct({
	addFunction,
}: AddProductProps): React.ReactNode {
	// Product that will be added
	const [product, setProduct] = useState<Product>({
		title: "",
		quantity: 1,
		isBought: false,
	});

	function handleSubmit(e: React.ChangeEvent<HTMLFormElement>): void {
		e.preventDefault();
		if (product.title === "") {
			return;
		}

		product.title = product.title.trim();
		addFunction({ ...product });
	}

	function handleFormDataChange(e: React.ChangeEvent<HTMLInputElement>): void {
		const { name, value } = e.target;
		setProduct((prevState) => ({ ...prevState, [name]: value }));
	}

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className="flex flex-wrap md:flex-nowrap w-6/10 bg-white px-5 m-4 items-center gap-5 justify-between select-none rounded-2xl text-xl text-black"
			>
				<input
					type="text"
					name="title"
					placeholder="Title"
					onChange={handleFormDataChange}
					value={product.title}
					className="flex-1 min-w-[120px] focus:outline-none overflow-hidden"
				/>
				<input
					type="number"
					name="quantity"
					placeholder="Quantity"
					onChange={handleFormDataChange}
					value={product.quantity}
					className="flex-1 min-w-[120px] focus:outline-none overflow-hidden"
				/>
				<button
					type="submit"
					className="px-4 py-2 whitespace-nowrap flex-shrink-0 cursor-pointer"
				>
					Add
				</button>
			</form>
		</>
	);
}
