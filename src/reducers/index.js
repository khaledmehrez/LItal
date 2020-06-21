import { combineReducers } from "redux";

const initialstate=[]
//**************************TEST *****************************************************/
const testreducer=(state=initialstate,action)=>{
  
    if(action.type==="test"){
    return action.payload
    }
    else return state
}

//**************************kHALED *****************************************************/
const getProductreducer=(state=initialstate,action)=>{
  
    if(action.type==="get-product"){
    return action.payload
    }
    else return state
}













//**************************TAKWA *****************************************************/















//**************************FERYEL *****************************************************/









//**************************COMBINE REDUCER *****************************************************/
export default combineReducers({
    testin:testreducer,
    getProductState:getProductreducer,
  });