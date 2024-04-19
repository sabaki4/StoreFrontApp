import { useState, useContext } from "react";
import { userState } from "../containers/StoreContainer";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Login = ({ customers }) => {

    const [loggedEmail, setLoggedEmail] = useState("");
    const context = useContext(userState);
    const { setActiveCustomer } = context;
    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const filteredCustomer = customers.find((customer) => {
            return customer.email.toLowerCase() === loggedEmail.toLowerCase()
        });

        console.log(filteredCustomer);

        if (!filteredCustomer) {
            alert("Please Sign Up")
            event.target.reset();
            return;
        }

        // STAMP

        if (filteredCustomer.password !== event.target.password.value) {
            alert("Incorrect login details");
            event.target.reset();
            return;
        }

        setActiveCustomer(filteredCustomer);
        event.target.reset();
        navigate("/home");
    }

    return (
        <>
            <div className="login">
                <div className="main-login">
                    <div className="wrapper">
                        <div className="loggedin">
                            <form onSubmit={handleFormSubmit}>
                                <h2>Welcome back! Please login</h2>
                                <div className="input-box">
                                    <label htmlFor="login-name">Email:</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="text"
                                        value={loggedEmail}
                                        onInput={(e) => setLoggedEmail(e.target.value)}
                                        placeholder="Enter email.."
                                    />
                                </div>

                                <div className="input-box">
                                    <label htmlfor="login-email">Password:</label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="Enter password.."
                                    />
                                </div>
                                <div className="register-link">
                                    <p> Dont have an account? <Link to="/register" className="register">Register</Link></p>
                                </div>
                                <div className="login-button">
                                    <input className="login-btn" type="submit" value="Login" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Outlet />
            </div>
        </>
    )
}

export default Login;