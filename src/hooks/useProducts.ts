import { ProductResponse } from "../models/Products";
import data from "../utils/stub/products.stub.json";
import { mockRequest } from "../utils/mockRequest";
import { useState } from "react";

export const useProducts = () => {
  const [productsData, setProductsData] = useState<ProductResponse | null>(
    null
  );

  const fetch = async () => {
    try {
      const response = await mockRequest<ProductResponse>(data, 1000);
      setProductsData(response);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    fetch,
    productsData,
  };
};
