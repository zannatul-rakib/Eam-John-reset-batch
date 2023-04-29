import { FaCartPlus } from "react-icons/fa";
import './Product.css'

const Product = ({product, handleAddToCart}) => {
    const { name, price, seller, img, ratings } = product;
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
            <button onClick={()=> handleAddToCart(product)}>Add to Cart <FaCartPlus/></button>
        </div>
    );
};

export default Product;