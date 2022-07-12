import React from "react";
import {firstElement} from "../utils/fn";
import Images from "./Images";
import {addToCart} from "../store/cart/actions";
import {store} from "../store/config";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

const Product = ({product}) => {
    const {name, price, images, categories} = product;
    const id = generateUniqueID();
    const onAdd = (item) => {
        store.dispatch(addToCart(item))
    };
    return (
        <div className={'card col-4 p-4'}>
            <div className={'card-img-top'}>
                <Images images={images} name={name} id={id}/>
            </div>
            <article className={'card-body'}>
                <div className={'card-title fw-bold'}>{name}</div>
                <div className={'card-text fw-bolder'}>${price}</div>
                <div className={'mb-2'}>{firstElement(categories)}</div>
                <button className={'btn btn-primary btn-sm'} onClick={()=> onAdd(product)}>Add to cart</button>
            </article>
        </div>

    )
}
export default Product