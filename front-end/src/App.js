
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import "./App.css";

import { Component } from "react";

import { testaction } from "./actions";
import Navbar from "./Components/communComponets/Navbar";
import Sidebar from "./Components/communComponets/Sidebar";
import DashboardManagement from "./Components/DashboardProduct/DashboardProduct";

import SignIn from "./Components/users/signIn"
import {getUserSession  } from './api/ApiUsers';
import LoaderExampleLoader from './Components/communComponets/Loder';

const App = () => {
  const sessionState = useSelector((state) => state.sessionState)


  const dispatch = useDispatch()

  useEffect(() => { dispatch(getUserSession()); }, [dispatch]);


console.log(sessionState)


  

if(sessionState===undefined){
  return <LoaderExampleLoader />
}
     else if  (sessionState==="admin" ||sessionState==="moderateur"){
       return(
     <div className="App">
      <Navbar />
      <Sidebar sessionState={sessionState}/>
      </div>)}
      else
      return(<SignIn />)
      
      
   

  
}


export default App;
