import { Button, Checkbox, Form, Input, Select } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TagInput from "../../../components/TagInput/tagInput";
import FileInput from "../../../components/FileInput/fileInput";
import { createProduct } from "../../../store/reducers/ProductSlice";
import { Col, Row } from 'antd';
const PhotoUpload = () => {
  const [form] = Form.useForm();
  const Categories = useSelector((state) => state.product.categories);
  const dispatch = useDispatch();
  const onFinish = (values) => {
    const data = new FormData();
    for(let key in values) {
      data.append(key, values[key])
    }
    data.set('public_assets', values.public_assets[0].originFileObj, values.public_assets[0].name)
    data.set('private_assets', values.private_assets[0].originFileObj, values.private_assets[0].name);
    data.append('type', 'image');
    dispatch(createProduct({data, reset: form.resetFields}));
    event.preventDefault();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      layout="vertical"
      form={form}
      name="basic"
      
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please add title !",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please add description !",
              },
            ]}
          >
          <Input />
          </Form.Item>
        </Col>
      </Row>
      

      
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form.Item
            label="Category"
            name="categoryId"
            rules={[
              {
                required: true,
                message: "Please Select a category !",
              },
            ]}
            >
            <Select
      
              options={Categories.map((catg) => ({
                label: catg.title,
                value: catg.id,
              }))}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Tags"
            name="tags"
            rules={[
              {
                required: true,
                message: "Please add tags !",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        label="Resolution"
        name="resolution"
        rules={[
          {
            required: true,
            message: "Please add resolution !",
          },
        ]}
      >
        <Input placeholder="1280 X 1920 ..."/>
      </Form.Item>

      <Row gutter={[16, 16]} justify="center">
        <Col span={12}>
          <Form.Item
            label="Thumnail image with watermark"
            name="public_assets"
            valuePropName="fileList"
            getValueFromEvent={(event) => {
              return event.fileList;
            }}
            rules={[
              {
                required: true,
                message: "Please add a file !",
              },
              {
                validator(_, fileList) {
                  return new Promise((resolve, reject) => {
                    if (fileList && fileList[0]?.size > 10 * 1024 * 1024) {
                      reject("File size exceeded !");
                    } else {
                      resolve("success");
                    }
                  });
                },
              },
            ]}
          >
            <FileInput />
          </Form.Item>
        </Col>
        <Col span={12} justify={'center'}>
          <Form.Item
          label="Original image "
          name="private_assets"
          valuePropName="fileList"
          getValueFromEvent={(event) => {
            return event.fileList;
          }}
          rules={[
            {
              required: true,
              message: "Please add a file !",
            },
            {
              validator(_, fileList) {
                return new Promise((resolve, reject) => {
                  if (fileList && fileList[0]?.size > 10 * 1024 * 1024) {
                    reject("File size exceeded !");
                  } else {
                    resolve("success");
                  }
                });
              },
            },
          ]}
        >
          <FileInput />
          </Form.Item>
        </Col>
      </Row>
      

      <Row justify={'center'}>
        <Form.Item
          style={{marginTop: '16px', padding: '0 64px'}}
        >
          <Button type="primary" htmlType="submit" block>
            Upload
          </Button>
        </Form.Item>
      </Row>
      
    </Form>
  );
};
export default PhotoUpload;
