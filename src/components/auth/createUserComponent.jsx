import { Form, Input, Select, Spin } from "antd";
import React from "react";
import useCreateUser from "../../hooks/useCreateUser";
import ButtonUI from "../../ui/button/Button";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};
const CreateUser = () => {
  const { createUser, isPending, name, setName } = useCreateUser();

  // if (error) return `error: ${error}`;
  return (
    <Form
      {...formItemLayout}
      variant="filled"
      className="grid w-full grid-cols-2 border"
    >
      <Form.Item
        label="ism"
        name="ism kiriting"
        rules={[
          {
            required: true,
            message: "ismingizni kiriting!",
          },
        ]}
      >
        <Input
          className="w-[280px]"
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
      </Form.Item>

      <Form.Item
        label="familiya"
        name="familiyangizni kiriting"
        rules={[
          {
            required: true,
            message: "familiyangizni kiriting",
          },
        ]}
      >
        <Input
          className="w-[280px]"
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
      </Form.Item>
      <Form.Item
        label="ikkinchi ism"
        name="ikkinchi ism ni kiriting"
        rules={[
          {
            required: true,
            message: "Please enter your secondName!",
          },
        ]}
      >
        <Input
          className="w-[280px]"
          onChange={(e) => setName({ ...name, secondName: e.target.value })}
        />
      </Form.Item>

      {/*<Form.Item*/}
      {/*  label="tug'ilgan sanangizni kiriting"*/}
      {/*  name="tug'ilgan sanangizni kiriting"*/}
      {/*  rules={[*/}
      {/*    {*/}
      {/*      required: true,*/}
      {/*      message: "tug'ilgan sanangizni kiriting",*/}
      {/*    },*/}
      {/*  ]}*/}
      {/*>*/}
      {/*  <DatePicker*/}
      {/*    className="w-[280px]"*/}
      {/*    onChange={(e) =>*/}
      {/*      setName({ ...name, birthDate: e.format("YYYY-MM-DD") })*/}
      {/*    }*/}
      {/*  />*/}
      {/*</Form.Item>*/}

      <Form.Item
        label="username"
        name="username kiriting"
        rules={[
          {
            required: true,
            message: "username ni kiriting",
          },
        ]}
      >
        <Input
          className="w-[280px]"
          onChange={(e) => setName({ ...name, username: e.target.value })}
        />
      </Form.Item>

      <Form.Item
        label="tuman"
        name="tumaningzni kiriting"
        rules={[
          {
            required: true,
            message: "tumaningzni kiriting",
          },
        ]}
      >
        <Select
          className="w-[280px]"
          options={[
            {
              label: "Qumqo'rg'on",
              value: "1",
            },
          ]}
          onChange={(e) => setName({ ...name, districtId: e })}
        />
      </Form.Item>
      <Form.Item
        label="Manzil"
        name="Manzilingizni kiriting"
        rules={[
          {
            required: true,
            message: "Manzilingizni kiriting",
          },
        ]}
      >
        <Input
          className="w-[280px]"
          onChange={(e) => setName({ ...name, address: e.target.value })}
        />
      </Form.Item>

      <div className={"block w-full border"}>
        <ButtonUI onClick={() => createUser()}>
          {isPending ? <Spin /> : "tugatish"}
        </ButtonUI>
        <ButtonUI onClick={() => createUser()}>
          {isPending ? <Spin /> : "tugatish"}
        </ButtonUI>
      </div>
    </Form>
  );
};
export default CreateUser;
