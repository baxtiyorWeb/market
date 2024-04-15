import { message } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserData } from "../exports/api";

const useCreateUser = () => {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
    secondName: "",
    birthDate: "",
    username: "",
    password: "",
    phone: "",
    email: "",
    authorityId: 0,
    districtId: 0,
    address: "",
    fileItemId: 1,
  });

  const createUser = () => {
    try {
      setIsPending(true);
      const res = createUserData(name);
      message.success("created user");
    } catch (err) {
      setError(err);
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
  };
};

export default useCreateUser;
