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
    <div className="">
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
      <table class="ui celled table">
      <thead class="">
      <tr>
            <th class=""></th>
              <th  class="header-array">Nom</th>
              <th  class="header-array">Référence</th>
              <th  class="header-array">Couleur</th>
              <th class="header-array">Quantité</th>
              <th class="header-array">Phase</th>
              <th class="header-array">Mesure</th>
              <th class="header-array">Marque</th>
              <th class="header-array">Type</th>
             
              <th  class="header-array">Collection</th>
              <th class="header-array">Locallisation</th>
              <th class="header-array">Carton</th>
            </tr>
            <tr>
              <th>
                <button
                  className="ajout-product  green basic button"
                  name="add Product"
                  onClick={addProduct}
                >
                  <p>Ajout </p> 
                </button>
              </th>
              <th>
                <div class="ui mini icon input">
                  <input
                    type="text"
                    placeholder="Search..."
                    name="name"
                    onChange={handleChange}
                  />
                </div>
              </th>
              <th>
                <div class="ui mini icon input">
                  <input
                    type="text"
                    placeholder="Search..."
                    name="reference"
                    onChange={handleChange}
                  />
                </div>
              </th>
              <th>
                <div class="ui mini icon input">
                  <input
                    type="text"
                    placeholder="Search..."
                    name="color"
                    onChange={handleChange}
                  />
                </div>
              </th>
              <th>
                <div class="ui mini icon input">
                  <input
                    type="text"
                    placeholder="Search..."
                    name="quantity"
                    onChange={handleChange}
                  />
                </div>
              </th>
              <th>
                <div class="ui mini icon input">
                  <input
                    type="text"
                    placeholder="Search..."
                    name="phase"
                    onChange={handleChange}
                  />
                </div>
              </th>
              <th>
                <div class="ui mini icon input">
                  <input
                    type="text"
                    placeholder="Search..."
                    name="dimension"
                    onChange={handleChange}
                  />
                </div>
              </th>
              <th>
                <div class="ui mini icon input">
                  <input
                    type="text"
                    placeholder="Search..."
                    name="marque"
                    onChange={handleChange}
                  />
                </div>
              </th>
              <th>
                <div class="ui mini icon input">
                  <input
                    type="text"
                    placeholder="Search..."
                    name="type"
                    onChange={handleChange}
                  />
                </div>
              </th>
              <th>
                <div class="ui mini icon input">
                  <input
                    type="text"
                    placeholder="Search..."
                    name="collection"
                    onChange={handleChange}
                  />
                </div>
              </th>
              <th>
                <div class="ui mini icon input">
                  <input
                    type="text"
                    placeholder="Search..."
                    name="locallisation"
                    onChange={handleChange}
                  />
                </div>
              </th>
              <th>
                <div class="ui mini icon input">
                  <input
                    type="text"
                    placeholder="Search..."
                    name="carton"
                    onChange={handleChange}
                  />
                </div>
              </th>
            </tr>
            </thead>

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

<tfoot class="">
    <tr class="">
      <th colspan="12" class="">
        <div class="ui pagination right floated menu">
          <a class="icon item"><i aria-hidden="true" class="chevron left icon"></i></a>
          <a class="item">1</a>
          <a class="item">2</a>
          <a class="item">3</a>
          <a class="item">4</a>
          <a class="icon item"><i aria-hidden="true" class="chevron right icon"></i></a>
        </div>
      </th>
    </tr>
  </tfoot>

</table>
      </div>
    </div>
  );
};

export default DashboardProduct;