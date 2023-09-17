import React, { useState } from 'react';
import {Button, Layout, theme , Card} from 'antd';
import { DiffFilled } from '@ant-design/icons';
import DataBaseListTable from './DataBaseListTable/index'


const DataBaseManage: React.FC = () => {
    return (
        <Layout style={{ minHeight: '100%' }}>
            <DataBaseListTable></DataBaseListTable>
        </Layout>
    )
}

export default DataBaseManage