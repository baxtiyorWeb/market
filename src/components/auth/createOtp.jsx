import axios from "axios";
import React, { useState } from "react";
import OTPInput from "react-otp-input";
import ButtonUI from "../../ui/button/Button";
import SpinLoading from "../../ui/loading/spinLoading";

const CreateOtp = ({ setOpen }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [confirm, setConfirm] = useState("");

  const confimCodeSMS = async () => {
    setIsLoading(false);
    try {
      const secretKey = localStorage.getItem("secretKey");
      const confirmCode = await axios.post(
        "http://95.130.227.131:8080/api/v1/authority/code-confirm",
        null,
        {
          params: { code: confirm },
          headers: {
            secretKey: secretKey,
          },
        },
      );
      if (confirmCode.status === 200) {
        setConfirm("");
        setOpen(true);
      }
    } catch (error) {
      console.log(error);
      throw new Error(`Error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="w-full">
        <h1 className="mb-3 ml-12 w-full"> 4 talik sms kodni kiriting</h1>
      </div>
      <div className="flex items-center justify-center rounded-md">
        <OTPInput
          value={confirm}
          onChange={setConfirm}
          numInputs={4}
          renderSeparator={<span>{"-"}</span>}
          renderInput={(props) => <input {...props} />}
          containerStyle={{
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          inputStyle={{
            width: 50,
            height: 50,
            borderRadius: 5,
            outlineColor: "teal",
            userSelect: "none",
            msTouchSelect: "none",
            fontSize: "20px",
            border: "1px solid green",
          }}
        />
      </div>
      <ButtonUI
        disabled={(confirm.length === 0 < true) === confirm.length >= 4}
        className=" mt-5 h-[50px] w-[328px] rounded-md bg-[#1D828E] text-white disabled:cursor-not-allowed disabled:bg-[#1d838eb4]"
        onClick={confimCodeSMS}
      >
        {isLoading ? <SpinLoading /> : "Davom etish"}
      </ButtonUI>
    </div>
  );
};

export default CreateOtp;
