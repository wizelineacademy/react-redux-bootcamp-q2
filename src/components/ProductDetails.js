import React, {useState} from "react";
import {totalPrice} from "../utils/fn";
import {store} from "../store/config";
import {ChangeQuantity, changeQuantity, removeToCart} from "../store/cart/actions";

const ProductDetails = ({item}) => {
    const {images, name, price, quantity, id} = item;
    const [amount, setAmount] = useState(quantity);
    const url = images[0];
    const total = totalPrice(price, quantity);
    const remove = (id) => {
        store.dispatch(removeToCart(id))
    }
    const setNewAmount = (event) => {
        let number = parseInt(event.target.value)
        setAmount(number);
        store.dispatch(ChangeQuantity({item, number}));
    }

    return (<div className={'card p-4 d-flex flex-row mb-2'}>
        <img src={url} alt={name} className={'card-img-top d-block w-25'}/>
        <div className={'ms-4'}>
            <div>{name}</div>
            <input type='number' placeholder={'Quantity'} value={amount} onChange={setNewAmount}/>
            <div className={'fw-bolder'}>${price}</div>
            <div className={'fw-bolder'}>${total}</div>
            <button className={'btn btn-danger'} onClick={()=> remove(id)}>Remove</button>
        </div>

    </div>)
}
export default ProductDetails;