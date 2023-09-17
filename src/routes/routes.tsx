/**
 * 路由配置文件
 */
import { RouteObject } from 'react-router-dom';
import Home from '../layout/home';

import Counter from '../pages/page1'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home/>,
    children: [
      { path:"/page1" , element: <Counter />},
    ]
  }
];


export default routes;
