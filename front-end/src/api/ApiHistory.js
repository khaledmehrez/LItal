import axios from 'axios'
import { dataHistory } from '../actions/HistoryAction'


//history //
export function getHistoryFromApi() {
    return (dispatch) => {
        axios.get("http://localhost:5000/history/getHistory").then(response => {
            dispatch(dataHistory(response.data))
        })
    }
}
//post history
export function PostHistoryFromApi(data) {
    console.log(data)
    return () => {
        axios.post("http://localhost:5000/history/postHistory",data)
    }
}

