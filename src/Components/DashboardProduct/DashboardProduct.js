import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

import { connect } from "react-redux";
import { getProductAPi, PostProductAPi } from "../../api/ApiProduct";
import DashboardProductTable from "./DashboardProductTable";
import { Container } from 'semantic-ui-react'
import "./DashboardProduct.css";
import { getProduct } from "../../actions";
import Filter from "./filter";


const DashboardProduct = () => {
  const [state, setState] = useState({ name: "", reference: "", color: "", quantity: null, phase: "", dimension: "", marque: "", type: "", collection: "", locallisation: "", carton: "", filter: "default", search: "default" });
  const getProductState = useSelector((state) => state.getProductState);



  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductAPi());
  }, [dispatch]);

  function handleChange(event) {
    // const { name, value } = event.target;
    // setState(prevState => ({ ...prevState, [name]: value }));
    // console.log()

    setState({
      ...state,
      [event.target.name]: event.target.value,
    });

  }


  function handlechangefilter(event, data) {

    setState(prevState => ({ ...prevState, filter: data.value }))

  }


  function HandleSearch(event) {
    const data = event.target.value
    setState(prevState => ({ ...prevState, search: data }))
  }





  function addProduct() {
    dispatch(PostProductAPi(state))
  }

  return (

    <div className="ui container" >

      <Filter handlechangefilter={handlechangefilter} />
      {(state.filter != "default" && state.filter != "new") ? <div class="ui input"><input type="text" placeholder={state.filter} onChange={(event) => HandleSearch(event)} /></div> : null}
      <br /> <button onClick={addProduct}>p</button>
      <div className="table-product">
      <Table
        celled
        selectable
        unstackable
        



      >
        <Table.Header>
          <Table.Row >
            <Table.HeaderCell ></Table.HeaderCell>
            <Table.HeaderCell >nom</Table.HeaderCell>
            <Table.HeaderCell>reference</Table.HeaderCell>
            <Table.HeaderCell>couleur</Table.HeaderCell>
            <Table.HeaderCell>quantite</Table.HeaderCell>
            <Table.HeaderCell>phase</Table.HeaderCell>
            <Table.HeaderCell>mesures</Table.HeaderCell>
            <Table.HeaderCell >marque</Table.HeaderCell>
            <Table.HeaderCell >type</Table.HeaderCell>
            {/* <Table.HeaderCell >prototype ou production</Table.HeaderCell> */}
            <Table.HeaderCell >collection</Table.HeaderCell>
            <Table.HeaderCell >locallisation</Table.HeaderCell>
            <Table.HeaderCell >carton</Table.HeaderCell>

          </Table.Row>
         
        </Table.Header>

        {state.filter === "default" ? getProductState.map((el) => (
          <DashboardProductTable data={el} />
        )) : null}
        {state.filter === "new" ?
          getProductState.map((el) => (
            <DashboardProductTable data={el} />
          )).reverse() : null}

        {state.filter === "name" ?
          getProductState.filter(el => el.name.includes(state.search)).map((el) => (
            <DashboardProductTable colorname={"red"} data={el} />
          )).reverse() : null}

        {state.filter === "color" ?
          getProductState.filter(el => el.color === state.search).map((el) => (
            <DashboardProductTable colorcolor={el.color} data={el} />
          )).reverse() : null}

        {state.filter === "reference" ?
          getProductState.filter(el => el.reference === state.search).map((el) => (
            <DashboardProductTable colorreference={"red"} data={el} />
          )).reverse() : null}



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
                <Menu.Item as='a'>5</Menu.Item>
                <Menu.Item as='a'>6</Menu.Item>
                <Menu.Item as='a'>7</Menu.Item>
                <Menu.Item as='a'>8</Menu.Item>
                <Menu.Item as='a'>9</Menu.Item>
                <Menu.Item as='a'>10</Menu.Item>
                <Menu.Item as='a'>11</Menu.Item>
                <Menu.Item as='a'>12</Menu.Item>
                <Menu.Item as='a'>13</Menu.Item>



                <Menu.Item as='a' icon>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
      </div>
      <button></button>
    </div>
  );
};

export default DashboardProduct;
