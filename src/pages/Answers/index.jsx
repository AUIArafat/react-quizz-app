import {
  MinusOutlined,
  PlusOutlined,
  QuestionCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Collapse, Form } from "antd";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import SubHeader from "../../components/SubHeader";
import { UserContext } from "../../contexts/Context";
import "./style/index.css";

const { Panel } = Collapse;
export default function Answers() {
  const { fetchAllAnswers, answers, currentUser } = useContext(UserContext);
  const history = useHistory();
  useEffect(() => {
    if (currentUser?.userType !== "Admin") history.push("/");
    fetchAllAnswers();
  }, []);
  return (
    <>
      <SubHeader title={"Answers"} />
      <Form
        name="dynamic_form_nest_item"
        autoComplete="off"
        className={"container"}
      >
        {" "}
        <Collapse
          defaultActiveKey={["0"]}
          expandIcon={() => <UserOutlined />}
          className={"user-collapse"}
        >
          {Object.keys(answers).map((key, index) => (
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
                    // header={answers[key][data].question}
                    header={
                      <div className="answer-section">
                        <div className="icon-section">
                          <span className="question-icon">Q</span>
                        </div>
                        <span>{answers[key][data].question}</span>
                      </div>
                    }
                    key={idx}
                  >
                    <div className="answer-section">
                      <div className="icon-section">
                        <span className="answer-icon">A</span>
                      </div>
                      <span>{answers[key][data].answer}</span>
                    </div>
                  </Panel>
                </Collapse>
              ))}
            </Panel>
          ))}
        </Collapse>
      </Form>
    </>
  );
}
