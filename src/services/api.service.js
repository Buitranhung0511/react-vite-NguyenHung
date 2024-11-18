// import axios from "axios";
import axios from "./axios.customize";


const createUserApi = (fullName,email,password,phone) =>{
    const URL_BACKEND = "/api/v1/user"; //Tajo kết nối đến BackEnd gọi API
    const data = { // Lấy dữ liệu từ API kết nối với với React
        fullName:fullName,
        email:email,
        password:password,
        phone:phone
    }
    return axios.post(URL_BACKEND, data);  // Chuyền 2 củ nợ ở trên vô để axios nó gọi API
} 

const updateUserApi = () =>{

} 

const fetchAllUserApi = () =>{
    const URL_BACKEND = "/api/v1/user"; //Tajo kết nối đến BackEnd gọi API
    return axios.get(URL_BACKEND);  // Chuyền 2 củ nợ ở trên vô để axios nó gọi API
} 

export{
    createUserApi,
    updateUserApi,
    fetchAllUserApi
    
}