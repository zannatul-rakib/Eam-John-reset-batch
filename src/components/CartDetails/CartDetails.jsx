import './CartDetails.css'
import { ImBin } from "react-icons/im";
import {BsArrowRightShort} from "react-icons/bs";

const CartDetails = ({cart}) => {
    return (
        <div className="cart-details">
            <h5>Order Summary</h5>
            <div className="order-details">
            
                <p>
                Selected Items: {cart.length}
                </p>
                <p>
                Total Price: $1140
                </p>
                <p>Total Shipping Charge: $5</p>
                <p>Tax: $114</p>
                <h6>Grand Total: $1559</h6>
            </div>
            

            <button className="clear-btn">Clear Cart <ImBin/></button> <br />
            <button className="review-btn">Review Order <BsArrowRightShort/></button>
    </div>
    );
};

export default CartDetails;