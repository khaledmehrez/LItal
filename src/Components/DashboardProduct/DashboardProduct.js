import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import { connect } from "react-redux";
import { getProductAPi,PostProductAPi } from "../../api/ApiProduct";
import DashboardProductTable from "./DashboardProductTable";
import { Container } from 'semantic-ui-react'
import "./DashboardProduct.css";
import { getProduct } from "../../actions";
import Filter from "./filter";


const DashboardProduct = () => {
  const [state, setState] = useState({ name: "", reference: "",color:"",quantity:null,phase:"",dimension:"",filter:"default",search:"default" });
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
   
    setState(prevState => ({ ...prevState, filter: data.value }))
    
  }
  
  
  function HandleSearch(event){
    const data=event.target.value
    setState(prevState => ({ ...prevState, search: data }))
  }
 
  
   
 
  
  function addProduct (){
    dispatch(PostProductAPi(state))
  }

  return (
    
    <div className="ui container" >
      
       <Filter handlechangeDate={handlechangeDate} />
      {(state.filter!="default" && state.filter!="new")? <div class="ui input"><input type="text" placeholder= {state.filter}  onChange={(event)=>HandleSearch(event)}/></div>:null}
       <Table
        celled
       selectable
       
       
       
       
       
       >
    <Table.Header>
      <Table.Row >
        <Table.HeaderCell >Header</Table.HeaderCell>
        <Table.HeaderCell>Header</Table.HeaderCell>
        <Table.HeaderCell>Header</Table.HeaderCell>
        <Table.HeaderCell>Header</Table.HeaderCell>
        <Table.HeaderCell>Header</Table.HeaderCell>
        <Table.HeaderCell>Header</Table.HeaderCell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell><input type="text" placeholder="Search..." name="name" onChange={handleChange} /></Table.HeaderCell>
        <Table.HeaderCell><input type="text" placeholder="Search..." name="name" onChange={handleChange} /></Table.HeaderCell>
        <Table.HeaderCell><input type="text" placeholder="Search..." name="name" onChange={handleChange} /></Table.HeaderCell>
        <Table.HeaderCell><input type="text" placeholder="Search..." name="name" onChange={handleChange} /></Table.HeaderCell>
        <Table.HeaderCell><input type="text" placeholder="Search..." name="name" onChange={handleChange} /></Table.HeaderCell>
        <Table.HeaderCell><input type="text" placeholder="Search..." name="name" onChange={handleChange} /></Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    
     {state.filter==="default"?getProductState.map((el) => (
            <DashboardProductTable data={el} />
          )):null}
    {state.filter==="new"?
          getProductState.map((el) => (
            <DashboardProductTable data={el} />
          )).reverse():null}

          {state.filter==="name"?
          getProductState.filter(el=>el.name.includes(state.search)).map((el) => (
            <DashboardProductTable colorname={"red"} data={el} />
          )).reverse():null}

{state.filter==="color"?
          getProductState.filter(el=>el.color===state.search).map((el) => (
            <DashboardProductTable colorcolor={el.color} data={el} />
          )).reverse():null}

{state.filter==="reference"?
          getProductState.filter(el=>el.reference===state.search).map((el) => (
            <DashboardProductTable colorreference={"red"} data={el} />
          )).reverse():null}



    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='6'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>

  </div>
  );
};

export default DashboardProduct;
