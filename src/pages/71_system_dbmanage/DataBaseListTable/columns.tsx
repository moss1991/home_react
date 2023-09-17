import type { ColumnsType } from 'antd/es/table';
import { Badge ,  Space } from 'antd';

interface DataType {
    key: React.Key;
    db_name: string;
    db_driver: string;
    db_ip: string;
    db_port: string;
    db_con_status: string;
    db_username: string;
    db_password: string;
    // db_authlist: string;
    // description: string;
}

const columns: ColumnsType<DataType> = [
    {
      title: '数据库名',
      dataIndex: 'db_name',
      key: 'db_name',
    },
    {
        title: '驱动信息',
        dataIndex: 'db_driver',
        key: 'db_driver',
    },
    {
      title: '数据库地址',
      dataIndex: 'db_ip',
      key: 'db_ip',
    },
    {
      title: '数据库端口',
      dataIndex: 'db_port',
      key: 'db_port',
    },

    {
        title: '用户名',
        dataIndex: 'db_username',
        key: 'db_username',
    },

    {
        title: '密码',
        dataIndex: 'db_password',
        key: 'db_password',
    },

    {
        title:"连接状态",
        dataIndex:"db_con_status",
        key:"db_con_status",
        render: ()=>(
            <Badge status="success" text="success" />
        )
    },

    {
        title: '操作',
        dataIndex: '',
        key: 'x',
        render: () => (
            <Space size="middle">
                <a>Edit</a>
                <a>Delete</a>
                <a>Ban</a>
            </Space>
        ),
    }
];

export default columns