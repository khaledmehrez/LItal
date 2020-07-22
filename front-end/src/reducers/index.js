import { combineReducers } from "redux";
import * as jwt_decode from 'jwt-decode'
const initialstate = []
//**************************TEST *****************************************************/
const testreducer = (state = initialstate, action) => {

    if (action.type === "test") {
        return action.payload
    }
    else return state
}

// get product reducer
const getProductreducer = (state = initialstate, action) => {

    if (action.type === "get-product") {
        return action.payload
    }
    else return state
}















//history//
const tabHistory = []

function historyReducer(state = tabHistory, action) {

    if (action.type === "affichageListOfHistory") {
        return action.payload
    }
    return state
}
//users//
const tabUsers = []
function usersReducer(state = tabUsers, action) {
    if (action.type === "userdata") {
        return action.payload;
    }
    return state;
};


//get user session
const tokenFromLocalStorage=localStorage.getItem("token")

const statSession=(tokenFromLocalStorage==="")?"guest":jwt_decode(tokenFromLocalStorage).data.role
const getUserReducer = (state = statSession, action) => {

    if (action.type === "session") {
        return action.payload
    }
    else return state
}


//get user data
const getUserDataReducer = (state = initialstate, action) => {

    if (action.type === "user-data") {
        return action.payload
    }
    else return state
}










//**************************FERYEL *****************************************************/









//**************************COMBINE REDUCER *****************************************************/
export default combineReducers({
    testin: testreducer,
    getProductState: getProductreducer,
    historyState: historyReducer,
    usersState: usersReducer,
    sessionState:getUserReducer,
    getUserDataState:getUserDataReducer

});