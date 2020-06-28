import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./filterByInput.css"


const FilterByInput=(props)=>{
    const [state, setState] = useState({togle:false})

    function togleclick(){
      if(state.togle===false)
      setState({
        ...state,
        togle: true,
      });
      else {
        setState({
          ...state,
          togle: false,
        });
      }
    }
    const {Inputname}=props
return(
    <div class="ui input">
        <input type="checkbox" id="scales" name={Inputname} onClick={(e,bool)=>{togleclick();props.colorDefault(e,state.togle)}}
         />
          <label for="scales">{Inputname}</label>
          {state.togle?<input
            type="text"
            placeholder={`Searcb By ${Inputname}`}
             name={Inputname}
             
            onChange={props.handlechangefilter}
          />:null}
        </div>
)

}
export default FilterByInput;