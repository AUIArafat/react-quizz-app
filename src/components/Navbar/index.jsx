import { Header } from "antd/lib/layout/layout";
import LoginOutlined from "@ant-design/icons/LoginOutlined";
import LogoutOutlined from "@ant-design/icons/LogoutOutlined";
import { Link, useHistory } from "react-router-dom";
import "./style/index.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/Context";
import { Button } from "antd";
import { ArrowRightOutlined, QuestionCircleOutlined } from "@ant-design/icons";

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
            {currentUser.userType !== "Admin" ? (
              <Button
                onClick={() => {
                  history.push("/quiz");
                }}
                type={"primary"}
              >
                Start Quiz <ArrowRightOutlined />
              </Button>
            ) : (
              <>
                <Button
                  onClick={() => {
                    history.push("/answers");
                  }}
                  type={"primary"}
                >
                  Answers
                </Button>
                <Button
                  onClick={() => {
                    history.push("/questions");
                  }}
                  type={"primary"}
                >
                  <QuestionCircleOutlined /> Questions
                </Button>
              </>
            )}
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
