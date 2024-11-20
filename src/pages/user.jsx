import UserForm from "../components/user/user.form"
import UserTable from "../components/user/user.table"
import {  useState,useEffect } from 'react';
import { fetchAllUserApi } from '../services/api.service';

const UserPage = () => {
    
    const [dataUsers, setDataUsers] = useState([]);

    useEffect(() => {
        loadUser(); // Gọi hàm chỉ một lần khi component được render lần đầu
    }, []);
    
    const loadUser = async () => {
        const res = await fetchAllUserApi()
        
        setDataUsers(res.data)
    }

    return (
        <div style={{padding: "40px"}}>
            <UserForm  loadUser={loadUser}/>
            <UserTable 
            loadUser={loadUser}
            dataUsers={dataUsers}
            />
        </div>
    )
}
export default UserPage