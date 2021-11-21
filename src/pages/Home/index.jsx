import { Button } from "antd";

import "./style/index.css";

export default function Home() {
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
