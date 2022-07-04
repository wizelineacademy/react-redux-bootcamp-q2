
export const getProducts = () => {
    return  fetch('data/products.json').then((res) => res.json().then((json) => {
        return json.data
    })).catch((err) => console.log(err))
}