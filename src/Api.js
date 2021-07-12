import axios from 'axios'


const api = axios.create({
    baseURL:'192.168.0.62:3334'
});
export default api; 
