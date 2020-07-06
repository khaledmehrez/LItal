import axios from 'axios'
import { userdata,sessionAction,userDataAction } from '../actions/UserAction'



//users//


export function getUserFromApi() {

    return (dispatch) => {
        axios.get("http://localhost:4000/users").then(response => {
            dispatch(userdata(response.data))

        })

    }
}


export const postUsersToApi = (data) => {
    // console.log(el)
    window.location.reload();
    return () => {
        axios.post('http://localhost:4000/users', data)
            .then(() => {
                alert('hu')
            })
    }
};
export function deleteUsersFromApi(i) {
    window.location.reload()
    return () => {
        axios.delete(`http://localhost:4000/users/${i}`)
    }

}


export function patchUsersToApi(id, firstName, lastName, email, userName, post, password) {
    // console.log(el)

    return () => {
        axios.patch(`http://localhost:4000/users/${id}`, {


            firstName: firstName,
            lastName: lastName,
            email: email,
            userName: userName,
            post: post,
            password: password,


        }).then((res) =>
            console.log(res.data),

            window.location.reload()
        );

    }

}
//get user session
export function getUserSession() {

    return (dispatch) => {
        axios.get("http://localhost:4000/session").then(response => {
            dispatch(sessionAction(response.data))

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

