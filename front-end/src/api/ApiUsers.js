import axios from 'axios'
import { userdata,sessionAction,userDataAction } from '../actions/UserAction'
import * as jwt_decode from 'jwt-decode'


//users//


export function getUserFromApi() {

    return (dispatch) => {
        axios.get("http://localhost:5000/users/getUsers").then(response => {
            dispatch(userdata(response.data))

        })

    }
}


export const postUsersToApi = (data) => {
    // console.log(el)
    window.location.reload();
    return () => {
        axios.post('http://localhost:5000/users/postUsers', data)
            .then(() => {
                alert('hu')
            })
    }
};
export function deleteUsersFromApi(i) {
    window.location.reload()
    return () => {
        axios.delete(`http://localhost:5000/users/deleteUsers/${i}`)
    }

}


export function patchUsersToApi(id, firstName, lastName, email, userName, post, password) {
    // console.log(el)
       
    return () => {
        axios.patch(`http://localhost:5000/users/patchUsers/${id}`, {


            firstName: firstName,
            lastName: lastName,
            email: email,
            userName: userName,
            post: post,
            password: password,


        }).then((res) =>
            console.log(res.data),

           
        );

    }

}
//post user login
export const postUsersloginApi = (data) => {
    // console.log(el)
    
    return (dispatch) => {
        axios.post('http://localhost:5000/users/login', data)
            .then((res) => {
                if (res.data.token!==undefined){
                    localStorage.setItem("token",res.data.token)
                    const tokenFromLocalStorage=localStorage.getItem("token")
                    const decodedToken=jwt_decode(tokenFromLocalStorage)
                    
                    dispatch(sessionAction(decodedToken.data.role))
                    window.location.reload()                }
               else{
                   alert(res.data)
               }

                
               
            })
    }
};
//get user session
export function getUserSession() {

    return (dispatch) => {
        axios.get("http://localhost:4000/session").then(response => {
            //dispatch(sessionAction(response.data))

        })

    }
}
//patch user session
export function patchUserSession(data) {
console.log(data)
    return () => {
        axios.patch("http://localhost:4000/session", {role:data})
        window.location.reload()
    }
}
//get user data
export function getUserDataApi() {

    return (dispatch) => {
        axios.get("http://localhost:4000/userData").then(response => {
            dispatch(userDataAction(response.data))

        })

    }
}
//put user data
export function PutUserSata(data) {
    
        return () => {
            axios.put("http://localhost:4000/userData/1",data )
    
        }
    }

