import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserData } from "../exports/api";

const useCreateUser = () => {
  const navigate = useNavigate();
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
    fileItemId: 30,
  });

  const { mutate, data, error, isPending } = useMutation({
    mutationFn: createUserData,
  });

  const createUser = () => {
    mutate({
      ...name,
    });
    console.log(name);
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
