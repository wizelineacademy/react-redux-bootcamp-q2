import React from "react";
import { ProductsGrid } from "../components/Products";
import products from "../mock/products.json";

export const Products = () => {
  return <ProductsGrid products={products.data.products.items} />;
};
