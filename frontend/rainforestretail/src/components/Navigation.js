import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { userState } from "../containers/StoreContainer";
import Logo from "../images/image-8-removebg-preview.png"

const Navigation = () => {

    const { activeCustomer, setActiveCustomer } = useContext(userState);

    const refreshActiveCustomer = () => {
        setActiveCustomer({})
    }

    return (<>
        <div className="navbar">
            <nav>
                <ul className="home">
                    <li><Link to="/"> <img src={Logo} className="logo" /> </Link></li>
                </ul>
                {activeCustomer.id ?
                    <div className="navLinks">
                        <li><Link to="/browse">Browse</Link></li>
                        <li><Link to="/orders">Your Orders </Link></li>
                        <li><Link to="/basket">Basket </Link></li>
                        <li><Link to="/register" onClick={refreshActiveCustomer}>Sign Out {activeCustomer.name}</Link></li>
                    </div>
                    :
                    <div className="navLinks">
                        <li><Link to="/browse">Browse</Link></li>
                        <li><Link to="/login">Log in</Link></li>
                        <li><Link to="/register">Sign Up</Link></li>
                    </div>
                }
            </nav>
        </div>
        <Outlet />
    </>);
}

export default Navigation;