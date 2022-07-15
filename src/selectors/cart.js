import { selectProductoById } from './productos';

export const selectCartProducts = (state) => state.cart.productos;

export const selectQuantityByProductId = (id) => (state) =>
  state.cart.productos[id];

export const selectNumberItems = (state) =>
  Object.keys(state.cart.productos).reduce(
    (acc, key) => acc + state.cart.productos[key],
    0
  );

export const selectTotal = (state) =>
  Object.keys(state.cart.productos).reduce((acc, productoId) => {
    const producto = selectProductoById(productoId)(state);
    return acc + producto.price * state.cart.productos[productoId];
  }, 0);

export const selectIsLoadingOrder = (state) => state.cart.isLoading;

export const selectOrder = (state) => state.cart.order;

export const selectMessage = (state) => state.cart.message;
