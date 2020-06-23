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
            <td class="">{dataUsers.lastName}</td>
            <td class="">{dataUsers.email}</td>
            <td class="">{dataUsers.userName}</td>
            <td class="">{dataUsers.post}</td>
            <td class="">{dataUsers.password}</td>
            <td class="">
                <button className='btn-trash' onClick={() => deleteUsers(dataUsers.id)}>d</button>
                < Modal trigger={< button button className="btn-sign" > e</ button>} closeIcon >
                    <Modal.Content >

                        <center>
                            <h3>modifier moderateur </h3>

                            <div className="form-group">

                                <input id='firstName' type="text" placeholder={dataUsers.firstName} onChange={handleChange} />
                                <br />
                            </div>
                            <br />
                            <div className="form-group">
                                <input id='lastName' type="text" placeholder={dataUsers.lastName} onChange={handleChange} />
                                <br />
                            </div>
                            <br />
                            <div className="form-group">
                                <input id='userName' type="text" placeholder={dataUsers.userName} onChange={handleChange} />
                                <br />
                            </div>
                            <br />
                            <div className="form-group">
                                <input id='email' type="email" pattern=".+@(gmail\.com|yahoo\.fr)" placeholder={dataUsers.email} onChange={handleChange} />
                                <br />
                            </div>
                            <br />
                            <div className="form-group">

                                <input id='password' type="password" placeholder={dataUsers.password} maxLength="6" onChange={handleChange} />
                                <br />
                            </div>
                            <br />
                            <div className="form-group">

                                <input id='confirmationPassword' type="password" placeholder={dataUsers.post}maxLength="6"
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