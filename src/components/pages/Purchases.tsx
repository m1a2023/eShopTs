import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import type { Product } from "./product";
import AddProduct from "./AddProduct";

export default function Purchases() {
	const [products, setProducts] = useState<Product[]>([]);

	const containsInProducts = (product: Product): boolean => {
		for (const p of products) {
			if (p.title === product.title) {
				return true;
			}
		}
		return false;
	};

	const findInProducts = (product: Product): number => {
		for (let i = 0; i < products.length; i++) {
			if (product.title === products[i].title) {
				return i;
			}
		}
		return -1;
	};

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

	const addProductQuantity = (product: Product): void => {
		const index = findInProducts(product);
		setProducts((prev) => {
			const products = [...prev];
			products[index] = {
				...products[index],
				quantity: products[index]?.quantity + 1,
			};
			return products;
		});
	};

	function handleAddProduct(product: Product): void {
		if (containsInProducts(product)) {
			addProductQuantity(product);
			return;
		}
		setProducts((prev) => [...prev, product]);
	}

	const _cachedProducts = useMemo(() => {
		return products.map((val, i) => (
			<div
				key={i}
				className="w-7/10 sm:w-7/10 lg:w-6/10 xl:w-3/10 h-auto min-h-15 max-h-17"
			>
				<ProductCard id={i} product={val} changeStatus={setProductBought} />
			</div>
		));
	}, [products]);

	return (
		<>
			<div className="flex flex-col h-full w-full">
				{/* Add product component */}
				<div className="flex w-full justify-center">
					<AddProduct addFunc={handleAddProduct} />
				</div>

				{/* Listed products */}
				<div className="flex flex-wrap md:gap-x-5 sm:gap-x-3 lg:gap-x-4  w-full justify-center-safe relative">
					{_cachedProducts}
				</div>
			</div>
		</>
	);
}
