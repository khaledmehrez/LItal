import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Icon, Label, Menu, Table, Modal } from 'semantic-ui-react'
import { deleteProductFromApi, patchProductToApi } from "../../api/ApiProduct";


const DashboardProductTable = (props) => {

  const { data } = props;
  const dispatch = useDispatch()
  function deleteProduct(i) {

    dispatch(deleteProductFromApi(i))

  }

  const [state, setState] = useState({ name: props.data.name, reference: props.data.reference, color: props.data.color, quantity: props.data.quantity, phase: props.data.phase, dimension: props.data.dimension, marque: props.data.marque, type: props.data.type, collection: props.data.collection, locallisation: props.data.locallisation, carton: props.data.carton });
  function handleChange(event) {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });

  }



  function editProduct(i, name, reference, color, quantity, phase, dimension, marque, type, collection, locallisation, carton) {

    dispatch(patchProductToApi(i, name, reference, color, quantity, phase, dimension, marque, type, collection, locallisation, carton))

  }

  return (

    <Table.Body>
      <Table.Row>



        <Table.Cell>  <button name="suppression" className='btn-trash ui button' onClick={() => deleteProduct(data.id)}>d</button>

          < Modal trigger={< button button className="btn-sign ui button" > e</ button>} closeIcon >
            <Modal.Content >

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
              <button type="submit"  name="modification" onClick={() => editProduct(data.id, state.name, state.reference, state.color, state.quantity, state.phase, state.dimension, state.marque, state.type, state.collection, state.locallisation, state.carton)
              }>ok</button>


            </Modal.Content>

          </Modal >



        </Table.Cell>






        <Table.Cell warning >
          <Label style={{ color: props.colorname }} ribbon>{data.name}</Label>
        </Table.Cell >
        <Table.Cell style={{ color: props.colorreference }}>{data.reference}</Table.Cell>
        <Table.Cell style={{ color: props.colorcolor }}>{data.color}</Table.Cell>
        <Table.Cell>
          {data.quantity}
        </Table.Cell>
        <Table.Cell>{data.phase}</Table.Cell>
        <Table.Cell>{data.dimension}</Table.Cell>

        <Table.Cell>{data.marque}</Table.Cell>
        <Table.Cell>{data.type}</Table.Cell>
        <Table.Cell>{data.collection}</Table.Cell>
        <Table.Cell>{data.locallisation}</Table.Cell>
        <Table.Cell>{data.carton}</Table.Cell>





      </Table.Row>

    </Table.Body>

  );
}


export default DashboardProductTable;
