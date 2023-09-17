import { Component, ReactNode } from 'react';
import { Table } from 'antd';
// import './index.scss';
import columns from './columns';
import default_datasource from './default_data'

interface CommonBaseProps {
    children?: ReactNode | undefined
}

export default class ExcelTable extends Component<CommonBaseProps> {
    render() {
        return (
            <Table columns={columns} dataSource={default_datasource} scroll={{x: 1300 }}></Table>
        )
    }
}