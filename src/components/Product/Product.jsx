import { FaCartPlus } from "react-icons/fa";
import './Product.css'

const Product = (props) => {
    const {name, price, seller, img, ratings } = props.product;
    return (
        <div className="product">
            <div className="product-wrapper"><div className="img-box">
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
                <p><small>Manufacture: {seller}</small></p>
                <p><small>Rating: { ratings} star</small></p>
            </div></div>
            <button>Add to Cart <FaCartPlus/></button>
        </div>
    );
};

export default Product;