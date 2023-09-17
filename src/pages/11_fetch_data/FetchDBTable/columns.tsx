import type { ColumnsType } from 'antd/es/table';
import { Badge ,  Space } from 'antd';

interface DataType {
    key: React.Key;
    table_name: string;
    table_field: string;
    field_type: string;
    isnull: string;
    PK: string;
    FK: string;
    increasing: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: '数据库',
        dataIndex: '',
        key: '',
        render:()=>(
            <Space size="middle">
                <a>预览</a>
            </Space>
        )
    },

    {
      title: '表名',
      dataIndex: 'table_name',
      key: 'table_name',
    },

    {
        title: '列名',
        dataIndex: 'table_field',
        key: 'table_field',
    },

    {
        title: '列类型',
        dataIndex: 'field_type',
        key: 'table_type',
    },

    {
        title: 'NULL',
        dataIndex: 'isnull',
        key: 'isnull',
    },

    {
        title: 'PK',
        dataIndex: 'PK',
        key: 'PK',
    },

    {
        title: 'FK',
        dataIndex: 'FK',
        key: 'FK',
    },

    {
        title: '自增',
        dataIndex: 'increasing',
        key: 'increasing',
    },

    {
        title:"业务元数据",
        dataIndex: "biz_meta",
        key: "biz_meta",
        render: ()=>(
            <Badge status="success" text="已采集" />
        )
    },

    {
        title:"管理元数据",
        dataIndex: "biz_meta",
        key: "biz_meta",
        render: ()=>(
            <Badge status="success" text="已采集" />
        )
    },


    {
        title: '操作',
        dataIndex: '',
        key: 'x',
        render: () => (
            <Space size="middle">
                <a>修改</a>
                <a>删除</a>
            </Space>
        ),
    }
];

export default columns