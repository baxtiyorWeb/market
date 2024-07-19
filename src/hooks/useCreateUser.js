import { message } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateUserData } from "../exports/api";

const useCreateUser = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState("");
  const [id, setId] = useState();
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
    secondName: "",
    birthDate: "",
    username: "adsasda",
    phone: "998909999999",
    password: "1231231231",
    districtId: 0,
    address: "",
    fileItemId: 1,
  });

  const userUpdate = () => {
    try {
      setIsPending(true);
      const res = updateUserData(name);
    } catch (err) {
      message.success(err);
      setError(err);
    } finally {
      setIsPending(false);
    }
  };

  return {
    name,
    isPending,
    error,
    id,
    setName,
    setId,
    userUpdate,
  };
};

export default useCreateUser;
