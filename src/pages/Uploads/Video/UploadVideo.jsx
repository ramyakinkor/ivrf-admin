import { Button, Checkbox, Form, Input, Select, Progress, Alert } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import TagInput from "../../../components/TagInput/tagInput";
import FileInput from "../../../components/FileInput/fileInput";
import { createProduct } from '../../../store/reducers/ProductSlice';
import { Col, Row } from 'antd';
const VideoUpload = () => {
  const [form] = Form.useForm();
  const [progVal, setProgVal] = useState(0)
  const [visible, setVisible] = useState(false);
  const Categories = useSelector(state => state.product.categories)
  const dispatch = useDispatch();
  const onFinish = (values) => {
    setVisible(true);
    const data = new FormData();
    for(let key in values) {
      data.append(key, values[key]);
    }
    data.set('public_assets', values.public_assets[0].originFileObj, values.public_assets[0].name)
    data.set('private_assets', values.private_assets[0].originFileObj, values.private_assets[0].name);
    data.append('type', 'video');
    dispatch(createProduct({data, reset: form.resetFields, progress}));
    event.preventDefault();
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  function progress(progEvent) {
    console.log(progEvent.loaded, progEvent.total)
    const percent = Math.round((progEvent.loaded / progEvent.total) * 100);
    setProgVal(percent)
  }

  const handleClose = () => {
    setVisible(false);
    setProgVal(0);
  };
  return (
    <Form
      form={form}
      name="basic"
      layout='vertical'
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >

      <Row gutter={[16, 16]}>
        {visible && 
          <Alert style={{width: '100%'}} closable message={<Progress  percent={progVal} />} afterClose={handleClose}/>
        }
      </Row>
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
        <Input placeholder='HD / Full HD / 4K ...'/>
      </Form.Item>
      
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form.Item
          label="Video with watermark"
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
        <Col span={12}>
          <Form.Item
          label="Original video "
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
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Upload
          </Button>
        </Form.Item>
      </Row>
      
    </Form>
  );
};
export default VideoUpload;
