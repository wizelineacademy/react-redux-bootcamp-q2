import { useEffect } from "react";
import { useProducts } from "./useProducts";

export const useProductsWithEffects = () => {
  const useProductsData = useProducts();

  const { fetch } = useProductsData;

  useEffect(() => {
    fetch();
  }, [fetch]);

  return useProductsData;
};
