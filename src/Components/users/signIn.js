import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import "./signin.css"
import logoLital from "./logoLItal.png"

import { getUserFromApi,patchUserSession,PutUserSata } from '../../api/ApiUsers';


const SignIn = () => {

    const [state, setCounters] = useState({ email: '', password: '' })

    const usersState = useSelector((state) => state.usersState)


    const dispatch = useDispatch()

    useEffect(() => { dispatch(getUserFromApi()); }, [dispatch]);

    
    function authentification() {
        const x = usersState.filter(el => el.email === state.email && el.password === state.password)
        console.log(x)
         if (x.length!==0 && x[0].email !== 'takoua@gmail.com' && x[0].password !== "0000" ){
            alert('/moderateur')
            dispatch(patchUserSession("moderateur"))
            dispatch(PutUserSata(x[0]))
        }
        else if (x.length!==0 && x[0].email === 'takoua@gmail.com' && x[0].password === "0000" ){
            alert('/Admin')
            dispatch(patchUserSession("admin"))
            dispatch(PutUserSata(x[0]))
        }
        
        else {
            alert('nexiste pas')
            dispatch(patchUserSession("guest"))
        }
        
        

    }

    return (
        <div>
          <img  className="img_login_page" src={logoLital} alt="logo lital" />
        <div className="pageLogin">
            <div className="ui form">
          
          <div class="field_login">
          <h3> Connexion </h3>
          
            <input className="input_login" id='emailSave' placeholder="Email" name="mail" pattern=".+@(gmail\.com|yahoo\.fr)" className="form-control" placeholder="Enter email" onChange={(e) => setCounters({ ...state, email: e.target.value })} />
          </div>
          <div class="field">
         
            <input  className="input_login" id='passwordSave' placeholder="Mot de passe " name="password" onChange={(e) => setCounters({ ...state, password: e.target.value })}/>
          </div>
          <div class="field">
            <div class="ui checkbox">
              <input type="checkbox" class="hidden" readonly="" tabindex="0" />
              <label className="loginLabelRember">Se souvenir de moi </label>
            </div>
          </div>
          <button type="button"  className="login_button"  onClick={authentification}>
            Se connecter 
          </button>
          </div>
          </div>
          </div>
        
 
    
    )
}




export default SignIn
