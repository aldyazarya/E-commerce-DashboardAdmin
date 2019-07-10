import axios from 'axios'
import {API_URL} from '../../API_URL/API_URL'


export default async (arrayData = false) => {
    try {
        const res= await axios.get(`${API_URL}/getallprofile`)
        console.log(res);

        const data = []

        for (var i = 0; i < res.data.length ; i++){
            var row = null
            if(arrayData) {
                row = [
                    res.data[i].id,
                    res.data[i].username,
                    res.data[i].name,
                    res.data[i].dateofbirth,
                    res.data[i].gender,
                    res.data[i].phonenumber,
                    res.data[i].avatar
                ]
            } else {
                row = {
                    id: res.data[i].id,
                    username: res.data[i].username,
                    name: res.data[i].name,
                    dateofbirth: res.data[i].dateofbirth,
                    gender: res.data[i].gender,
                    phonenumber: res.data[i].phonenumber,
                    avatar: res.data[i].avatar
                }
            }
            data.push(row)
        }
        console.log(data[0].username);
        console.log(data);
        
        // return data;
        
        // try {
        //     const res2 = await axios.get(`${API_URL}/users/${data[0].username}`)
        //     console.log(res2);
            
        //     var row2 = {
        //         email: res2.data[0].email
        //     }

        // } catch (e) {
        //     console.log(e);
            
        // }
        // data.push(row2)
        // console.log(data);
        
        return data;
        
    } catch (e) {
        console.log(e);
        
    }
}