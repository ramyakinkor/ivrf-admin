import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/reducers/AdminSlice";
import { Button, Card, Form, Input } from "antd";

const Login = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(login({ credential: values, reset: form.resetFields }));
    event.preventDefault();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Card title="Admin Login" bordered={true} 
      style={{ 
      width: 600, 
      margin: "auto",
      marginTop: "20vh", }}>
      <Form
        form={form}
        layout="vertica"
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        style={{
          maxWidth: 600,
          
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please provide password",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            LOGIN
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
export default Login;
