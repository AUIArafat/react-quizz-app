import {
  ArrowRightOutlined,
  EditOutlined,
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import {
  Button,
  Collapse,
  Form,
  Input,
  notification,
  Spin,
  Typography,
} from "antd";
import { useContext, useEffect } from "react";
import SubHeader from "../../components/SubHeader";
import { UserContext } from "../../contexts/Context";
import useAnswers from "../../hooks/useAnswers";
import PreviousAnswer from "./components/PreviousAnswer";
import "./style/index.css";

const { Panel } = Collapse;
const { Paragraph } = Typography;

export default function Quiz() {
  const { fetchAllQuestions, questions, currentUser } = useContext(UserContext);
  const { loading, error, answers, submitAnswer } = useAnswers(
    currentUser?.email
  );
  const [form] = Form.useForm();
  useEffect(() => {
    fetchAllQuestions();
  }, []);

  useEffect(() => {
    if (error) {
      notification.error({
        message: error,
      });
    }
  }, [error]);

  const handleSubmitAnswer = (data, editAnswer = null) => {
    let ans = editAnswer;
    if (!editAnswer) ans = form.getFieldValue(`answer-${data.id}`);
    const submitData = {
      ...data,
      answer: ans,
    };
    submitAnswer(currentUser?.email, submitData);
  };
  return (
    <Spin spinning={loading}>
      <SubHeader title={"Quiz"} />
      <div className={"container"}>
        <Collapse
          accordion
          expandIconPosition="right"
          expandIcon={({ isActive }) =>
            isActive ? <MinusOutlined /> : <PlusOutlined />
          }
        >
          {questions &&
            questions.map((question, index) => {
              return (
                <Panel
                  header={
                    <div className="answer-section">
                      <div className="icon-section">
                        <span className="question-icon">Q</span>
                      </div>
                      {question.question}
                    </div>
                  }
                  key={question.id}
                >
                  <div className="answer-section">
                    <div className="icon-section">
                      <span className="answer-icon">A</span>
                    </div>
                    {answers && answers[question?.id] ? (
                      <div className="text-section">
                        {/* {answers[question?.id]?.answer} */}
                        <Paragraph
                          editable={{
                            onChange: (val) =>
                              handleSubmitAnswer(question, val),
                            icon: (
                              <Button type={"primary"}>
                                <EditOutlined />
                              </Button>
                            ),
                          }}
                        >
                          {answers[question?.id]?.answer}
                        </Paragraph>
                      </div>
                    ) : (
                      <Form key={question.id} layout={"inline"} form={form}>
                        <Form.Item name={`answer-${question.id}`}>
                          <Input.TextArea />
                        </Form.Item>
                        <Form.Item>
                          <Button
                            type="primary"
                            onClick={() => handleSubmitAnswer(question)}
                          >
                            Submit
                          </Button>
                        </Form.Item>
                      </Form>
                    )}
                  </div>
                  {answers &&
                  answers[question?.id]?.previousAnswer.length > 1 ? (
                    <PreviousAnswer
                      prevAns={answers[question?.id]?.previousAnswer.slice(
                        0,
                        -1
                      )}
                    />
                  ) : null}
                </Panel>
              );
            })}
        </Collapse>
      </div>
    </Spin>
  );
}
