import React, { useState } from 'react';
import {Layout, theme } from 'antd';

import ManagementMetaTable from './ManagementMetaTable/index'
import SearchBar from './SearchBar/index'

const FetchManagementMetaData: React.FC = () => {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    return (
        <Layout style={{ minHeight: '100%' }}>
            <SearchBar></SearchBar>
            <ManagementMetaTable></ManagementMetaTable>
        </Layout>
    )
}

export default FetchManagementMetaData