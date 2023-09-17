import React, { useState } from 'react';
import { Component, ReactNode } from 'react';
import { Table } from 'antd';
// import './index.scss';
import columns from './columns';
import default_datasource from './default_data'

interface CommonBaseProps {
    children?: ReactNode | undefined
}

// export default class BizMetaTable extends Component<CommonBaseProps> {
//     render() {

//         return (
//             <Table columns={columns} dataSource={default_datasource} scroll={{x: 1300 }}></Table>
//         )
//     }
// }

const BizMetaTable: React.FC = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [loading, setLoading] = useState(false);

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    return (
        <Table rowSelection={rowSelection} columns={columns} dataSource={default_datasource} scroll={{x: 1300 }}></Table>
    )
}

export default BizMetaTable