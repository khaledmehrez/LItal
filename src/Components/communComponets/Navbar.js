
import SignIn from "../users/signIn";
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";


import { getUserFromApi,patchUserSession,PutUserSata } from '../../api/ApiUsers';
const Navbar =()=> {
  const dispatch = useDispatch()
    return (
      
        <div class="ui secondary menu container ">
          <a class="active item">Logo</a>
          
          <div class="right menu">
            <div class="item">
              <div class="ui icon input">
                <input type="text"  className="search_navbar"  placeholder="Search..." />
                <i aria-hidden="true" class="search icon"></i>
              </div>
            </div>
            
            <button className="deconnection_button"  class=" item" onClick={()=>dispatch(patchUserSession("guest"))}> <i aria-hidden="true"   class="log out icon"></i> Se déconnecter </button>

          </div>
        </div>
      
    );
  
}

export default Navbar;
