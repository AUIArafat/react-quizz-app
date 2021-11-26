import { QuestionCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Collapse, Form, Table } from "antd";
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
          accordion
          expandIcon={() => <UserOutlined />}
          className={"user-collapse"}
        >
          {Object.keys(answers).map((key, index) => (
            <Panel header={key} key={index}>
              {Object.keys(answers[key]).map((data, idx) => (
                <Collapse
                  defaultActiveKey={["0"]}
                  accordion
                  expandIcon={() => <QuestionCircleOutlined />}
                  className={"question-collapse"}
                >
                  <Panel header={answers[key][data].question} key={idx}>
                    <span>{answers[key][data].answer}</span>
                  </Panel>
                </Collapse>
              ))}
            </Panel>
          ))}
        </Collapse>
        ,
      </Form>
    </>
  );
}
