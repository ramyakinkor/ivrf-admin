
import { UploadOutlined, PlusOutlined } from '@ant-design/icons';
import { Modal, Upload, Button } from 'antd';
import { useState } from 'react';
import './fileInput.css';
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const FileInput = ({fileList = [], onChange}) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };
  const uploadButtonPictureCard = (
    <div>
      <UploadOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const uploadButtonPicture = (
    <Button icon={<UploadOutlined />}>Upload</Button>
  )
  return (
    <>
     
      <Upload style={{width: '100%'}}
        listType="picture-card"
        beforeUpload={(file) => {
            return false
        }}
        onChange={onChange}
        fileList={fileList}
        onPreview={handlePreview}
        maxCount={1}
      >
        {fileList.length >= 1 ? null : uploadButtonPictureCard}
      </Upload>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img
          alt="example"
          style={{
            width: '100%',
          }}
          src={previewImage}
        />
      </Modal>
    </>
  );
};
export default FileInput;