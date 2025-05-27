import { useState } from "react";
import { type Product } from "./product";

type AddProductProps = { addFunc: (p: Product) => void };

export default function AddProduct({
	addFunc,
}: AddProductProps): React.ReactNode {
	// Product that will be added
	const [product, setProduct] = useState<Product>({
		title: "",
		isBought: false,
	});

	function handleSubmit(e: React.ChangeEvent<HTMLFormElement>): void {
		e.preventDefault();
		addFunc(product);
		setProduct({ title: "", isBought: false });
	}

	function handleFormDataChange(e: React.ChangeEvent<HTMLInputElement>): void {
		const { name, value } = e.target;
		setProduct((prevState) => ({ ...prevState, [name]: value }));
	}

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className={`flex relative bg-white p-8 items-center justify-between rounded-2xl text-2xl cursor-pointer text-black`}
			>
				<input
					type="text"
					name="product-title"
					placeholder="Title"
					onChange={handleFormDataChange}
				/>
				<button type="submit">Add</button>
			</form>
		</>
	);
}
