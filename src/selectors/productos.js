export const selectProducts = (state) => state.productos.items;

export const selectProductoById = (id) => (state) =>
  state.productos.items.find((producto) => producto.id === parseInt(id));

export const selectIsLoadingProducts = (state) => state.productos.isLoading;

export const selectHasLoadedProducts = (state) => state.productos.hasLoaded;

export const selectHasErrorProducts = (state) => state.productos.hasError;
