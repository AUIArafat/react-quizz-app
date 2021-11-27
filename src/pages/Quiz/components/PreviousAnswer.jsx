import { List } from "antd";

export default function PreviousAnswer({ prevAns }) {
  return (
    <List
      header={<div>Previous Answer</div>}
      bordered
      dataSource={prevAns}
      renderItem={(item) => <List.Item>{item}</List.Item>}
      style={{ marginTop: "15px" }}
    />
  );
}
