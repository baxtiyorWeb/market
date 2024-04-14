import { DatePicker, Form, Input, Select, Spin } from "antd";
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
  const { createUser, error, isPending, name, setName } = useCreateUser();

  // if (error) return `error: ${error}`;
  return (
    <Form {...formItemLayout} variant="filled" className="w-full">
      <Form.Item
        label="ism kiriting"
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
        label="familiyangizni kiriting"
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
        label="secondName"
        name="secondName"
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

      <Form.Item
        label="tug'ilgan sanangizni kiriting"
        name="tug'ilgan sanangizni kiriting"
        rules={[
          {
            required: true,
            message: "tug'ilgan sanangizni kiriting",
          },
        ]}
      >
        <DatePicker
          className="w-[280px]"
          onChange={(e) =>
            setName({ ...name, birthDate: e.format("YYYY-MM-DD") })
          }
        />
      </Form.Item>

      <Form.Item
        label="username kiriting"
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
        label="parol kiriting"
        name="parol kiriting"
        rules={[
          {
            required: true,
            message: "parolingizni kiriting!",
          },
        ]}
      >
        <Input
          className="w-[280px]"
          type="password"
          onChange={(e) => setName({ ...name, password: e.target.value })}
        />
      </Form.Item>

      <Form.Item
        label="telefon raqamingzni kiriting"
        name="phone"
        rules={[
          {
            required: true,
            message: "telefon raqamingzni kiriting",
          },
        ]}
      >
        <Input
          className="w-[280px]"
          type="number"
          onChange={(e) => setName({ ...name, phone: e.target.value })}
        />
      </Form.Item>

      <Form.Item
        label="emailingizni kiriting"
        name="emailingizni kiriting"
        rules={[
          {
            required: true,
            message: "emailingizni kiriting",
          },
        ]}
      >
        <Input
          className="w-[280px]"
          type="email"
          onChange={(e) => setName({ ...name, email: e.target.value })}
        />
      </Form.Item>

      <Form.Item
        label="authorityId"
        name="authorityId"
        rules={[
          {
            required: true,
            message: "Please input!",
          },
        ]}
      >
        <Select
          options={[
            {
              label: "test",
              value: "3",
            },
          ]}
          onChange={(e) => setName({ ...name, authorityId: e })}
          className="w-[280px]"
        />
      </Form.Item>

      <Form.Item
        label="tumaningzni kiriting"
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
        label="Manzilingizni kiriting"
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

      <Form.Item
        wrapperCol={{
          offset: 6,
          span: 16,
        }}
      >
        <ButtonUI onClick={createUser}>
          {isPending ? <Spin /> : "tugatish"}
        </ButtonUI>
      </Form.Item>
    </Form>
  );
};
export default CreateUser;
