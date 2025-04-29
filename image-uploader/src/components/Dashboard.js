import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import axios from "axios";
import { useNavigate } from "react-router";

function Dashboard() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [downloadURL, setDownloadURL] = useState(null);
  const [images, setImages] = useState([]);

  const navigate = useNavigate();
  async function handleLogout() {
    signOut(auth)
      .then(() => {
        alert("Signout Successfull");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleFile(e) {
    console.log("File Management");
    setFile(e.target.files[0]);
  }
  async function handleUpload(e) {
    e.preventDefault();
    setUploading(true);
    const formdata = new FormData();
    formdata.append("file", file);
    formdata.append(
      "upload_preset",
      process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
    );
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/upload   `,
      formdata
    );
    console.log(response);



    
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout} style={{ color: "red" }}>
        Logout
      </button>
      <br />
      <hr />

      <form action="" onSubmit={handleUpload}>
        <label for="File">File</label>
        <br />
        <input type="file" onChange={handleFile} />
        <button type="submit" disabled={uploading}>
          {uploading ? <p>uploading</p> : <p>upload</p>}
        </button>
      </form>
      <hr />
    </div>
  );
}

export default Dashboard;
