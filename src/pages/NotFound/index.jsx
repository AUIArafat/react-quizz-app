import { Button } from "antd";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import "./style/index.css";

export default function NotFound() {
  const history = useHistory();
  useEffect(() => {
    history.push("/");
  });
  return (
    <div className={"text-box"}>
      <h1 className={"primary-heading"}>
        <span>404</span>
        <span>Not Found</span>
      </h1>
      <Link to="/">
        <Button type="default" shape="round" size="large">
          Go Home
        </Button>
      </Link>
    </div>
  );
}
