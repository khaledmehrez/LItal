import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { connect } from "react-redux";
import { getProductAPi,PostProductAPi } from "../../api/ApiProduct";
import DashboardProductTable from "./DashboardProductTable";

import "./DashboardProduct.css";
import { getProduct } from "../../actions";
import FilterByDate from "./filterByDate";

const DashboardProduct = () => {
  const [state, setState] = useState({ name: "", reference: "",color:"",quantity:null,phase:"",dimension:"",date:"new" });
  const getProductState = useSelector((state) => state.getProductState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductAPi());
  }, [dispatch]);

  function handleChange(event) {
    const { name, value } = event.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  }
  function handlechangeDate(event,data){
    
    setState(prevState => ({ ...prevState, date: data.value }))
  }
  
  
  
  
  
  
   
 
  
  function addProduct (){
    dispatch(PostProductAPi(state))
  }

  return (
    <div>
      
       <FilterByDate handlechangeDate={handlechangeDate} />
      <table class="ui celled table">
        <thead class="">
          <tr class="">
            <th class="">Header</th>
            <th class="">Header</th>
            <th class="">Header</th>
            <th class="">Header</th>
            <th class="">Header</th>
            <th class="">Header</th>
          </tr>
          <tr class="">
            <th class="">
              
                <input type="text" placeholder="Search..." name="name" onChange={handleChange} />
              
            </th>
            <th class="">
              
                <input type="text" placeholder="Search..." name="reference" onChange={handleChange} />
             
            </th>
            <th class="">
              
                <input type="text" placeholder="Search..." name="color" onChange={handleChange}/>
              
            </th>
            <th class="">
              
                <input type="text" placeholder="Search..." name="quantity" onChange={handleChange} />
              
            </th>
            <th class="">
              
                <input type="text" placeholder="Search..." name="phase" onChange={handleChange} />
              
            </th>
            <th class="">
              
                <input type="text" placeholder="Search..." name="dimension" onChange={handleChange} />
              
            </th>
          </tr>
        </thead>
        
          
           {state.date==="new"?
          getProductState.map((el) => (
            <DashboardProductTable data={el} />
          )):getProductState.map((el) => (
            <DashboardProductTable data={el} />
          )).reverse()}
        
        <tfoot class="">
          <tr class="">
            <th colspan="6" class="">
              <div class="ui pagination right floated menu">
                <a class="icon item">
                  <i aria-hidden="true" class="chevron left icon"></i>
                </a>
                <a class="item">1</a>
                <a class="item">2</a>
                <a class="item">3</a>
                <a class="item">4</a>
                <a class="item">5</a>
                <a class="item">6</a>
                <a class="icon item">
                  <i aria-hidden="true" class="chevron right icon"></i>
                </a>
              </div>
            </th>
          </tr>
        </tfoot>
      </table>
      <button class="ui button" onClick={addProduct}>Click Here</button>
    </div>
  );
};

export default DashboardProduct;
