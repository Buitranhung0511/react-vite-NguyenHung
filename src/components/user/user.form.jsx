import Input from "antd/es/input/Input"
import { Button, notification, Modal } from "antd";
import { useState } from "react";
import { createUserApi } from "../../services/api.service";



const UserForm = (props) => {
    const{loadUser} = props

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const [isModalOpen, setIsModelOpen] = useState(false);

    const handleSubmitBtn = async () => {

        const res = await createUserApi(fullName, email, password, phone)

        if (res.data) {  // cái củ nợ này để thống báo khi tạo User thành công 
            notification.success({
                message: "Create User",
                description: "Create Sucessfully!!..."
            })
            setIsModelOpen(false)
            await loadUser();
        } else {
            notification.error({
                message: "Error Create User",
                description: JSON.stringify(res.message)
            })
        }
    }

    const resetAndCloseModal = () => {
        setIsModelOpen(false);
        setFullName("");
        setEmail("");
        setPassword("");
        setPhone("");
    }


    return (
        <div className='userform' style={{ margin: "20px 0" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Table Users</h3>
                <Button
                    type="primary"
                    onClick={() => { setIsModelOpen(true) }}//thay vì viết Function Click mà có 1 dòng thì mang dòng đó bỏ vào lun khỏi viết
                >Create User</Button>
            </div>
            <Modal
                title="Basic Modal"
                open={isModalOpen}
                onOk={() => { handleSubmitBtn() }}
                onCancel={() => { resetAndCloseModal() }}
                okText={"Create"}
                cancelText={"No"}
                //Nếu không set thằng nừ thì khi nhấn CreateUser xong người dùng nhấn vào khoản trống bên ngoai popop sẽ tự đóng
                maskClosable={false}//
            >
                <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
                    <div>
                        <span>Full Name</span>
                        <Input
                            value={fullName}
                            onChange={(event) => { setFullName(event.target.value) }}
                        />

                    </div>

                    <div>
                        <span> Email</span>
                        <Input
                            value={email}
                            onChange={(event) => { setEmail(event.target.value) }}

                        />
                    </div>

                    <div>
                        <span> Password</span>
                        <Input.Password
                            value={password}
                            onChange={(event) => { setPassword(event.target.value) }}

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

        </div>

    )
}

export default UserForm