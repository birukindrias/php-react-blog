import React, { useState } from "react";
import axios from "axios";
import axiosFileupload from "axios-fileupload";
// const axiosFileupload = require("axios-fileupload");

const UploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    const formiData = new FormData();
    // axiosFileupload("http://localhost:8080/api/v1/img", selectedFile);
console.log(selectedFile)
    formiData.append("file", {
      uri: "dataUri",
      name: `photo.jpg`,
      type: `image/jpg`,
    });
    console.log(formiData);

    axios.post("http://localhost:8080/api/v1/img", {selectedFile}, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    // axios
    //   .post("http://localhost:8080/api/v1/createpost", selectedFile)
    //   .then((response) => {
    //     console.log(response);
    //   });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadComponent;
