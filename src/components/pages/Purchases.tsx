import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import type { Product } from "./product";
import AddProduct from "./AddProduct";

export default function Purchases() {
	const [products, setProducts] = useState<Product[]>([]);

	function setProductBought(index: number): void {
		setProducts((prev) => {
			const products = [...prev];
			products[index] = {
				...products[index],
				isBought: !products[index].isBought,
			};
			return products;
		});
	}

	function handleAddProduct(product: Product) {
		setProducts((prev) => [...prev, product]);
	}

	const _cachedProducts = useMemo(() => {
		return products.map((val, i) => (
			<div key={i} className="w-[60%] h-[5em]">
				<ProductCard id={i} product={val} changeStatus={setProductBought} />
			</div>
		));
	}, [products]);

	return (
		<>
			<div className="flex flex-col h-full w-full gap-y-[5em]">
				<div className="flex w-full justify-center">
					<AddProduct addFunc={handleAddProduct} />
				</div>

				<div className="flex flex-wrap w-full gap-8 justify-center-safe relative">
					{_cachedProducts}
				</div>
			</div>
		</>
	);
}
