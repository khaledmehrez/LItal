import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { deleteUsersFromApi, patchUsersToApi } from '../../api/ApiUsers';
import { Modal } from 'semantic-ui-react'

const ArrayUsers = (props) => {
    const { dataUsers } = props
    const dispatch = useDispatch()
    function deleteUsers(i) {
        alert(i)
        dispatch(deleteUsersFromApi(i))

    }
    const [state, setState] = useState({
        firstName: dataUsers.firstName,
        lastName: dataUsers.lastName,
        email: dataUsers.email,
        userName: dataUsers.userName,
        post: dataUsers.post,
        password: dataUsers.password

    });
    const handleChange = event => {
        setState({
            ...state,
            [event.target.id]: event.target.value,
        });
    };
    function editUsers(i, firstName, lastName, email, userName, post, password) {

        dispatch(patchUsersToApi(i, firstName, lastName, email, userName, post, password))

    }

    return (
        <tr>
            <td class="">{dataUsers.firstName}</td>

            < Modal trigger={< button button className=" ui button btn-sign" >plus de detai</ button>} closeIcon >
                <Modal.Content >

                <p > Prénom:{dataUsers.lastName}</p>
                   <p>Email:{dataUsers.email} </p> 
                   <p>Identifiant:{dataUsers.userName}</p>
                   <p>Poste:{dataUsers.post}</p> 
                   <p>Mot de passe:{dataUsers.password}</p> 
                </Modal.Content>

            </Modal >




          

            <td class="">
                <button className='ui button btn-trash' onClick={() => deleteUsers(dataUsers.id)}>d</button>
                < Modal trigger={< button button className=" ui button btn-sign" > e</ button>} closeIcon >
                    <Modal.Content >

                        <center>
                            <h3>Modifier Modérateur  </h3>

                            <div className="form-group">

                                <input id='firstName' type="text" value={state.firstName} onChange={handleChange} />
                                <br />
                            </div>
                            <br />
                            <div className="form-group">
                                <input id='lastName' type="text" value={state.lastName} onChange={handleChange} />
                                <br />
                            </div>
                            <br />
                            <div className="form-group">
                                <input id='userName' type="text" value={state.userName} onChange={handleChange} />
                                <br />
                            </div>
                            <br />
                            <div className="form-group">
                                <input id='email' type="email" pattern=".+@(gmail\.com|yahoo\.fr)" value={state.email} onChange={handleChange} />
                                <br />
                            </div>
                            <br />
                            <div className="form-group">

                                <input id='password' type="password" value={state.password} maxLength="6" onChange={handleChange} />
                                <br />
                            </div>
                            <br />
                            <div className="form-group">

                                <input id='confirmationPassword' type="password" value={state.post} maxLength="6"
                                />
                            </div>
                            <br />
                            <button type="submit" className="btn-sign-compte" onClick={() => editUsers(dataUsers.id, state.firstName, state.lastName, state.email, state.userName, state.post, state.password)
                            }>ok</button>


                        </center>

                    </Modal.Content>

                </Modal >



            </td>

        </tr>

    )

}
export default ArrayUsers