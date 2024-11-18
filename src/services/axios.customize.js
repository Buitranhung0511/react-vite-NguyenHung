import axios from "axios";


// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL
  });
  
  // Alter defaults after instance has been created
//   instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;


// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data

    if (response.data && response.data.data) return response.data; 
  return response;

}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  if (error.response && error.response.data) return error.response.data; // thêm phần này vô để ném ra lỗi chính xác không cần phải try-catch bên kia => bắt ngoại lệ
  
  return Promise.reject(error);
});

export default instance



//* Trang này là trang cấu hình Interceptors
//  + Công dụng:
//     - Quản lý đường dẫn kết nối từ Backend(port):
//                                               VD:Port hiên tại là 8888 Backend đổi thành 9999 thì vô đây cấu hình lại chứ hok phải đi sữa bên service
//     -Quản lý data khi lấy từ Backend về , rút rọn code 