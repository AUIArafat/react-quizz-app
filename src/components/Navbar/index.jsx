import { Header } from "antd/lib/layout/layout";
import LoginOutlined from "@ant-design/icons/LoginOutlined";
import LogoutOutlined from "@ant-design/icons/LogoutOutlined";
import { Link, useHistory } from "react-router-dom";
import "./style/index.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/Context";
import { storageData } from "../../utils/storageData";
import { Button } from "antd";

export default function Navbar() {
  const { currentUser, logout } = useContext(UserContext);
  const history = useHistory();
  return (
    <Header className={"header"}>
      <div className="logo">
        <Link to="/">React Quiz App</Link>
      </div>
      <div className={"header-right-side"}>
        {currentUser ? (
          <>
            <span>{currentUser.name}, Signed in</span>{" "}
            <Button
              onClick={() => {
                logout();
                history.push("/signin");
              }}
              type={"primary"}
            >
              <LogoutOutlined /> Sign Out
            </Button>
          </>
        ) : (
          <Link to="/signin">
            <Button type={"primary"}>
              <LoginOutlined /> Sign In
            </Button>
          </Link>
        )}
      </div>
    </Header>
  );
}
