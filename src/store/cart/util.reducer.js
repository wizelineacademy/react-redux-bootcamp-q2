export const addProductToCart = (cart, product) => {
    const isItemInCart = cart.find(item => item.id === product.id);
    if (!isItemInCart){
        return [...cart, {...product, quantity: 1}]
    }
    return cart.map(item => {
        if (item.id === product.id) {
            return {...item, quantity: ++item.quantity};
        }
        return item;
    })
};

export const changeQuantity = (cart, product, newQuantity) => {
    return cart.map(item => {
        if (item.id === product.id){
            return {...product, quantity: newQuantity}
        }
        return item;
    })
}