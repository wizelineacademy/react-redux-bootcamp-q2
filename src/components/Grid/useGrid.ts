import { useEffect, useState } from "react";

import { ProductResponse } from "src/models/Products";
import data from "../../utils/stub/products.stub.json";
import { mockRequest } from "src/utils/mockRequest";

export const useGrid = () => {
  const [productsData, setProductsData] = useState<ProductResponse | null>(
    null
  );

  const fetch = async () => {
    try {
      const response = await mockRequest<ProductResponse>(data, 2000);
      setProductsData(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return {
    productsData,
  };
};
