/**
 * 路由组件
 */
import React, { Component } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './routes';

const route = createBrowserRouter(routes)

export default class RouterWrapper extends Component {
    render() {
        return (
            <RouterProvider router={route} />
        );
    }
}
