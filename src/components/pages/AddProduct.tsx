import { useState } from "react";
import { type Product } from "./product";

type AddProductProps = { addFunc: (p: Product) => void };

export default function AddProduct({
	addFunc,
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
		addFunc({ ...product });
	}

	function handleFormDataChange(e: React.ChangeEvent<HTMLInputElement>): void {
		const { name, value } = e.target;
		setProduct((prevState) => ({ ...prevState, [name]: value }));
	}

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className={`flex w-[60%] h-1/2 bg-white p-5 m-4 items-center gap-5 justify-between select-none rounded-2xl text-xl text-black`}
			>
				<input
					type="text"
					name="title"
					placeholder="Title"
					onChange={handleFormDataChange}
					value={product.title}
					className="flex grow focus:outline-none "
				/>
				<input
					type="number"
					name="quantity"
					placeholder="Quantity"
					onChange={handleFormDataChange}
					value={product.quantity}
					className="flex grow focus:outline-none "
				/>
				<button type="submit" className="flex w-fit min-w-fit cursor-pointer">
					Add
				</button>
			</form>
		</>
	);
}
