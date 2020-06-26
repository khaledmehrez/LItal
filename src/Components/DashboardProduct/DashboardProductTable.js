import React, { useState, useEffect } from 'react'
import './dashboardProduct.css'
import { useDispatch, useSelector } from "react-redux";
import { Icon, Label, Menu, Table, Modal } from 'semantic-ui-react'
import { deleteProductFromApi ,patchProductToApi} from "../../api/ApiProduct";
import { PostHistoryFromApi } from "../../api/ApiHistory";
import { getUserDataApi } from "../../api/ApiUsers";
const DashboardProductTable = (props) => {

  const { data } = props;
  const getUserDataState = useSelector((state) => state.getUserDataState);
  const [state, setState] = useState({ name: props.data.name, reference: props.data.reference, color: props.data.color, quantity: props.data.quantity, phase: props.data.phase, dimension: props.data.dimension, marque: props.data.marque, type: props.data.type, collection: props.data.collection, locallisation: props.data.locallisation, carton: props.data.carton });
  const dispatch = useDispatch()
  useEffect(() => {
    
    dispatch(getUserDataApi());
  }, [dispatch]);
  //role of user
  const name = { ...getUserDataState[0] }.firstName;
  console.log(name)
  //delete product
  function deleteProduct(e) {
const i=e.target.value
    dispatch(deleteProductFromApi(i))
    const nameAction = e.target.name;
    const date = new Date();
    const nameProduct = state.name;
    const objHistory = { name, nameAction, date, nameProduct };
    console.log(objHistory);
    dispatch(PostHistoryFromApi(objHistory));

  }

  // const [state, setState] = useState({ name: "", reference: "", color: "", quantity: null, phase: "", dimension: "", marque: "", type: "", collection: "", locallisation: "", carton: "" });
  function handleChange(event) {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });

  }


//edit
  function editProduct(e) {
const i=e.target.value
    dispatch(patchProductToApi(i, state.name, state.reference, state.color, state.quantity, state.phase, state.dimension, state.marque, state.type, state.collection, state.locallisation, state.carton))
    const nameAction = e.target.name;
    const date = new Date();
    const nameProduct = state.name;
    const objHistory = { name, nameAction, date, nameProduct };
    console.log(objHistory);
    dispatch(PostHistoryFromApi(objHistory));
  }

  return (

    <tbody class="">
      <tr>



        <td>  <button className='ui red basic button btn-trash' name="delete product" value={data.id} onClick={deleteProduct}>X</button>

          < Modal trigger={< button button className="ui blue basic button btn-sign" ><i aria-hidden="true" class="edit icon"></i></ button>} closeIcon >
            <Modal.Content >
            <h3>Editer Article </h3>
              <br />
            <input type="text" value={state.name} name="name" onChange={handleChange} />
            <input type="text" value={state.reference} name="reference" onChange={handleChange} />
              <input type="text" value={state.color} name="color" onChange={handleChange} />
              <input type="text" value={state.quantity} name="quantity" onChange={handleChange} />
              <input type="text" value={state.phase} name="phase" onChange={handleChange} />
              <input type="text" value={state.dimension} name="dimension" onChange={handleChange} />
              <input type="text" value={state.marque} name="marque" onChange={handleChange} />
              <input type="text" value={state.type} name="type" onChange={handleChange} />
              <input type="text" value={state.collection} name="collection" onChange={handleChange} />
              <input type="text" value={state.locallisation} name="locallisation" onChange={handleChange} />
              <input type="text" value={state.carton} name="carton" onChange={handleChange} />
              <button type="submit" name="edit Product" value={data.id} onClick={editProduct
              }  class="ui positive button"
              >
                Sauvgarder
              </button>


            </Modal.Content>

          </Modal >



        </td>






        <td warning >
          <Label style={{ color: props.colorname }} ribbon>{data.name}</Label>
        </td >
        <td style={{ color: props.colorreference }}>{data.reference}</td>
        <td style={{ color: props.colorcolor }}>{data.color}</td>
        <td>
          {data.quantity}
        </td>
        <td>{data.phase}</td>
        <td>{data.dimension}</td>

        <td>{data.marque}</td>
        <td>{data.type}</td>
        <td>{data.collection}</td>
        <td>{data.locallisation}</td>
        <td>{data.carton}</td>





      </tr>

      </tbody>

  );
}


export default DashboardProductTable;
