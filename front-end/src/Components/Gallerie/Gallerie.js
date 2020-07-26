import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductAPi } from "../../api/ApiProduct"
import "./Gallerie.css"
const Gallerie=()=>{

    const getProductState = useSelector((state) => state.getProductState);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductAPi());
        
      }, [dispatch]);
    
    return(
        <div className="gallerieCover">
            
        {getProductState.map(el=>
        <div>
            <h1>{el.name}</h1>
        <img className="gallerie" src={"http://localhost:5000/" + el.image} />
        </div>)}
        </div>
    )
}

export default Gallerie