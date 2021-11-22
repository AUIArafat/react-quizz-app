import { Layout as AntLayout, Spin } from "antd";
import { useContext } from "react";
import { UserContext } from "../../contexts/Context";
import Navbar from "../Navbar";
import "./style/index.css";
const { Content } = AntLayout;

export default function Layout({ children }) {
  const { loading } = useContext(UserContext);
  return (
    <Spin spinning={loading}>
      <AntLayout>
        <Navbar />
        <Content>{children}</Content>
      </AntLayout>
    </Spin>
  );
}
