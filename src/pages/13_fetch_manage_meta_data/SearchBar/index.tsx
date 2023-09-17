import { Component, ReactNode } from 'react';
import { Button, Card, Space } from 'antd';
import { Col, Row } from 'antd';
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons';

import "./index.scss"

interface CommonBaseProps {
    children?: ReactNode | undefined
}

export default class SearchBar extends Component<CommonBaseProps> {
    render() {
        return (
            <Card>
                <Row>
                    <Col span={18} >
                        <Space>
                            <Button type="primary" icon={<DownloadOutlined />}>下载</Button>
                            <Button type="primary" icon={<DownloadOutlined />}>导入</Button>
                        </Space>
                    </Col>
                    <Col span={6} >
                        
                    </Col>
                </Row>
            </Card>
        )
    }
}