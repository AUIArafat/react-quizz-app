import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined, LoginOutlined } from "@ant-design/icons";

import "./style/index.css";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/Context";
import { useHistory } from "react-router";

export default function SingInForm() {
  const { authenticateUser, currentUser } = useContext(UserContext);
  const history = useHistory();
  const [form] = Form.useForm();

  useEffect(() => {
    if (currentUser) history.push("/");
  }, [currentUser]);

  const authenticate = (values) => {
    authenticateUser(values.email, values.password);
    form.resetFields();
  };

  return (
    <Form
      name="normal_signin"
      className="signin-form"
      initialValues={{
        remember: true,
      }}
      onFinish={authenticate}
      form={form}
    >
      <Form.Item className={"form-title"}>
        <h1>Sign in to Continue</h1>
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your Email!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
          autoComplete={"new-password"}
          type="email"
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
