
import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Outlet , useNavigate  } from 'react-router-dom';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import type { MenuProps } from 'antd';
import store from '../store'
import './home.less'

const { Header, Content, Footer, Sider } = Layout;

const Home: React.FC = () => {
  // type
  type MenuItem = Required<MenuProps>['items'][number];
  // useState
  const [ collapsed, setCollapsed ] = useState(false);
  const [ current, setCurrent ] = useState('1');
  const { token: { colorBgContainer } } = theme.useToken();
  const navigate = useNavigate();

  // utils function
  function get_item(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }
  // 
  const LeftMenuList: MenuItem[] = [
    get_item('采集数据', 'fd', <PieChartOutlined />,[
      get_item('接入数据', 'fm', <DesktopOutlined />),
      get_item('业务元数据采集', 'fbm', <DesktopOutlined />),
      get_item('管理元数据采集', 'fmm', <DesktopOutlined />),
    ]),
    get_item('清洗数据', '2', <DesktopOutlined />,[
      get_item('主数据检查', '21', <DesktopOutlined />),
      get_item('表关系梳理', '22', <DesktopOutlined />),
    ]),
    get_item('数据建模', '3', <UserOutlined />, [
      get_item('主数据建模', '31', <DesktopOutlined />),
      get_item('指标建模', '32', <DesktopOutlined />),
      get_item('维度建模', '33', <DesktopOutlined />),
      get_item('生成数据资产', '34', <DesktopOutlined />),
    ]),
    get_item('数据资产', '4', <TeamOutlined />, [
      get_item('数据资产清单', '41', <DesktopOutlined />),
      get_item('制定质检规则', '42', <DesktopOutlined />),
      get_item('出具质检报告', '43', <DesktopOutlined />),
      get_item('提升数据质量', '44', <DesktopOutlined />),
    ]),
    get_item('导出数据', '5', <FileOutlined />,[
      get_item('导出excel', '51', <DesktopOutlined />),
      get_item('数据服务化', '52', <DesktopOutlined />),
    ]),
    get_item('业数融合', '6', <FileOutlined /> ,[
      get_item('主题域', '61', <DesktopOutlined />),
      get_item('接入标准', '62', <DesktopOutlined />),
      get_item('指标管理', '63', <DesktopOutlined />),
    ]),

    get_item('系统设置', '7', <FileOutlined /> ,[
      get_item('数据库连接管理', 'sdcm', <DesktopOutlined />),
    ]),
  ];

  // 点击导航
  const onClick: MenuProps['onClick'] = (e) => {

    // console.log("click")

    let _key: string = e.key;

    let _router_list: { [key: string]: string } = {
      "fm" : "/fm",
      "fmm" : "/fmm",
      "fbm" : "/fbm",
      "sdcm" : "/sdcm", //system database connection management
    }

    setCurrent(_key);

    if( Object.keys(_router_list).includes(_key) ){
      let _router = _router_list[_key];
      navigate(_router)
    }

  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo-vertical" />
        <Menu theme="dark" selectedKeys={[current]} defaultSelectedKeys={['1']} mode="inline" items={LeftMenuList} onClick={onClick}/>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>

          <div style={{ padding: 24, minHeight: "calc(100% - 80px)", background: colorBgContainer }}>
            <Outlet />
          </div>

        </Content>
      </Layout>
    </Layout>
  )
}

export default Home