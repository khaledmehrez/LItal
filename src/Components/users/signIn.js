import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import "./signin.css"


import { getUserFromApi, patchUserSession, PutUserSata } from '../../api/ApiUsers';


const SignIn = () => {

  const [state, setCounters] = useState({ email: '', password: '' })

  const usersState = useSelector((state) => state.usersState)


  const dispatch = useDispatch()

  useEffect(() => { dispatch(getUserFromApi()); }, [dispatch]);


  function authentification() {

    const x = usersState.filter(el => el.email === state.email && el.password === state.password)
    console.log(x)
    if (x.length !== 0 && x[0].email !== 'takoua@gmail.com' && x[0].password !== "0000") {
 
      alert('Bienvenue Moderateur')
      dispatch(patchUserSession("moderateur"))
      dispatch(PutUserSata(x[0]))
    }
    else if (x.length !== 0 && x[0].email === 'takoua@gmail.com' && x[0].password === "0000") {
   
      alert('Bienvenue Admin')
      dispatch(patchUserSession("admin"))
      dispatch(PutUserSata(x[0]))
    }

    else {
      alert("n'existe pas")
      dispatch(patchUserSession("guest"))
    }

    window.location.reload();

  }

  return (
    <div className='backround-sign-page'>

   
        <div className="ui form ">
        <div className="pageLogin">
          <div class="field_login">
            <h3 className='Bienvenue'> Bienvenue </h3>

            <input className="input_login" id='emailSave' placeholder="Email" name="mail" pattern=".+@(gmail\.com|yahoo\.fr)" placeholder="Enter email" onChange={(e) => setCounters({ ...state, email: e.target.value })} />
          </div>
          <div class="field">

            <input className="input_login" type='password'id='passwordSave' placeholder="Mot de passe " name="password" onChange={(e) => setCounters({ ...state, password: e.target.value })} />
          </div>
          <div class="field">
         
          </div>
          <div className='con-log-btn'><button type="button" className="login-button-page" onClick={authentification}>
            Se connecter
          </button></div>
    
        </div>
      </div>
    </div>



  )
}




export default SignIn
