import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleApiCall } from "../../apis";
import AlertMessage from "../../common/alertmessage/AlertMessage";


const SignUp = () => {
  const styles = {
    color: "blue",
    backgroundColor: "lightgray",
    padding: "10px",
    width: "50px",
  };
  const alertStyle = {
    backgroundColor: "darkseagreen",
    width: "782px",
    marginLeft: "22rem",
    padding: "10px",
  };
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };
  const [firstName, setfirstName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const handleClick = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      setMessage("");
    }, 2000);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await handleApiCall("post", "registers", {
      firstName,
      email,
      password,
    });
    setMessage(result.data.message);
    handleClick();
 
  };
  

  return (
    <div>
      <h2>Signup Form</h2>
      {showAlert && (
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="imgcontainer">
          <img
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
            style={styles}
            alt="Avatar"
            className="avatar"
          />
        </div>

        <div className="container">
          <label htmlFor="uname">
            <b>Name</b>
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(event) => setfirstName(event.target.value)}
            placeholder="Enter firstName"
            name="FirstName"
            required
          />
          <label htmlFor="uname">
            <b>Email</b>
          </label>
          <input
            type="text"
            value={email}
            onChange={(event) => setemail(event.target.value)}
            placeholder="Enter email"
            name="email"
            required
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(event) => setpassword(event.target.value)}
            name="password"
            required
          />

          <button type="submit">Signup</button>
        </div>

        <div className="container">
          <span className="psw">
            Forgot <a href="#">password?</a>
          </span>
          <button type="button" onClick={handleButtonClick} className="cancelbtn">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
