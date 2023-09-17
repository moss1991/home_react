import type { ColumnsType } from 'antd/es/table';
import { Badge ,  Space } from 'antd';

interface DataType {
    key: React.Key;
    excel_name: string;
    excel_owner: string;
    excel_frequency: string;
    excel_to_db:string;
}

const columns: ColumnsType<DataType> = [
    {
      title: '别名',
      dataIndex: 'excel_name',
      key: 'excel_name',
    },
    {
        title: '模板',
        dataIndex: '',
        key: '',
        render:()=>(
            <Space size="middle">
                <a>预览</a>
                <a>下载</a>
            </Space>
        )
    },

    {
      title: '所有者',
      dataIndex: 'excel_owner',
      key: 'excel_owner',
    },

    {
        title: '频率',
        dataIndex: 'excel_frequency',
        key: 'excel_frequency',
    },

    {
        title: '保存到数据库',
        dataIndex: 'excel_to_db',
        key: 'excel_to_db',
    },

    {
        title: '操作',
        dataIndex: '',
        key: 'x',
        render: () => (
            <Space size="middle">
                <a>上传</a>
                <a>历史版本</a>
            </Space>
        ),
    }
];

export default columns