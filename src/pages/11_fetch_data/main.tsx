import React, { useState } from 'react';
import {Button, Layout, theme , Card} from 'antd';
import { DiffFilled } from '@ant-design/icons';
import FetchDBTable from './FetchDBTable/index'
import ExcelTable from './FetchExcelTable/index'

const { Header, Content, Footer, Sider } = Layout;

const FetchData: React.FC = () => {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const [activate_tab_key, setactivate_tab_key] = useState<string>('tab1');

    const tab_list = [
        {
            key: 'tab1',
            tab: '数据表',
        },
        {
            key: 'tab2',
            tab: 'Excel',
        },
    ];

    const contentList: Record<string, React.ReactNode> = {
        tab1: <FetchDBTable></FetchDBTable>,
        // tab1: "",
        tab2: <ExcelTable></ExcelTable>,
    };

    const on_tab_change = (key: string) => {
        setactivate_tab_key(key);
    };


    return (
        <Layout style={{ minHeight: '100%' }}>

            <Card
                style={{ width: '100%' }}
                title="采集数据"
                extra={ <Button type="primary" icon={<DiffFilled />} >新建</Button>}
                tabList={tab_list}
                activeTabKey={activate_tab_key}
                onTabChange={on_tab_change}>
                {contentList[activate_tab_key]}
            </Card>

            

        </Layout>
    )
}

export default FetchData