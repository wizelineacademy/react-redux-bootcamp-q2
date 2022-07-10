import { ProductComponet } from './ProductComponets';
import { QuantityElement } from './Quantity';

export const ItemCart  = (props) => {
    const { product, quantity } = props.item;
    return (
        <tr>
            <td>
                <ProductComponet item={product} />
            </td>
            <td>
                <QuantityElement quantity={quantity} />
            </td>
            <td>${product.price}</td>
            <td>${product.price * quantity}</td>
      </tr>
    )
};