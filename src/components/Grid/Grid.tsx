import { Product } from "../Product/Product";
import React from "react";
import { useGrid } from "./useGrid";

export const Grid: React.FC = () => {
  const { productsData } = useGrid();

  if (!productsData) {
    return <div>Loading...</div>;
  }

  const { items } = productsData.data.products;

  return (
    <>
      {items.map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </>
  );
};
