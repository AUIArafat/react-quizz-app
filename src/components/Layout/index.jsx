import { Layout as AntLayout, notification, Spin } from "antd";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/Context";
import Navbar from "../Navbar";
import "./style/index.css";
const { Content } = AntLayout;

export default function Layout({ children }) {
  const { loading, error, setError } = useContext(UserContext);

  useEffect(() => {
    if (error) {
      notification.error({
        message: error,
      });
      setError(null);
    }
  }, [error]);
  return (
    <Spin spinning={loading}>
      <AntLayout>
        <Navbar />
        <Content>{children}</Content>
      </AntLayout>
    </Spin>
  );
}
