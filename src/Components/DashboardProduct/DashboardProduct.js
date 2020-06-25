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
    filterName: "",
    filterReference: "",
    filterColor: "",

    search: "default",
    searchName: "default", searchColor: "default", searchReference: "default"
  });
  const getProductState = useSelector((state) => state.getProductState);
  const getUserDataState = useSelector((state) => state.getUserDataState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductAPi());
    dispatch(getUserDataApi());
  }, [dispatch]);

  function handleChange(event) {


    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  }

  function handlechangefilter(event, data) {
    if (data.value === "name")
      setState((prevState) => ({ ...prevState, filterName: data.value }));
    if (data.value === "color")
      setState((prevState) => ({ ...prevState, filterColor: data.value }));
    if (data.value === "reference")
      setState((prevState) => ({ ...prevState, filterReference: data.value }));
  }

  function HandleSearch(event) {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
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

  return (
    <div className="ui container">
      <Filter handlechangefilter={handlechangefilter} />

      <div class="ui input"><input type="text" placeholder="SEARCH NAME" name="searchName" onChange={(event) => HandleSearch(event)} /></div>
      <div class="ui input"><input type="text" placeholder="search by reference" name="searchReference" onChange={(event) => HandleSearch(event)} /></div>
      <div class="ui input"><input type="text" placeholder="SEARCH Color" name="searchColor" onChange={(event) => HandleSearch(event)} /></div>

      <div className="table-product">
        <Table celled selectable unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell>nom</Table.HeaderCell>
              <Table.HeaderCell>reference</Table.HeaderCell>
              <Table.HeaderCell>couleur</Table.HeaderCell>
              <Table.HeaderCell>quantite</Table.HeaderCell>
              <Table.HeaderCell>phase</Table.HeaderCell>
              <Table.HeaderCell>mesures</Table.HeaderCell>
              <Table.HeaderCell>marque</Table.HeaderCell>
              <Table.HeaderCell>type</Table.HeaderCell>
              {/* <Table.HeaderCell >prototype ou production</Table.HeaderCell> */}
              <Table.HeaderCell>collection</Table.HeaderCell>
              <Table.HeaderCell>locallisation</Table.HeaderCell>
              <Table.HeaderCell>carton</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>
                <button
                  className="ui button"
                  name="add Product"
                  onClick={addProduct}
                >
                  p
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


          {getProductState.filter(

            (state.filterName === "name") ?
              el => el.name.includes(state.searchName.toLowerCase())

              :
              el => el
          ).filter(

            (state.filterColor === "color") ?
              el => el.color === state.searchColor.toLowerCase()
              :
              el => el

          ).filter(

            (state.filterReference === "reference") ?
              el => el.reference === state.searchReference.toLowerCase()
              :
              el => el

          ).map((el =>
            <DashboardProductTable data={el} />))
          }

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
