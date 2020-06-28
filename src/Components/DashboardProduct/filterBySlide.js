import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./filterBySLide.css"


const FilterBySlide=(props)=>{
  
    const {Inputname}=props;
    const [slide, setSlide] = useState({rage:""})
    function handleChangeSlide(e){
        const targetValue=e.target.value
        setSlide({
            ...slide,
            rage:targetValue ,
          });
    }
    const {attribut}=props;
    const Tab=props.getProductState.map(el=>parseInt(el[attribut])).filter(el=>!Number.isNaN(el))
    
    const max=Math.max(...Tab)
    
return(

    <div className="field">
       <label for="myRange">{`${Inputname}: ${slide.rage}`}</label>
        
    <input type="range" min="1" max={max}  class="slider" id="myRange" name={Inputname} onChange={(e)=>{handleChangeSlide(e);props.handlechangefilter(e)}}/>
  </div>

)

}
export default FilterBySlide;