export const firstElement = (array) => array? array[0] : null;

export const totalPrice = (price, quantity) => {
    return (price * quantity)
}
export const sumQuantity = (items) => {
    let totalItems = 0;
  items.forEach(item => totalItems += item.quantity);
  return totalItems;
}
export const sumTotalCost = (items) => {
    let total = 0;
    items.map(item => {
        total+= totalPrice(item.price, item.quantity);
    })
    return total;
}