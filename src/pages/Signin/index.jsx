import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined, LoginOutlined } from "@ant-design/icons";

import "./style/index.css";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/Context";
import { useHistory } from "react-router";

export default function SingInForm() {
  const { authenticateUser, currentUser } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (currentUser) history.push("/");
  }, [currentUser]);

  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    await authenticateUser(values.email, values.password);
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
