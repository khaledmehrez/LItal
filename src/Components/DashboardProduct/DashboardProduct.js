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
import FilterByInput from "./filterByInput";
import FilterBySlide from "./filterBySlide";
import filterByDropdown from "./filterByDropdown";

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
    filterName: "",
    filterColor: "",
    filterReference: "",
    filterQuantity: "",
    filterMarque: "",
    filterCarton: "",
    filterPhase:"",
    SearchPhase:"",
    SearchCarton: "",
    SearchMarque: "",
    SearchName: "",
    SearchColor: "",
    SearchReference: "",
    SearchQuantity: "",
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

  //detect filter by selector
  function handlechangefilter(e) {
    const data = e.target.value;
    const n = e.target.name;
    if (e.target.name === "name") {
      setState((prevState) => ({ ...prevState, filterName: n }));
      setState((prevState) => ({ ...prevState, SearchName: data }));
    }
    if (e.target.name === "reference") {
      setState((prevState) => ({ ...prevState, filterReference: n }));
      setState((prevState) => ({ ...prevState, SearchReference: data }));
    }
    if (e.target.name === "marque") {
      setState((prevState) => ({ ...prevState, filterMarque: n }));
      setState((prevState) => ({ ...prevState, SearchMarque: data }));
    }
    if (e.target.name === "quantity") {
      console.log(data);
      setState((prevState) => ({ ...prevState, filterQuantity: n }));
      setState((prevState) => ({ ...prevState, SearchQuantity: data }));
    }
    if (e.target.name === "carton") {
      setState((prevState) => ({ ...prevState, filterCarton: n }));
      setState((prevState) => ({ ...prevState, SearchCarton: data }));
    }
    //   if(data.value==="color")
    //   setState((prevState) => ({ ...prevState, filterColor: data.value }));
    //   if(data.value==="reference")
    //   setState((prevState) => ({ ...prevState, filterReference: data.value }));
    //   if(data.value==="quantity")
    //   setState((prevState) => ({ ...prevState, filterQuantity : data.value }));
  }
  //return color to default
  function colorDefault(e, bool) {
    console.log(e.target.name);
    console.log(bool);
    if (bool === true) {
      if (e.target.name === "name") {
        setState((prevState) => ({ ...prevState, filterName: "" }));
        setState((prevState) => ({ ...prevState, SearchName: "" }));
      }

      if (e.target.name === "reference") {
        setState((prevState) => ({ ...prevState, filterReference: "" }));
        setState((prevState) => ({ ...prevState, SearchReference: "" }));
      }
      if (e.target.name === "marque") {
        setState((prevState) => ({ ...prevState, filterMarque: "" }));
        setState((prevState) => ({ ...prevState, SearchMarque: "" }));
      }
    }
  }

  // function HandleSearch(event) {
  //   const data = event.target.value;
  //   const n=event.target.name
  //   setState((prevState) => ({ ...prevState, [n]: data }));
  // }


  //search from dropdown
  function handlechangeDropdownFilter (event,val){
    if (val.name === "phase") {
      setState((prevState) => ({ ...prevState, filterPhase: val.name }));
      setState((prevState) => ({ ...prevState, SearchPhase: val.value }));
    }
    console.log(state)
  }

  // role of user
  const name = { ...getUserDataState[0] }.firstName;
  const role = { ...getUserDataState[0] }.role;
  // add product
  function addProduct(e) {
    dispatch(PostProductAPi(state));
    const nameAction = "add Product";

    const date = new Date().toLocaleString();
    const nameProduct = state.name;
    const objHistory = { name, role, nameAction, date, nameProduct };
    console.log(objHistory);
    dispatch(PostHistoryFromApi(objHistory));
  }
  console.log(state);
  return (
    <div className="">
      {/* <Filter handlechangefilter={handlechangefilter} />*/}
      {/* {state.filter != "default" && state.filter != "new" ? (
        <div class="ui input">
          <input
            type="text"
            placeholder={state.filter}
            onChange={(event) => HandleSearch(event)}
          />
        </div>
      ) : null} */}
    <div className="filter-input">
      <FilterByInput
        Inputname={"name"}
        handlechangefilter={handlechangefilter}
        colorDefault={colorDefault}
      />
      <FilterByInput
        Inputname={"reference"}
        handlechangefilter={handlechangefilter}
        colorDefault={colorDefault}
      />
      <FilterByInput
        Inputname={"marque"}
        handlechangefilter={handlechangefilter}
        colorDefault={colorDefault}
      />
      </div>
      <FilterBySlide
        handlechangefilter={handlechangefilter}
        Inputname={"quantity"}
        getProductState={getProductState}
        attribut={"quantity"}
      />
      <FilterBySlide
        handlechangefilter={handlechangefilter}
        Inputname={"carton"}
        getProductState={getProductState}
        attribut={"carton"}
      />
      
      <Filter
        dataOptions={[
          { key: "1", value: "production", text: "Production" },
          { key: "2", value: "prototype", text: "Prototype" },
        ]}
        Inputname={"phase"}
        handlechangeDropdownFilter={handlechangeDropdownFilter}
      />

      <div className="table-product">
        <table class="ui celled table">
          <thead class="">
            <tr>
              <th class=""></th>
              <th class="header-array">Nom</th>
              <th class="header-array">Référence</th>
              <th class="header-array">Couleur</th>
              <th class="header-array">Quantité</th>
              <th class="header-array">Phase</th>
              <th class="header-array">Mesure</th>
              <th class="header-array">Marque</th>
              <th class="header-array">Type</th>

              <th class="header-array">Collection</th>
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
          {getProductState
            .filter(
              state.filterName === "name" && state.SearchName !== ""
                ? (el) => el.name.includes(state.SearchName)
                : (el) => el
            )
            .filter(
              state.filterMarque === "marque" && state.SearchMarque !== ""
                ? (el) => el.marque.includes(state.SearchMarque)
                : (el) => el
            )
            .filter(
              state.filterReference === "reference" &&
                state.SearchReference !== ""
                ? (el) => el.reference === state.SearchReference
                : (el) => el
            )
            .filter(
              state.filterQuantity === "quantity" && state.SearchQuantity !== ""
                ? (el) => el.quantity === state.SearchQuantity
                : (el) => el
            )
            .filter(
              state.filterCarton === "carton" && state.SearchCarton !== ""
                ? (el) => el.carton === state.SearchCarton
                : (el) => el
            ).filter(
              state.filterPhase === "phase" && state.SearchPhase !== ""
                ? (el) => el.phase === state.SearchPhase
                : (el) => el
            )
            .map((el) => (
              <DashboardProductTable
                colorreference={
                  state.filterReference === "reference" ? "red" : "black"
                }
                colorname={state.filterName === "name" ? "yellow" : "white"}
                colormarque={state.filterMarque === "marque" ? "red" : "black"}
                data={el}
              />
            ))
            .reverse()}

          <tfoot class="">
            <tr class="">
              <th colspan="12" class="">
                <div class="ui pagination right floated menu">
                  <a class="icon item">
                    <i aria-hidden="true" class="chevron left icon"></i>
                  </a>
                  <a class="item">1</a>
                  <a class="item">2</a>
                  <a class="item">3</a>
                  <a class="item">4</a>
                  <a class="icon item">
                    <i aria-hidden="true" class="chevron right icon"></i>
                  </a>
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
