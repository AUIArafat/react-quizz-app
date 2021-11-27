import { Form, Spin } from "antd";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import SubHeader from "../../components/SubHeader";
import { UserContext } from "../../contexts/Context";
import "./style/index.css";
import Question from "./components/Question";
import AddQuestion from "./components/AddQuestion";
import useQuestions from "./hooks/useQuestions";

export const QuestionsPage = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  const { currentUser } = useContext(UserContext);
  const { questions, loading, addQuestion, removeQuestion, editQuestions } =
    useQuestions();
  const onChange = (val, question) => {
    if (question.id && val.length > 0 && val !== question.question) {
      editQuestions(question.id, val);
    }
  };

  const handleDelete = (id) => {
    removeQuestion(id);
  };
  const handleAddQuestion = (data) => {
    addQuestion(data);
    form.resetFields();
  };
  useEffect(() => {
    if (currentUser?.userType !== "Admin") history.push("/");
  }, []);
  return (
    <Spin spinning={loading}>
      <SubHeader title={"Questions"} />
      <Form
        name="dynamic_form_nest_item"
        autoComplete="off"
        className={"container"}
      >
        {questions.map((question, index) => (
          <Form.Item key={question.id}>
            <Question
              index={index}
              onChange={onChange}
              question={question}
              handleDelete={handleDelete}
            />
          </Form.Item>
        ))}
      </Form>
      <AddQuestion form={form} handleAddQuestion={handleAddQuestion} />
    </Spin>
  );
};
