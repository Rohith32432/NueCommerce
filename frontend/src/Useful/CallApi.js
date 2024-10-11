import axios from 'axios';
import { useAuth } from '../Context/UserContext';

function CallApis() {
    const Baseurl = process.env.REACT_APP_BASE_URL || 'http://localhost:3004/api/user';
    const { token } = useAuth() || { token: 'hi' };
    
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    async function getdata(uri) {
        try {
            const { data } = await axios.get(`${Baseurl}/${uri}`, config);
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error; 
        }
    }

    async function postdata(uri,userdata) {
        try {
            
            const { data, status } = await axios.post(`${Baseurl}/${uri}`, userdata, config);
            return { data, status:status>=200 && status<210 };
        } catch (error) {
            console.error('Error posting data:', error);
            throw error; 
        }
    }
    async function putrequest(uri,userdata) {
        try {
            
            const { data, status } = await axios.put(`${Baseurl}/${uri}`, userdata, config);
            return { data, status:status>=200 && status<210 };
        } catch (error) {
            console.error('Error posting data:', error);
            throw error; 
        }
    } 
    async function deleterequest(uri,userdata) {
        try {
            
            const { data, status } = await axios.delete(`${Baseurl}/${uri}`, config);
            return { data, status:status>=200 && status<210 };
        } catch (error) {
            console.error('Error posting data:', error);
            throw error; 
        }
    } 
 
async function Debounce(delay, cb) {
    let timer;
    return function () {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cb();
      }, delay);
    };
  }
    return {
        getdata,
        postdata,
        putrequest,
        deleterequest,
        Debounce
    };
}

export default CallApis;
