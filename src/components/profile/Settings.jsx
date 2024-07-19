import { Button, Input, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../config/api/api";
import useUser from "../../hooks/useUser";

const Settings = () => {
  const { user, setUser, setRefetch } = useUser();
  const [isLoading, setisLoading] = useState(false);
  const [state, setState] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    role: "",
    secondName: "",
  });

  const currentRefreshToken = localStorage.getItem("refreshToken");

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
    try {
      const res = await api.put(`/user/${user?.id}`, user);
      return res.data;
    } catch (error) {
      console.error("User update failed", error);
    }
  };

  const refreshTokens = async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    try {
      const res = await api.post("/authority/refresh-token", {
        refreshToken,
      });
      localStorage.setItem("accessToken", res.data?.data?.accessToken);
      localStorage.setItem("refreshToken", res.data?.data?.refreshToken);
    } catch (error) {
      console.error("Token refresh failed", error);
    }
  };
  const handleUpdate = async () => {
    try {
      setisLoading(true);
      if (currentRefreshToken) {
        await updateUser({ ...state, id: user?.id });
        refreshTokens();
        toast.success("ma'lumotingiz yangilandi");
        setTimeout(() => {
          window.location.href = window.location.pathname;
        }, 1000);
      }
    } catch (error) {
      (error);
    } finally {
      setisLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-3">
      <Input
        className="mx-1 my-3 w-[330px] p-2"
        placeholder="Ismingiz"
        onChange={(e) =>
          setState((prev) => ({ ...prev, firstName: e.target.value }))
        }
        value={state.firstName}
      />
      <Input
        className="mx-1 my-3 w-[330px] p-2"
        placeholder="Familiyangiz"
        onChange={(e) =>
          setState((prev) => ({ ...prev, secondName: e.target.value }))
        }
        value={state.secondName}
      />
      <Input
        className="mx-1 my-3 w-[330px] p-2"
        placeholder="Sharifingiz"
        onChange={(e) =>
          setState((prev) => ({ ...prev, lastName: e.target.value }))
        }
        value={state.lastName}
      />
      <Input
        className="mx-1 my-3 w-[330px] p-2"
        placeholder="Telefon raqamingiz"
        type="number"
        onChange={(e) =>
          setState((prev) => ({ ...prev, phone: e.target.value }))
        }
        value={state.phone}
      />
      <Input
        className="mx-1 my-3 w-[330px] p-2"
        placeholder="Emailingiz"
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
        {isLoading ? <Spin /> : "Saqlash"}
      </Button>
    </div>
  );
};

export default Settings;
