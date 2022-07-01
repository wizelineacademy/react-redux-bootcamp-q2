import { ProductProps } from "./ProductInterfaces";
import React from "react";
import { useGetValue } from "../../hooks/useGetValue";

export const Product: React.FC<ProductProps> = (props: ProductProps) => {
  const { product } = props;
  const { name, price, description, images, categories } = product;
  const { getValueAt } = useGetValue();

  const firstCategory = getValueAt<string>(categories, 0);
  const firstImage = getValueAt<string>(images, 0);

  const addToCart = () => {
    // TODO: add dispatch to save it in store
    console.log(product);
    alert("In progress add to cart");
  };

  return (
    <div style={{ border: "1px black solid" }}>
      {/* <div>{id}</div> */}

      <div>{name}</div>

      <div>{price}</div>

      {/* <div>{description}</div> */}

      <div style={{ height: "300px", width: "300px" }}>
        <img
          src={firstImage}
          alt={description}
          style={{ height: "100%", width: "100%" }}
        />
      </div>

      <div>{firstCategory}</div>

      <div>
        <button onClick={addToCart}> Add to card</button>
      </div>
    </div>
  );
};
