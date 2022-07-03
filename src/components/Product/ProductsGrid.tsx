import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Loading } from "../Common/Loading/Loading";
import { ProductContainer } from "./ProductContainer";
import React from "react";
import { useProductsWithEffects } from "../../hooks/useProductsWithEffects";

export const ProductsGrid: React.FC = () => {
  const { productsData } = useProductsWithEffects();

  if (!productsData) {
    return <Loading isLoading />;
  }

  const { items } = productsData.data.products;

  return (
    <Box sx={{ flexGrow: 1 }} className="product-grid-container">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {items.map((product, index) => {
          return (
            <Grid item xs={2} sm={2} md={2} key={index}>
              <ProductContainer product={product} key={product.id} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
