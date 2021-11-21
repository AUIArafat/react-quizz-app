import { Layout as AntLayout } from "antd";
import Navbar from "../Navbar";
import "./style/index.css";
const { Content } = AntLayout;

export default function Layout({ children }) {
  return (
    <AntLayout>
      <Navbar />
      <Content>{children}</Content>
    </AntLayout>
  );
}
