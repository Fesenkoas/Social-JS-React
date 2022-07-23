import * as axios from "axios";


const instance = axios.create(
    {
        withCredentials:true,
        baseURL:'https://social-network.samuraijs.com/api/1.0/',
        headers:{
            "API-KEY":"e6c298d2-d468-4ac0-a9d1-f103800c1b8a"
        }
    }
);
export const userAPI ={
   getUsers (currentPage =1,pageSize =5){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response=>response.data)
     }
}
export const followAPI ={
    getFollow(id){return instance.post(`follow/${id}`).then(response=>response.data)},

    getUnFollow(id){return instance.delete(`follow/${id}`).then(response=>response.data)}
}
