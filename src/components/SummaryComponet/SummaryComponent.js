import { SummaryProductCartConatiner } from "../Cart/CartStyles"
export const SummaryConponent = (props) => {
    const quantity = props.items.map((item)=>item.quantity).reduce((prev,current)=>prev+current,0)
    const totalCost = props.items.map((item)=>item.quantity*item.product.price).reduce((prev,current)=>prev+current,0)
    return (
        <SummaryProductCartConatiner>
            <div className="summay">
                <h3>Summary</h3>
                <hr/>
                <div>
                    <p>Items {quantity}</p>
                </div>
                <hr/>
                <div>
                    <p>Total Cost</p>
                    <p>${totalCost}</p>
                </div>
                <button >Checkout</button>
            </div>
        </SummaryProductCartConatiner>
    )
}