import { useEffect, useState } from "react";
import { notification, Modal, Input } from "antd";
import { updateUserApi } from "../../services/api.service";
const UpdateUserModal = (props) => {

    const { isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate,loadUser } = props;

    const [fullName, setFullName] = useState("");
    const [id, setId] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        console.log(">>>Check dataUpdate", dataUpdate);
        if (dataUpdate) {
            setId(dataUpdate._id);
            setFullName(dataUpdate.fullName);
            setPhone(dataUpdate.phone);
        }
    }, [dataUpdate])

    const handleSubmitBtn = async () => {

        const res = await updateUserApi(id ,fullName, phone)

        if (res.data) {  // cái củ nợ này để thống báo khi tạo User thành công 
            notification.success({
                message: "Update User",
                description: "Update Successfully!!..."
            })
            setIsModalUpdateOpen(false)
             await loadUser();
        } else {
            notification.error({
                message: "Error Update User",
                description: JSON.stringify(res.message)
            })
        }
    }

    const resetAndCloseModal = () => {
        setIsModalUpdateOpen(false);
        setId("");
        setFullName("");
        setPhone("");
        setDataUpdate(null);
    }



    return (
        <Modal
            title="Update User"
            open={isModalUpdateOpen}
            onOk={() => { handleSubmitBtn() }}
            onCancel={() => { resetAndCloseModal() }}
            okText={"SAVE"}
            cancelText={"Cancel"}
            //Nếu không set thằng nừ thì khi nhấn CreateUser xong người dùng nhấn vào khoản trống bên ngoai popop sẽ tự đóng
            maskClosable={false}//
        >
            <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
                <div>
                    <span> Id</span>
                    <Input
                        value={id}
                        disabled
                    />
                </div>
                <div>
                    <span>Full Name</span>
                    <Input
                        value={fullName}
                        onChange={(event) => { setFullName(event.target.value) }}
                    />

                </div>

                <div>
                    <span>Phone Number</span>
                    <Input
                        value={phone}
                        onChange={(event) => { setPhone(event.target.value) }}
                    />
                </div>
            </div>
        </Modal>
    )
}


export default UpdateUserModal