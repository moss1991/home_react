import React, { useState } from 'react';
import {Layout, theme } from 'antd';
import BizMetaTable from './BizMetaTable/index'
import SearchBar from './SearchBar/index'

const FetchBizMetaData: React.FC = () => {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    return (
        <Layout style={{ minHeight: '100%' }}>
            <SearchBar></SearchBar>
            <BizMetaTable></BizMetaTable>
        </Layout>
    )
}

export default FetchBizMetaData