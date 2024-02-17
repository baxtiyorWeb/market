import { message } from "antd";
import axios from "axios";
import { useState } from "react";
import { PatternFormat } from "react-number-format";
import { useMutation } from "react-query";
export default function InputNumberDetector() {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const { mutate } = useMutation({
    mutationFn: (states) => {
      return axios.post(
        "http://95.130.227.131:8080/api/v1/authority/sign-in",
        {
          ...states,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "access-control-allow-origin": "*",
          },
        },
      );
    },
    onSuccess: (e) => {
      message.success("succes data post");
      console.log(e.data);
    },
    onError: (e) => {
      console.log("xatolik", e);
    },
  });

  const obj = {
    username: state.username,
    password: state.password,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(obj);
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div>
        <h1 className="text relative bottom-[80px] text-[30px] text-teal-700">
          <span className="text text-[40px] text-teal-600">Kelishamiz.uz</span>{" "}
          saytiga hush kelibsiz{" "}
        </h1>
      </div>
      <div className="input-container"></div>
      <div className="flex h-[600px] w-[550px]  items-center justify-center rounded-md p-1">
        <form
          onSubmit={handleSubmit}
          className="flex h-[100%] w-auto flex-col items-center justify-center rounded-md border-2 border-teal-600 p-1"
        >
          <PatternFormat
            type="tel"
            placeholder="00-000-00-00"
            className="mb-3 h-[67px]  w-[400px] rounded-none border-none p-3  text-[18px] outline-none"
            valueIsNumericString
            format="+998 ## ### ## ##"
            mask="-"
          />
          <input
            type="text"
            placeholder="emailni kiriting..."
            className="mb-3 h-[67px]  w-[400px] rounded-none border-none p-3  text-[18px] outline-none"
            onChange={(e) => setState({ ...state, username: e.target.value })}
            value={state.username}
          />
          <input
            type="password"
            placeholder="passwordni kiriting..."
            className="mb-3 h-[67px]  w-[400px] rounded-none border-none p-3  text-[18px] outline-none"
            onChange={(e) => setState({ ...state, password: e.target.value })}
            value={state.password}
          />
          <button className="relative mb-3 h-[67px] bg-[#fff]  p-3 text-teal-700 outline-none">
            {" "}
            <hr className="absolute " />
            yuborish
          </button>
        </form>
      </div>
    </div>
  );
}
