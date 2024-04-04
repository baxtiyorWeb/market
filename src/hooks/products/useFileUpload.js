import axios from "axios";
import { useState } from "react";
const useFileUpload = () => {
  const [file, setFile] = useState("");
  const [img, setImg] = useState("");
  const [fileUpload, setFileUpload] = useState("");
  let data = new FormData();
  data.append("file", file);
  const fileUploadData = async (file) => {
    console.log(file);
    const res = await axios.post(
      "http://95.130.227.131:8080/api/v1/file",
      {
        file: file,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          // "x-device-id": "stuff",
          "Content-Type": "multipart/form-data",
        },
      },
    );

    console.log(res.data);
    setFileUpload(res.data.data?.uid);
    await fileDownloadUrl();
  };

  const fileDownloadUrl = async () => {
    const res = await axios.get(
      `http://95.130.227.131:8080/api/v1/file/temporary-url/${fileUpload}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      },
    );
    setImg(res.data?.data);
  };

  return { fileUploadData, setFile, file, fileUpload, img };
};

export default useFileUpload;
