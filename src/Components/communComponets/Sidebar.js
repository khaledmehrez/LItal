import React, { Component, useState, useEffect } from "react";
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { Checkbox } from 'semantic-ui-react'


import { Route, Switch, Link } from 'react-router-dom';
import DashboardProduct from '../DashboardProduct/DashboardProduct';
import DashboardProductTable from '../DashboardProduct/DashboardProductTable';
import History from '../history/history'
import GestionnaireUsers from '../users/gestionnaireUsers'
import "./Sidebar.css"
import Test from '../DashboardProduct/Test';
const SidebarExampleVisible = () => {
  const [state, setState] = useState({togle:false})

  function togleclick(){
    if(state.togle===false)
    setState({
      ...state,
      togle: true,
    });
    else {
      setState({
        ...state,
        togle: false,
      });
    }
  }
  return (
  <Sidebar.Pushable as={Segment} >
    <Checkbox toggle onClick={togleclick} />
    <Sidebar
    
    className="ui container sidebar"
      as={Menu}
      animation='push'
      icon='labeled'
     
      vertical
     visible={state.togle}
      width='thin'
      
      
    >

      <Menu.Item as={Link} to="/Product" >
      <Icon name='chart bar' />
        Gestionnaire de Stock
      </Menu.Item>
      <Menu.Item as={Link} to="/gestionnaireUsers">
      <Icon name='users' />
        Gestionnaire des utilisateurs 
      </Menu.Item>
      <Menu.Item as={Link} to="/history">
      <Icon name='history' />
        Historique
      </Menu.Item>
    </Sidebar>

    <Sidebar.Pusher >
      <Segment basic>

        <Switch>

          <Route path='/Product' component={DashboardProduct} />
          <Route path='/history' component={History} />
          <Route path='/gestionnaireUsers' component={GestionnaireUsers} />
        </Switch>
      </Segment>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
  
)
  }

export default SidebarExampleVisible