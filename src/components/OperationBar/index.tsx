import React, { Component, ReactNode } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import './index.scss';

interface CommonBaseProps {
    children?: ReactNode | undefined
}

export default class SearchBar extends Component<CommonBaseProps> {
    render() {
        return (
            <div className="common-base-wrapper"></div>
        )
    }
}