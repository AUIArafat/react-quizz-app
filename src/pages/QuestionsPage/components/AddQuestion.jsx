import { Form, Input, Button } from "antd";

export default function AddQuestion({ form, handleAddQuestion }) {
  return (
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
        <Button type="primary" htmlType="submit" className="login-form-button">
          Add Question
        </Button>
      </Form.Item>
    </Form>
  );
}
