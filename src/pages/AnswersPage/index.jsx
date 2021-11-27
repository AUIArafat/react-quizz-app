import { MinusOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";
import { Collapse, Form, Spin } from "antd";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import SubHeader from "../../components/SubHeader";
import { UserContext } from "../../contexts/Context";
import Answer from "./components/Answer";
import Question from "./components/Question";
import useAnswers from "./hooks/useAnswers";
import "./style/index.css";

const { Panel } = Collapse;
export default function AnswersPage() {
  const { currentUser } = useContext(UserContext);
  const { answers, loading } = useAnswers();
  const history = useHistory();

  useEffect(() => {
    if (currentUser && currentUser?.userType !== "Admin") history.push("/");
  }, [currentUser]);

  return (
    <Spin spinning={loading}>
      <SubHeader title={"Answers"} />
      <Form
        name="dynamic_form_nest_item"
        autoComplete="off"
        className={"container"}
      >
        <Collapse
          defaultActiveKey={["0"]}
          expandIcon={() => <UserOutlined />}
          className={"user-collapse"}
        >
          {answers &&
            Object.keys(answers).map((key, index) => (
              <Panel header={key} key={index}>
                {Object.keys(answers[key]).map((data, idx) => (
                  <Collapse
                    expandIconPosition="right"
                    expandIcon={({ isActive }) =>
                      isActive ? <MinusOutlined /> : <PlusOutlined />
                    }
                    className={"question-collapse"}
                  >
                    <Panel
                      header={
                        <Question question={answers[key][data].question} />
                      }
                      key={idx}
                    >
                      <Answer answer={answers[key][data].answer} />
                    </Panel>
                  </Collapse>
                ))}
              </Panel>
            ))}
        </Collapse>
      </Form>
    </Spin>
  );
}
