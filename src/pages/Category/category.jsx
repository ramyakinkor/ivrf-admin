import { Button, Card, Form, Input } from "antd";
import FileInput from "../../components/FileInput/fileInput";
import { useDispatch } from "react-redux";
import { createProductCategory } from "../../store/reducers/ProductSlice";
import GetCategoryList from "./cagetogryList";
export default function Category() {
	const [form] = Form.useForm();
	const dispatch = useDispatch()
	const onFinish = (values) => {
		console.log(values)
		const data = new FormData();
    data.append('public_assets', values.image[0].originFileObj, values.image[0].name);
    data.append('title', values.title);
		dispatch(createProductCategory({data, reset: form.resetFields}))
		event.preventDefault()
	};
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
  return (
	<>
		<Card>
			<Form
			form={form}
				name="basic"
				labelCol={{
					span: 8,
				}}
				wrapperCol={{
					span: 16,
				}}
				style={{
					maxWidth: 600,
				}}
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Form.Item
					label="Title"
					name="title"
					rules={[
						{
							required: true,
							message: "Please input title!",
						},
					]}
				>
					<Input onInput={e => e.target.value = e.target.value.toUpperCase()}/>
				</Form.Item>

				<Form.Item
					label="fileupload"
					name="image"
					valuePropName="fileList"
					getValueFromEvent={event=> {
						return event.fileList
					}}
					rules={[
						{
							required: true,
							message: "Please add a file!",
						},
						{
							validator(_, fileList) {
								return new Promise((resolve, reject) => {
									if (fileList && fileList[0]?.size > (10 * 1024 * 1024)) {
										reject('File size exceeded!')
									} else {
										resolve('success')
									}
								})
							}
						}
					]}
				>
					<FileInput/>
				</Form.Item>

				<Form.Item
					wrapperCol={{
						offset: 8,
						span: 16,
					}}
				>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</Card>
		<GetCategoryList/>
	</>
  );
}



