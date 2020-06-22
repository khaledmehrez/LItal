import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Modal } from 'semantic-ui-react'
import { postUsersToApi } from '../../api/ApiUsers';


function Register() {




    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        userName: '',
        post: '',
        password: ''

    });





    const handleChange = event => {

        setState({
            ...state,
            [event.target.id]: event.target.value,
        });
    };
    const dispatch = useDispatch()


    function postUsers() {

        dispatch(postUsersToApi(state))

    }



    return (
        < Modal trigger={< button button className="btn-sign" > ajout</ button>} closeIcon >

            <Modal.Content >

                <center>
                    <h3>ajout moderateur </h3>

                    <div className="form-group">

                        <input id='firstName' type="text" placeholder="firstName" onChange={handleChange} />
                        <br />


                    </div>
                    <br />
                    <div className="form-group">

                        <input id='lastName' type="text" placeholder="lastName" onChange={handleChange} />
                        <br />
                    </div>
                    <br />
                    <div className="form-group">

                        <input id='userName' type="text" placeholder="userName" onChange={handleChange} />
                        <br />
                    </div>
                    <br />

                    <div className="form-group">

                        <input id='email' type="email" pattern=".+@(gmail\.com|yahoo\.fr)" placeholder="Enter email" onChange={handleChange} />
                        <br />
                    </div>
                    <br />
                    <div className="form-group">

                        <input id='password' type="password" placeholder="Enter password" maxLength="6" onChange={handleChange} />
                        <br />
                    </div>
                    <br />
                    <div className="form-group">

                        <input id='confirmationPassword' type="password" placeholder="Confirmer password" maxLength="6"
                        />
                    </div>
                    <br />
                    <button type="submit" className="btn-sign-compte" onClick={postUsers
                    }>ok</button>


                </center>

            </Modal.Content>

        </Modal >
    )
}







export default Register




