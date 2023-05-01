import './CartDetails.css'
import { ImBin } from "react-icons/im";
import {BsArrowRightShort} from "react-icons/bs";

const CartDetails = (props) => {
    // const cart = props.cart; // option 01
    const { cart } = props;
    console.log(cart)

    let total = 0;
    let totalShipping = 0;
    for (const product of cart) {
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }

    const tax = total * 10 / 100;

    const grandTotal = total + totalShipping + tax;


    return (
        <div className="cart-details">
            <h5>Order Summary</h5>
            <div className="order-details">
            
                <p>
                Selected Items: {cart.length}
                </p>
                <p>
                Total Price: ${total}
                </p>
                <p>Total Shipping: ${totalShipping}</p>
                <p>Tax: ${ tax.toFixed(2)}</p>
                <h6>Grand Total: ${ grandTotal.toFixed(2)}</h6>
            </div>
            

            <button className="clear-btn">Clear Cart <ImBin/></button> <br />
            <button className="review-btn">Review Order <BsArrowRightShort/></button>
    </div>
    );
};

export default CartDetails;