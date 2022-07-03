import { ProductProps } from "./ProductInterfaces";
import React from "react";
import { moneyFormatter } from "../../utils/utils";
import { useGetValue } from "../../hooks/useGetValue";

export const Product: React.FC<ProductProps> = (props: ProductProps) => {
  const { product } = props;
  const { name, price, description, images, categories } = product;
  const { getValueAt } = useGetValue();

  const firstCategory = getValueAt<string>(categories, 0);
  const firstImage = getValueAt<string>(images, 0);

  return (
    <div className="product-container">
      <div className="product-image-container">
        <img className="product-image" src={firstImage} alt={description} />
      </div>

      <div className="product-name">{name}</div>

      <div className="product-category">{firstCategory}</div>

      <div className="product-price">{moneyFormatter(price)}</div>
    </div>
  );
};
