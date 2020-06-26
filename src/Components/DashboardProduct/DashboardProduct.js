import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon, Label, Menu, Table } from "semantic-ui-react";

import { connect } from "react-redux";
import { getProductAPi, PostProductAPi } from "../../api/ApiProduct";
import { getUserDataApi } from "../../api/ApiUsers";
import { PostHistoryFromApi } from "../../api/ApiHistory";
import DashboardProductTable from "./DashboardProductTable";
import { Container } from "semantic-ui-react";
import "./DashboardProduct.css";
import { getProduct } from "../../actions";
import Filter from "./filter";

const DashboardProduct = () => {
  const [state, setState] = useState({
    name: "",
    reference: "",
    color: "",
    quantity: null,
    phase: "",
    dimension: "",
    marque: "",
    type: "",
    collection: "",
    locallisation: "",
    carton: "",
    filterName:"",
    filterColor:"",
    filterReference:"",
    filterQuantity:"",
    SearchName:"",
    SearchColor:"",
    SearchReference:"",
    SearchQuantity:""
    
  });
  const getProductState = useSelector((state) => state.getProductState);
  const getUserDataState = useSelector((state) => state.getUserDataState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductAPi());
    dispatch(getUserDataApi());
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
    if(data.value==="name")
    setState((prevState) => ({ ...prevState, filterName: data.value }));
    if(data.value==="color")
    setState((prevState) => ({ ...prevState, filterColor: data.value }));
    if(data.value==="reference")
    setState((prevState) => ({ ...prevState, filterReference: data.value }));
    if(data.value==="quantity")
    setState((prevState) => ({ ...prevState, filterQuantity : data.value }));
  }

  function HandleSearch(event) {
    const data = event.target.value;
    const n=event.target.name
    setState((prevState) => ({ ...prevState, [n]: data }));
  }
// role of user
  const name = { ...getUserDataState[0] }.firstName;
  // add product
  function addProduct(e) {
    dispatch(PostProductAPi(state));
    const nameAction = e.target.name;
    const date = new Date();
    const nameProduct = state.name;
    const objHistory = { name, nameAction, date, nameProduct };
    console.log(objHistory);
    dispatch(PostHistoryFromApi(objHistory));
  }
  console.log(state)
  return (
    <div className="ui container">
      <Filter handlechangefilter={handlechangefilter} />
      {/* {state.filter != "default" && state.filter != "new" ? (
        <div class="ui input">
          <input
            type="text"
            placeholder={state.filter}
            onChange={(event) => HandleSearch(event)}
          />
        </div>
      ) : null} */}
      
        <div class="ui input">
          <input
            type="text"
            placeholder="search by name"
             name="SearchName"
             key="name"
            onChange={(event) => HandleSearch(event)}
          />
        </div>
        <div class="ui input">
          <input
            type="text"
            placeholder="search by color"
             name="SearchColor"
             key="color"
            onChange={(event) => HandleSearch(event)}
          />
        </div>
        <div class="ui input">
          <input
            type="text"
            placeholder="search by referece"
             name="SearchReference"
             key="reference"
            onChange={(event) => HandleSearch(event)}
          />
        </div>
        <div class="ui input">
          <input
            type="text"
            placeholder="quantity"
             name="SearchQuantity"
             key="quantity"
            onChange={(event) => HandleSearch(event)}
          />
        </div>


      <div className="table-product">
        <Table celled selectable unstackable>
          <Table.Header>
            <Table.Row>
            <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell>Nom</Table.HeaderCell>
              <Table.HeaderCell>Référence</Table.HeaderCell>
              <Table.HeaderCell>Couleur</Table.HeaderCell>
              <Table.HeaderCell>Quantité</Table.HeaderCell>
              <Table.HeaderCell>Phase</Table.HeaderCell>
              <Table.HeaderCell>Mesure</Table.HeaderCell>
              <Table.HeaderCell>Marque</Table.HeaderCell>
              <Table.HeaderCell>Type</Table.HeaderCell>
              {/* <Table.HeaderCell >prototype ou production</Table.HeaderCell> */}
              <Table.HeaderCell>Collection</Table.HeaderCell>
              <Table.HeaderCell>Locallisation</Table.HeaderCell>
              <Table.HeaderCell>Carton</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>
                <button
                  className="ui button"
                  name="add Product"
                  onClick={addProduct}
                >
                   Ajout Article
                </button>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <div class="ui mini icon input">
                  <input
                    type="text"
                    placeholder="Search..."
                    name="name"
                    onChange={handleChange}
                  />
                </div>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <div class="ui mini icon input">
                  <input
                    type="text"
                    placeholder="Search..."
                    name="reference"
                    onChange={handleChange}
                  />
                </div>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <div class="ui mini icon input">
                  <input
                    type="text"
                    placeholder="Search..."
                    name="color"
                    onChange={handleChange}
                  />
                </div>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <div class="ui mini icon input">
                  <input
                    type="text"
                    placeholder="Search..."
                    name="quantity"
                    onChange={handleChange}
                  />
                </div>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <div class="ui mini icon input">
                  <input
                    type="text"
                    placeholder="Search..."
                    name="phase"
                    onChange={handleChange}
                  />
                </div>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <div class="ui mini icon input">
                  <input
                    type="text"
                    placeholder="Search..."
                    name="dimension"
                    onChange={handleChange}
                  />
                </div>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <div class="ui mini icon input">
                  <input
                    type="text"
                    placeholder="Search..."
                    name="marque"
                    onChange={handleChange}
                  />
                </div>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <div class="ui mini icon input">
                  <input
                    type="text"
                    placeholder="Search..."
                    name="type"
                    onChange={handleChange}
                  />
                </div>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <div class="ui mini icon input">
                  <input
                    type="text"
                    placeholder="Search..."
                    name="collection"
                    onChange={handleChange}
                  />
                </div>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <div class="ui mini icon input">
                  <input
                    type="text"
                    placeholder="Search..."
                    name="locallisation"
                    onChange={handleChange}
                  />
                </div>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <div class="ui mini icon input">
                  <input
                    type="text"
                    placeholder="Search..."
                    name="carton"
                    onChange={handleChange}
                  />
                </div>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          {/* {state.filter === "default"
            ? getProductState.map((el) => <DashboardProductTable data={el} />)
            : null}
          {state.filter === "new"
            ? getProductState
                .map((el) => <DashboardProductTable data={el} />)
                .reverse()
            : null}

          {state.filter === "name"
            ? getProductState
                .filter((el) => el.name.includes(state.search))
                .map((el) => (
                  <DashboardProductTable colorname={"red"} data={el} />
                ))
                .reverse()
            : null}

          {state.filter === "color"
            ? getProductState
                .filter((el) => el.color === state.search)
                .map((el) => (
                  <DashboardProductTable colorcolor={el.color} data={el} />
                ))
                .reverse()
            : null}

          {state.filter === "reference"
            ? getProductState
                .filter((el) => el.reference === state.search)
                .map((el) => (
                  <DashboardProductTable colorreference={"red"} data={el} />
                ))
                .reverse()
            : null} */}
            {getProductState.filter(
              state.filterName==="name" && state.SearchName!==""?el=>el.name.includes(state.SearchName):el=>el
            ).filter(
              state.filterColor==="color" && state.SearchColor!==""?el=>el.color.includes(state.SearchColor):el=>el)
              .filter(
               state.filterReference==="reference" && state.SearchReference!==""?el=>el.reference===state.SearchReference:el=>el
              ).filter(
                state.filterQuantity==="quantity" && state.SearchQuantity!==""?el=>el.quantity===state.SearchQuantity:el=>el
               )
              .map((el) => (
                <DashboardProductTable colorreference={"red"} data={el} />
              ))
              .reverse()}

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="6">
                <Menu floated="right" pagination>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron left" />
                  </Menu.Item>
                  <Menu.Item as="a">1</Menu.Item>
                  <Menu.Item as="a">2</Menu.Item>
                  <Menu.Item as="a">3</Menu.Item>
                  <Menu.Item as="a">4</Menu.Item>
                  <Menu.Item as="a">5</Menu.Item>
                  <Menu.Item as="a">6</Menu.Item>
                  <Menu.Item as="a">7</Menu.Item>
                  <Menu.Item as="a">8</Menu.Item>
                  <Menu.Item as="a">9</Menu.Item>
                  <Menu.Item as="a">10</Menu.Item>
                  <Menu.Item as="a">11</Menu.Item>
                  <Menu.Item as="a">12</Menu.Item>
                  <Menu.Item as="a">13</Menu.Item>

                  <Menu.Item as="a" icon>
                    <Icon name="chevron right" />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    </div>
  );
};

export default DashboardProduct;