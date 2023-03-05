import axios from 'axios';

const token = localStorage.getItem("token")
export default axios.create({
    baseURL: 'http://localhost:8000/static',
    headers: {
        "Authorization": `Token ${token}`
    }
    
});