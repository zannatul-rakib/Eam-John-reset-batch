import { useEffect, useState } from "react";
import "./Shop.css"

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='shop'>
            {/* <h3>All Products { products.length}</h3> */}
            <div className="container">
                <div className="shop-container">
                    <div className="products-container">
                        <h1>This is cart container</h1>
                    </div>
                    <div className="cart-container">
                        <h1>This is products container</h1>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Shop;