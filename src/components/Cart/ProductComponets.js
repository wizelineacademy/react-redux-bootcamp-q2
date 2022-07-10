import { ProductDetails } from './CartStyles';
 
 export const ProductComponet  = (props) => {
     const {name, images, id} = props.item;
     return (
        <ProductDetails>
            <div className="img-container">
            <img src={images[0]} alt="Producto" class="sc-iBkjds hsFZnr"/>
            </div>
            <div className="info-container">
            <p>{name}</p>
            <p >Product code: {id}</p>
            </div>
        </ProductDetails>
     )
 };