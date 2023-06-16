import React, { useState } from "react";
import { handleApiCall } from "../../apis";
import Sidebar from "../../common/sidebar/Sidebar";
import { Link, useNavigate, NavLink } from "react-router-dom";

const BucketCreate = () => {
  const navigate = useNavigate();
  const alertStyle = {
    backgroundColor: "darkseagreen",
    width: "782px",
    marginLeft: "22rem",
    padding: "10px",
  };

  const [bucketA, setBucketA] = useState("");
  const [bucketB, setBucketB] = useState("");
  const [bucketC, setBucketC] = useState("");
  const [bucketD, setBucketD] = useState("");
  const [bucketE, setBucketE] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = (message) => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      setMessage("");
    }, 2000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await handleApiCall("post", "user/addVolumeOfBucket", {
      bucketA,
      bucketB,
      bucketC,
      bucketD,
      bucketE,
    });
    setMessage(result.data.message);
    handleClick();
  };

  return (
    <div>
      <Sidebar />
      <div class="post">
        <div class="post-header">
          <img src="https://source.unsplash.com/user/c_v_r/1900x800" alt="Profile Picture"/>
          <div class="post-info">
            <h3>John Doe</h3>
            <p>Posted on June 16, 2023</p>
          </div>
        </div>
        <div class="post-content">
          <img src="https://source.unsplash.com/user/c_v_r/1900x800" alt="Post Image"/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet dolor eget mauris eleifend, eu iaculis mi scelerisque.</p>
        </div>
        <div class="post-footer">
          <div class="likes">
            <span class="icon">❤️</span>
            <span class="count">100</span>
          </div>
          <div class="comments">
            <span class="icon">💬</span>
            <span class="count">50</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BucketCreate;
