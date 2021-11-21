import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined, LoginOutlined } from "@ant-design/icons";

import "./style/index.css";

export default function SingInForm() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      name="normal_signin"
      className="signin-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item className={"signin-header"}>
        <h1>Sign in to Continue</h1>
      </Form.Item>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
          autoComplete={"new-password"}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          autoComplete={"new-password"}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="signin-form-button">
          <LoginOutlined /> Sign in
        </Button>
      </Form.Item>
    </Form>
  );
}
