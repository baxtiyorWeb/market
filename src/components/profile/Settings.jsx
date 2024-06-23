import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Input } from "antd";
import React, { useEffect, useState } from "react";
import api from "../../config/api/api";
import useUser from "../../hooks/useUser";

const Settings = () => {
  const { user } = useUser();
  const queryClient = useQueryClient();
  const [state, setState] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    role: "",
    secondName: "",
  });

  useEffect(() => {
    if (user) {
      setState({
        email: user?.email || "",
        firstName: user?.firstName || "",
        lastName: user?.lastName || "",
        phone: user?.phone || "",
        role: user?.role || "",
        secondName: user?.secondName || "",
      });
    }
  }, [user]);

  const updateUser = async (user) => {
    const res = await api.put(`/user/${user?.id}`, user);
    return res.data;
  };

  const refreshToken = async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    const res = await api.post(
      "/authority/refresh-token",
      {},
      { params: { refreshToken: refreshToken } },
    );

    console.log(res.data);
    console.log(state);
  };

  const userUpdate = useMutation({
    mutationKey: ["user", user?.id],
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries(["user", user?.id]);
      return queryClient.refetchQueries([user?.id]);
    },
  });

  const handleUpdate = () => {
    refreshToken();
    userUpdate.mutate({ ...user, id: user?.id });
  };

  return (
    <div className="grid grid-cols-3">
      <Input
        className="mx-1 my-3 w-[330px] p-2"
        placeholder="ismingiz"
        onChange={(e) =>
          setState((prev) => ({ ...prev, firstName: e.target.value }))
        }
        value={state.firstName}
      />
      <Input
        className="mx-1 my-3 w-[330px] p-2"
        placeholder="familiyangiz"
        onChange={(e) =>
          setState((prev) => ({ ...prev, secondName: e.target.value }))
        }
        value={state.secondName}
      />
      <Input
        className="mx-1 my-3 w-[330px] p-2"
        placeholder="sharifingiz"
        onChange={(e) =>
          setState((prev) => ({ ...prev, lastName: e.target.value }))
        }
        value={state.lastName}
      />
      <Input
        className="mx-1 my-3 w-[330px] p-2"
        placeholder="telefon raqamingiz"
        type="number"
        onChange={(e) =>
          setState((prev) => ({ ...prev, phone: e.target.value }))
        }
        value={state.phone}
      />
      <Input
        className="mx-1 my-3 w-[330px] p-2"
        placeholder="emailingiz"
        type="text"
        onChange={(e) =>
          setState((prev) => ({ ...prev, email: e.target.value }))
        }
        value={state.email}
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
