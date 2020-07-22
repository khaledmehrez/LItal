
import SignIn from "../users/signIn";
import React, { useState, useEffect } from 'react'
import logo from "./img/logoo.png"

import { useDispatch, useSelector } from "react-redux";

import { getUserFromApi,patchUserSession,PutUserSata } from '../../api/ApiUsers';
import "./Navbar.css"
const Navbar =()=> {
  const dispatch = useDispatch()
 
  function deconnect (){
  localStorage.setItem('token',"")
  window.location.reload()
  }
    return (
      <div className="navbar">
        <div class="ui secondary menu container ">
          <a class="active item"><img className="logo_navbar" src={logo}/></a>
          
          <div class="right menu">
         
            
            <button className="deconnection_button"  class=" item" onClick={deconnect}> <i aria-hidden="true"   class="log out icon"></i> Se déconnecter </button>

          </div>
        </div>
        </div>
 
      
    )

}

export default Navbar;
