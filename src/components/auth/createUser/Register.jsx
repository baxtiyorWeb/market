import { Button, DatePicker, Input, Select } from "antd";
import React, { useState } from "react";
import api from "../../../config/api/api";
const UserCreate = () => {
  const [create, setCreate] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    username: "",
    password: "",
    phone: "",
    email: "",
    authorityId: 0,
    districtId: 0,
    address: "",
  });
  const getDistrict = () => {};
  const createUser = async () => {
    console.log({ ...create });
    const { data } = await api.post("/user/create", {
      ...create,
    });

    console.log(data);
  };
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="grid w-[600px] grid-cols-1">
        <Input
          className="mb-3 ml-2 mr-2 mt-3 h-[50px] p-3  text-[18px]"
          placeholder="ismingizni kiriting"
          onChange={(e) => setCreate({ ...create, firstName: e.target.value })}
        />
        <Input
          className="mb-3 ml-2 mr-2 mt-3 h-[50px] p-3  text-[18px]"
          placeholder="familiyangizni kiriting"
          onChange={(e) => setCreate({ ...create, lastName: e.target.value })}
        />
        <Input
          className="mb-3 ml-2 mr-2 mt-3 h-[50px] p-3  text-[18px]"
          placeholder="username kiriting"
          onChange={(e) => setCreate({ ...create, username: e.target.value })}
        />
        <Input
          className="mb-3 ml-2 mr-2 mt-3 h-[50px] p-3  text-[18px]"
          placeholder="parol kiriting"
          onChange={(e) => setCreate({ ...create, password: e.target.value })}
        />
        <Input
          className="mb-3 ml-2 mr-2 mt-3 h-[50px] p-3  text-[18px]"
          placeholder="telefon raqamingizni kiriting"
          onChange={(e) => setCreate({ ...create, phone: e.target.value })}
        />
        <Input
          className="mb-3 ml-2 mr-2 mt-3 h-[50px] p-3  text-[18px]"
          placeholder="emailingizni kiriting"
          onChange={(e) => setCreate({ ...create, email: e.target.value })}
        />
        <DatePicker
          format={"yyyy-MM-DD"}
          onChange={(e) =>
            setCreate({ ...create, birthDate: e.format("YYYY-MM-DD") })
          }
        />

        <Select
          className="relative left-2 h-[50px] w-full bg-white"
          placeholder="Outlined"
          onChange={(e) => setCreate({ ...create, districtId: e })}
          style={{
            flex: 1,
          }}
          options={[
            {
              value: "1",
              label: "1",
            },
            {
              value: "2",
              label: "2",
            },
            {
              value: "3",
              label: "3",
            },
          ]}
        />
      </div>

      <Button onClick={createUser}>yuborish</Button>
    </div>
  );
};

export default UserCreate;
