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














//**************************TAKWA *****************************************************/















//**************************FERYEL *****************************************************/









//**************************COMBINE REDUCER *****************************************************/
export default combineReducers({
    testin:testreducer,
  });