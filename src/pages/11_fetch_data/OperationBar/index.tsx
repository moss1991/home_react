import React, { Component, ReactNode } from 'react';
import { Col, Row } from 'antd';

interface CommonBaseProps {
    children?: ReactNode | undefined
}

export default class SearchBar extends Component<CommonBaseProps> {
    render() {
        return (
            <Row>
                <Col></Col>
            </Row>
        )
    }
}