import axios from 'axios'
import { dataHistory } from '../actions/HistoryAction'


//history //
export function getHistoryFromApi() {
    return (dispatch) => {
        axios.get("http://localhost:4000/history").then(response => {
            dispatch(dataHistory(response.data))
        })
    }
}
//post history
export function PostHistoryFromApi(data) {
    console.log(data)
    return () => {
        axios.post("http://localhost:4000/history",data)
    }
}

