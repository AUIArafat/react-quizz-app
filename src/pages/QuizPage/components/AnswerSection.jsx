import { EditOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography } from "antd";

const { Paragraph } = Typography;

export default function AnswerSection({
  answers,
  question,
  handleSubmitAnswer,
  form,
}) {
  return (
    <div className="answer-section">
      <div className="icon-section">
        <span className="answer-icon">A</span>
      </div>
      {answers && answers[question?.id] ? (
        <div className="text-section">
          <Paragraph
            editable={{
              onChange: (val) => handleSubmitAnswer(question, val),
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
            <Button type="primary" onClick={() => handleSubmitAnswer(question)}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
}
