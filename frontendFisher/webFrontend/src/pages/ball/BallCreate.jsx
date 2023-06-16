import React, { useState } from "react";
import { handleApiCall } from "../../apis";
import Sidebar from "../../common/sidebar/Sidebar";
const BallCreate = () => {
  const alertStyle = {
    backgroundColor: "darkseagreen",
    width: "782px",
    marginLeft: "22rem",
    padding: "10px",
  };

  const [pink, setPink] = useState("");
  const [blue, setBlue] = useState("");
  const [orange, setOrange] = useState("");
  const [green, setGreen] = useState("");
  const [red, setRed] = useState("");
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
    const result = await handleApiCall("post", "user/addVolumeOfBalls", {
      pink,
      blue,
      orange,
      green,
      red,
    });
    setMessage(result.data.message);
    handleClick();
  };

  return (
    <div>
      <Sidebar />
      <div>
      <div class="upload-container">
    <label for="image-upload" class="upload-label">
      <input id="image-upload" type="file" class="upload-input"/>
      <span class="upload-button">Choose Image</span>
    </label>
    <div class="preview">
      <img id="preview-image" alt="Preview Image"/>
    </div>
    <textarea class="description" placeholder="Enter description"></textarea>
  </div>
  
      </div>
    </div>
  );
};

export default BallCreate;
