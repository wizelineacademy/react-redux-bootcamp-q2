import { QuantityContainer } from './CartStyles';
 
 export const QuantityElement = (props) => {
     return (
        <QuantityContainer>
            <input type="number" min="0" value={props.quantity} />
            <button>Remove</button>
        </QuantityContainer>
     )
 }