// const default_datasource = [
//     {
//         key: '1',
//         excel_name: '下游日报',
//         excel_owner: '小智',
//         excel_frequency: '每天',
//         excel_to_db:"TEST_DB.TEST_TABLE",
//     },
// ];

// export default default_datasource

const default_datasource = [
    {
        key: '1',
        table_name: 'TEST_TABLE_NAME',
        table_field: 'CONTRACT_NUM',
        field_type: 'varchar(30)',
        isnull:"false",
        PK:"True",
        FK:"TEST_TABLE2.FK",
        increasing:"True",
        biz_meta: "未录入",
    },

    {
        key: '2',
        table_name: 'TEST_TABLE_NAME',
        table_field: 'CONTRACT_NUM',
        field_type: 'varchar(30)',
        isnull:"false",
        PK:"True",
        FK:"TEST_TABLE2.FK",
        increasing:"True",
        biz_meta: "已录入",
    },
];

export default default_datasource