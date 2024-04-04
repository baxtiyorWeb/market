import React, { useState } from "react";
import useFileUpload from "../hooks/products/useFileUpload";
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
export const FileUpload = ({ fileList, setFileList }) => {
  const { fileUploadData, file, img } = useFileUpload();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const handleChange = (file) => {
    fileUploadData(file);
    const url = URL.createObjectURL(file);
    setPreviewImage(url);
    console.log(file);
  };

  return (
    <>
      <input type="file" onChange={(e) => handleChange(e.target.files[0])} />
      <img
        alt="example"
        style={{
          width: "100%",
        }}
        src={`${previewImage}`}
      />
      {/* <button onClick={() => } className="h-[50px] w-[200px] border bg-blue-500" type="button">
        upload
      </button> */}
      {/* <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        
      </Modal> */}
    </>
  );
};
