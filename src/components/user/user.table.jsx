import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import UpdateUserModal from "../user/update.user.modal"
import { useState } from 'react';
import ViewUserDetail from './view.user.detail';

const UserTable = (props) => {
    const { dataUsers,loadUser } = props

    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);

    const [isDataDetailOpen, setIsDataDetailOpen] = useState(false);
    const [dataDetail, setDataDetail] = useState(null);

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a href='#'
                    onClick={() =>{
                        setDataDetail(record);
                        setIsDataDetailOpen(true);
                    }}
                    >{record._id}</a>
                )
            }

        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: "flex", gap: "20px" }}>
                    <EditOutlined 
                    style={{ cursor: "pointer", color: "orange" }} 
                    onClick={() =>{
                        setDataUpdate(record)
                        setIsModalUpdateOpen(true)
                    }}
                    />
                    <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                </div>
            ),
        }
    ];

    

    return (
        <>
            <Table
                columns={columns}
                dataSource={dataUsers}
                rowKey={"_id"}
            />
            <UpdateUserModal 
            isModalUpdateOpen ={isModalUpdateOpen}
            setIsModalUpdateOpen={setIsModalUpdateOpen}
            dataUpdate={dataUpdate}
            setDataUpdate={setDataUpdate}
            loadUser={loadUser}
            />

            <ViewUserDetail
            dataDetail={dataDetail}
            setDataDetail={setDataDetail}
            isDataDetailOpen={isDataDetailOpen}
            setIsDataDetailOpen={setIsDataDetailOpen}
            />
        </>
    )

}


export default UserTable