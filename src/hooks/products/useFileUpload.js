import { useState } from "react";
import api from "../../config/api/api";

const useFileUpload = () => {
  const [file, setFile] = useState("");
  const [fileUpload, setFileUpload] = useState("");
  const fileUploadData = async (file) => {
    const res = await api.post("/file", {
      file: file[0].name,
    });

    console.log(res.data.data);
    setFileUpload(res.data.data);
  };

  return { fileUploadData, setFile, file, fileUpload };
};

export default useFileUpload;
