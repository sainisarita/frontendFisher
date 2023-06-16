import React, { useState } from "react";
import { handleApiCall } from "../../apis";
import Sidebar from "../../common/sidebar/Sidebar";
const ListSuggestion = () => {
  const style = {
    marginTop: "10px",
    marginLeft: "22rem",
    width: "50rem",
  };
  const alertStyle = {
    backgroundColor: "indianred",
    width: "782px",
    marginLeft: "22rem",
    padding: "10px",
  };
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const [pink, setPink] = useState("");
  const [blue, setBlue] = useState("");
  const [orange, setOrange] = useState("");
  const [green, setGreen] = useState("");
  const [red, setRed] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [dataStatus, setDataStatus] = useState(false);
  // const handleClick = () => {
  //   setShowAlert(true);
  //   setTimeout(() => {
  //     setShowAlert(false);
  //   }, 2000);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await handleApiCall("post", "user/suggestion", {
      pink,
      blue,
      orange,
      green,
      red,
    });

    if (result.data.status == false) {
      setShowAlert(true);
      setDataStatus(false);
      setMessage(result.data.message);
    }
    if (result.data.status == true) {
      setShowAlert(false);
      setDataStatus(true);
      let str = `${result.data.message} -- Pink- ${result.data.data.pink ? result.data.data.pink: 0 },Green- ${result.data.data.green ? result.data.data.green : 0 },Orange- ${result.data.data.orange ? result.data.data.orange : 0}, Red- ${result.data.data.red ?result.data.data.red: 0 }, Blue-${result.data.data.blue ? result.data.data.blue: 0}`;
      setMessage(str);
    }
  };

  return (
    <div>
      <Sidebar />
      <div>
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit}>
          <div class="container">
            <label for="uname">
              <b>Name</b>
            </label>
            <input
              type="text"
              placeholder="Name"
              value={pink}
              onChange={(event) => setPink(event.target.value)}
              name="pink"
              required
            />
            <label for="uname">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Email"
              value={red}
              onChange={(event) => setRed(event.target.value)}
              name="red"
              required
            />
            <label for="uname">
              <b>Password</b>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              value={blue}
              onChange={(event) => setBlue(event.target.value)}
              name="blue"
              required
            />
            <label for="uname">
              <b>About</b>
            </label>
            <input
              type="text"
              placeholder="Enter about yourself"
              value={orange}
              onChange={(event) => setOrange(event.target.value)}
              name="orange"
              required
            />
            <label for="uname">
              <b>Upload image</b>
            </label>
            <input
              type="file" onChange={handleFileChange} 
            />
            <button type="submit">Update Profile</button>
          </div>
        </form>
      </div>
      {showAlert && (
        <div className="alert alert-success" style={alertStyle} role="alert">
          {message}
        </div>
      )}

      {dataStatus && (
        <div
          className="alert alert-success"
          style={{
            backgroundColor: "darkseagreen",
            width: "782px",
            marginLeft: "22rem",
            padding: "10px",
          }}
          role="alert"
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default ListSuggestion;
