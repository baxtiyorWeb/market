import { message } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserData } from "../exports/api";

const useCreateUser = () => {
  const navigate = useNavigate();
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

  const createUser = () => {
    try {
      setIsPending(true);
      const res = createUserData(name);
    } catch (err) {
      message.success(err);
    } finally {
      setIsPending(false);
    }
  };

  return {
    name,
    setName,
    createUser,
    isPending,
    error,
    id,
    setId,
  };
};

export default useCreateUser;
