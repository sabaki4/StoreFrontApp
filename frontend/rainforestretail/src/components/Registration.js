import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userState } from "../containers/StoreContainer";


const Registration = ({ customers, postCustomer }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const context = useContext(userState)
  const { setActiveCustomer } = context;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (handleValidation()) {

      const newCustomer = {
        name,
        email,
        password
      }

      setActiveCustomer(newCustomer);
      postCustomer(newCustomer);

      navigate("/login");
      return;
    }
  }

  const handleValidation = () => {
    let validation = true;


    if (customers.find(customer => customer.name === name)) {
      alert("User already exists");
      validation = false;
    }

    if (customers.find(customer => customer.email === email)) {
      alert("Email already exists");
      validation = false;
    }

    if (name === "" || email === "" || password === "") {
      alert("Please fill in all fields")
      validation = false;
    }
    return validation;
  }

  return (
    <>
      <div className="register">

        <div className="main-login">
          <h2></h2>
          <div className="wrapper">
            <div className="registration">
              <form onSubmit={handleSubmit}>
                <h1> Sign Up!</h1>
                <div className="input-box">
                  <label htmlFor="login-name">Name:</label>
                  <input className="name"
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div className="input-box">
                  <label htmlFor="login-email">Email:</label>
                  <input className="email"
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="input-box">
                  <label htmlFor="login-email">Password:</label>
                  <input className="password"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                <div class="register-link">
                  <p> Already have an account? <Link to="/login" className="register">Log in!</Link></p>
                </div>
                <div className="register-button">
                  <input className="register-btn" type="submit" value="Sign Up" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Registration;