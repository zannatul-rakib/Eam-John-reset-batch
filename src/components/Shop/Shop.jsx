import { useEffect, useState } from "react";
import "./Shop.css"
import Product from "../Product/Product";
import CartDetails from "../CartDetails/CartDetails";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        // console.log("Products", products)
        const storedCart = getShoppingCart();
        const savedCart = [];
        // console.log(storedCart);

        // step 1: get Id
        for (const id in storedCart) {
            // console.log(id);

            // step 2: get the product by using id
            const saveProduct = products.find(product => product.id === id);
            
            // step 3: get quantity of the products
            if (saveProduct) {
                const quantity = storedCart[id];
                saveProduct.quantity = quantity;

                // step 4: add the save Product to the save Cart 
                savedCart.push(saveProduct);
            }
            // console.log(saveProduct);
        }
        // step 5: set the cart 
        setCart(savedCart);
    }, [products])
    
    const handleAddToCart = product => { 
        const newCart = [...cart, product];
        setCart(newCart);
        // console.log(product)
        addToDb(product.id);
    }

    return (
        <div className='shop'>
            {/* <h3>All Products { products.length}</h3> */}
            <div className="container">
                <div className="shop-container">
                    <div className="products-container">
                        {
                            products.map(product => <Product
                                key={product.id}
                                product={product}
                                handleAddToCart={handleAddToCart}
                            />)
                        }
                    </div>
                    <div className="cart-container">
                        <CartDetails cart={cart} />
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Shop;