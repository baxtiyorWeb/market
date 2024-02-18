import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function InputNumberDetector() {
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const registerPhoneOrPhone = async () => {
    try {
      setLoading(true);
      const data = await axios.post(
        `http://95.130.227.131:8080/api/v1/authority/register-by-phone?phone=${phone}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        },
      );
      setOpen(!open);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const confirmCode = async () => {
    try {
      const data = await axios.post(
        `http://95.130.227.131:8080/api/v1/authority/code-confirm?code=${confirm}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        },
      );

      console.log(data);
      setOpen(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleSubmit = () => {
    registerPhoneOrPhone();
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
        <div className="flex h-[100%] w-auto flex-col items-center justify-center rounded-md border-2 border-teal-600 p-1">
          {open && (
            <input
              type="text"
              placeholder="sms dan kelgan koddi kiriting"
              className="mb-3 h-[67px]  w-[400px] rounded-none border-none p-3  text-[18px] outline-none"
              onChange={(e) => setConfirm(e.target.value)}
            />
          )}

          {
            <input
              type="tel"
              placeholder="00-000-00-00"
              className="mb-3 h-[67px]  w-[400px] rounded-none border-none p-3  text-[18px] outline-none"
              // valueIsNumericString
              // format="## ### ## ##"
              // mask="-"
              onChange={(e) => setPhone(e.target.value)}
            />
          }
          {!open ? (
            <button
              onClick={handleSubmit}
              className="relative mb-3 h-[67px] bg-[#fff]  p-3 text-teal-700 outline-none"
            >
              {" "}
              <hr className="absolute " />
              {loading ? "loadiing" : "ok"}
            </button>
          ) : (
            <button
              onClick={confirmCode}
              className="relative mb-3 h-[67px] bg-[#fff]  p-3 text-teal-700 outline-none"
            >
              {" "}
              <hr className="absolute " />
              confirm
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
