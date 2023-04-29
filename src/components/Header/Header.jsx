import "./Header.css"
import Logo from "../../images/Logo.svg"

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <nav>
                    <div className="logo">
                        <img src={Logo} alt="Page Logo" />
                    </div>
                    <div className="nav-items">
                        <a href="/order">Order</a>
                        <a href="/order-review">Order Review</a>
                        <a href="/manage-inventory">Manage Inventory</a>
                        <a href="/login">Login</a>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;