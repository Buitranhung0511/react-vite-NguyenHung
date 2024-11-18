import UserForm from "../components/user/user.form"
import UserTable from "../components/user/user.table"
import {  useState,useEffect } from 'react';
import { fetchAllUserApi } from '../services/api.service';

const UserPage = () => {
    
    const [dataUsers, setDataUsers] = useState([]);

    useEffect(() => {
        console.log(">>> run useEffect 111");
        loadUser(); // Gọi hàm chỉ một lần khi component được render lần đầu
    }, []);
    
    const loadUser = async () => {
        const res = await fetchAllUserApi()
        console.log("Dữ Liệu Trả Về từ res.date",res.data);
        
        setDataUsers(res.data)
    }

    return (
        <div style={{padding: "40px"}}>
            <UserForm  loadUser={loadUser}/>
            <UserTable dataUsers={dataUsers}/>
        </div>
    )
}
export default UserPage