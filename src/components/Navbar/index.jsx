import { Header } from "antd/lib/layout/layout";
import LoginOutlined from "@ant-design/icons/LoginOutlined";
import LogoutOutlined from "@ant-design/icons/LogoutOutlined";
import { Link } from "react-router-dom";
import "./style/index.css";

export default function Navbar() {
  return (
    <Header className={"header"}>
      <div className="logo">
        <Link to="/">React Quiz App</Link>
      </div>
      <div className={"header-right-side"}>
        <span>{"XYZ"}, logged in</span>
        {/* <Link to="/signin">
          <LoginOutlined /> Sign In
        </Link> */}
        <Link to="/signin">
          <LogoutOutlined /> Log Out
        </Link>
      </div>
    </Header>
  );
}
