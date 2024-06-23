import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Input } from "antd";
import React, { useState } from "react";
import api from "../../config/api/api";

const Settings = ({ userData }) => {
  const queryClient = useQueryClient();
  const [user, setUser] = useState({
    email: userData?.email || "",
    firstName: userData?.firstName || "",
    lastName: userData?.lastName || "",
    phone: userData?.phone || "",
    role: userData?.role || "",
    secondName: userData?.secondName || "",
  });

  const updateUser = async (userData) => {
    const res = await api.put(`/user/${userData.id}`, userData);
    return res.data;
  };

  const userUpdate = useMutation({
    mutationKey: ["user", userData.id],
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries(["user", userData.id]);
      return queryClient.refetchQueries([userData.id]);
    },
  });

  const handleUpdate = () => {
    userUpdate.mutate({ ...user, id: userData.id });
    console.log({ ...user });
  };

  return (
    <div className="grid grid-cols-3">
      <Input
        className="mx-1 my-3 w-[330px] p-2"
        placeholder="ismingiz"
        onChange={(e) =>
          setUser((prev) => ({ ...prev, firstName: e.target.value }))
        }
        value={user.firstName}
      />
      <Input
        className="mx-1 my-3 w-[330px] p-2"
        placeholder="familiyangiz"
        onChange={(e) =>
          setUser((prev) => ({ ...prev, secondName: e.target.value }))
        }
        value={user.secondName}
      />
      <Input
        className="mx-1 my-3 w-[330px] p-2"
        placeholder="sharifingiz"
        onChange={(e) =>
          setUser((prev) => ({ ...prev, lastName: e.target.value }))
        }
        value={user.lastName}
      />
      <Input
        className="mx-1 my-3 w-[330px] p-2"
        placeholder="telefon raqamingiz"
        type="number"
        onChange={(e) =>
          setUser((prev) => ({ ...prev, phone: e.target.value }))
        }
        value={user.phone}
      />
      <Input
        className="mx-1 my-3 w-[330px] p-2"
        placeholder="emailingiz"
        type="text"
        onChange={(e) =>
          setUser((prev) => ({ ...prev, email: e.target.value }))
        }
        value={user.email}
      />
      <Button
        className="mx-1 my-3 h-[40px] w-[230px] p-2"
        onClick={handleUpdate}
      >
        saqlash
      </Button>
    </div>
  );
};

export default Settings;
