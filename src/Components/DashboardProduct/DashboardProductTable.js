import React, { Component } from "react";

const DashboardProductTable =(props)=> {
  
    const {data}=props;
    
    return (
      
      <tbody class="">
    <tr class="">
      <td class=""><div class="ui ribbon label">{data.name}</div></td>
      <td class="">{data.reference}</td>
      <td class="">{data.color}</td>
      <td class="">{data.quantity}</td>
      <td class="">{data.phase}</td>
      <td class="">{data.dimension}</td>
      
      
    </tr>
    </tbody>
  
    );
  }


export default DashboardProductTable;
