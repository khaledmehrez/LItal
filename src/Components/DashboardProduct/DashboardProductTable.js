import React, { Component } from "react";
import { Icon, Label, Menu, Table } from 'semantic-ui-react'



const DashboardProductTable =(props)=> {
  
    const {data}=props;
    
    return (
      
      <Table.Body>
      <Table.Row>
        <Table.Cell  warning >
          <Label style={{color:props.colorname}} ribbon>{data.name}</Label>
        </Table.Cell >
        <Table.Cell style={{color:props.colorreference}}>{data.reference}</Table.Cell>
        <Table.Cell style={{color:props.colorcolor}}>{data.color}</Table.Cell>
        <Table.Cell>
          {data.quantity}
        </Table.Cell>
        <Table.Cell>{data.phase}</Table.Cell>
        <Table.Cell>{data.dimension}</Table.Cell>
      </Table.Row>
      
    </Table.Body>
  
    );
  }


export default DashboardProductTable;
