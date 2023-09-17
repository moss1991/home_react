/**
 * 路由配置文件
 */
import { RouteObject } from 'react-router-dom';
import Home from '../layout/home';
import FetchData from '../pages/11_fetch_data/main'
import FetchBizMetaData from '../pages/12_fetch_biz_meta_data/main'
import FetchManagementMetaData from '../pages/13_fetch_manage_meta_data/main'
import DataBaseManage from '../pages/71_system_dbmanage/main'
import Counter from '../pages/page1'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home/>,
    children: [
      { path:"/fm" , element: <FetchData/>},
      { path:"/fbm" , element: <FetchBizMetaData/>},
      { path:"/fmm" , element: <FetchManagementMetaData/>},
      { path:"/sdcm" , element: <DataBaseManage/>},
      { path:"/page1" , element: <Counter />},
    ]
  }
];


export default routes;
