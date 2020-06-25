

//data user//
export function userdata(payload) {
    //console.log(payload)
    return {
        type: "userdata",
        payload
    }
}
//get session
export function sessionAction(payload) {
    
    return {
        type: "session",
        payload
    }
}

//get user session

export function userDataAction(payload) {
    
    return {
        type: "user-data",
        payload
    }
}