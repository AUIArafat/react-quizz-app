import { Header } from "antd/lib/layout/layout";
import LoginOutlined from "@ant-design/icons/LoginOutlined";
import LogoutOutlined from "@ant-design/icons/LogoutOutlined";
import { Link } from "react-router-dom";
import "./style/index.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/Context";

export default function Navbar() {
  const { currentUser } = useContext(UserContext);
  return (
    <Header className={"header"}>
      <div className="logo">
        <Link to="/">React Quiz App</Link>
      </div>
      <div className={"header-right-side"}>
        {currentUser ? (
          <>
            <span>{currentUser.name}, Signed in</span>{" "}
            <Link to="/signin">
              <LogoutOutlined /> Sign Out
            </Link>
          </>
        ) : (
          <Link to="/signin">
            <LoginOutlined /> Sign In
          </Link>
        )}
      </div>
    </Header>
  );
}
