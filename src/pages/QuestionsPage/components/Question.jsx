import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";

const { Paragraph } = Typography;
export default function Question({ onChange, question, handleDelete }) {
  return (
    <div className="answer-section">
      <div className="icon-section">
        <span className="question-icon">Q</span>
      </div>
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
      <Button type={"primary"} onClick={() => handleDelete(question.id)}>
        <DeleteOutlined />
      </Button>
    </div>
  );
}
