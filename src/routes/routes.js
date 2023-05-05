import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    CameraOutlined,
    ApartmentOutlined
  } from '@ant-design/icons';
import AllPhotos from "../pages/All/Photos/AllPhotos";
import AllVideos from "../pages/All/Videos/AllVideos";
import Category from "../pages/Category/category";
import PhotoUpload from "../pages/Uploads/Photo/PhotoUpload";
import UploadVideo from "../pages/Uploads/Video/UploadVideo";


export const routes = [
    {
      icon: UploadOutlined,
      title: 'Upload photos',
      url: '',
      component: PhotoUpload
    },
    {
      icon: UploadOutlined,
      title: 'Upload videos',
      url: 'upload-video',
      component: UploadVideo
    },
    {
  
      icon: CameraOutlined,
      title: 'Photos List',
      url: 'all-photos',
      component: AllPhotos
    },
    {
      icon: VideoCameraOutlined,
      title: 'Videos List',
      url: 'all-videos',
      component: AllVideos
    },
    {
      icon: ApartmentOutlined,
      title: 'Categories',
      url: 'category',
      component: Category
      
    }
  ]