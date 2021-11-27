import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Collapse, Form, notification, Spin } from "antd";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import SubHeader from "../../components/SubHeader";
import { UserContext } from "../../contexts/Context";
import useQuiz from "./hooks/useQuiz";
import AnswerSection from "./components/AnswerSection";
import PreviousAnswer from "./components/PreviousAnswer";
import "./style/index.css";

const { Panel } = Collapse;

export default function QuizPage() {
  const history = useHistory();
  const { currentUser } = useContext(UserContext);
  const { loading, error, answers, submitAnswer, questions } = useQuiz(
    currentUser?.email
  );
  const [form] = Form.useForm();

  useEffect(() => {
    if (currentUser?.userType === "Admin") history.push("/questions");
  }, [currentUser]);

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
                  <AnswerSection
                    answers={answers}
                    question={question}
                    handleSubmitAnswer={handleSubmitAnswer}
                    form={form}
                  />
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
