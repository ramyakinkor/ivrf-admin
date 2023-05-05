import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { useEffect, useState } from 'react';
const { Header, Sider, Content } = Layout;
import { useDispatch, useSelector } from "react-redux";
import Login from "../Login/Login";
import { routes } from "../../routes/routes";
import './Home.css'
import { getProfile } from "../../store/reducers/AdminSlice";
import { getAllImages, getAllVideos, getProductCategories } from "../../store/reducers/ProductSlice";



const Home = () => {
  const location = useLocation();
  const profile = useSelector(state => state.admin.profile);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
    dispatch(getAllImages());
    dispatch(getAllVideos());
    dispatch(getProductCategories());
  }, [])
  
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
    {true ? (
      <Layout style={{height: '100vh'}}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={routes.map((route, index) => getSidebardLink(++index, route.title, route.url, route.icon))}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              color: 'black',
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            {/* <span>{title}</span> */}
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>)
      : <Login />
    }
    </>
  );
};
export default Home;

function getSidebardLink(key, title, url, Icon) {
  return {
    key,
    icon: <Icon/>,
    label: (<Link to={`/${url}`} params={{title: title}}>{title}</Link>) 
  }

}
