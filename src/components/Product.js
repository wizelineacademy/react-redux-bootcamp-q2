import React from "react";
import {firstElement} from "../utils/fn";
import Images from "./Images";

const Product = ({product}) => {
    const {name, price, images, categories} = product;
    return (
        <div className={'card col'}>
            <div className={'card-img-top'}>
                <Images images={images} name={name}/>
            </div>
            <article className={'card-body'}>
                <div className={'card-title'}>{name}</div>
                <div className={'card-text'}>{price}</div>
                <div>{firstElement(categories)}</div>
                <button className={'btn btn-primary btn-sm'}>Add to cart</button>
            </article>
        </div>

    )
}
export default Product