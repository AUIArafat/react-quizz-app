import { Button } from "antd";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../contexts/Context";

import "./style/index.css";

export default function Home() {
  const history = useHistory();
  const { currentUser } = useContext(UserContext);
  useEffect(() => {
    if (currentUser.userType === "Admin") history.push("/questions");
  }, []);
  return (
    <div className={"text-box"}>
      <h1 className={"primary-heading"}>
        <span>Welcome to the</span>
        <span>React Quiz App</span>
      </h1>
      <Button type="default" shape="round" size="large">
        Start Quizz
      </Button>
    </div>
  );
}
