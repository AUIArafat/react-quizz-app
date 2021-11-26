import { Form, Input, Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import SubHeader from "../../components/SubHeader";
import { UserContext } from "../../contexts/Context";
import "./style/index.css";

const { Paragraph } = Typography;

export const Questions = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  const {
    currentUser,
    questions,
    fetchAllQuestions,
    editQuestions,
    removeQuestion,
    addQuestion,
  } = useContext(UserContext);

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
    fetchAllQuestions();
  }, []);
  return (
    <>
      <SubHeader title={"Questions"} />
      <Form
        name="dynamic_form_nest_item"
        autoComplete="off"
        className={"container"}
      >
        {questions.map((question, index) => (
          <Form.Item key={question.id}>
            <div style={{ display: "flex", alignItems: "baseline" }}>
              {index + 1}
              {". "}
              <Paragraph
                editable={{
                  onChange: (e) => onChange(e, question),
                  icon: (
                    <Button type={"primary"}>
                      <EditOutlined />
                    </Button>
                  ),
                }}
              >
                {question.question}
              </Paragraph>
              <Button
                type={"primary"}
                onClick={() => handleDelete(question.id)}
              >
                <DeleteOutlined />
              </Button>
            </div>
          </Form.Item>
        ))}
      </Form>
      <Form
        layout={"inline"}
        className={"add-question-form"}
        onFinish={handleAddQuestion}
        form={form}
      >
        <Form.Item name="question" style={{ width: "80%" }}>
          <Input.TextArea placeholder="Add Question" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Add Question
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
