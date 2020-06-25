import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

import { Route, Switch, Link } from 'react-router-dom';
import DashboardProduct from '../DashboardProduct/DashboardProduct';
import DashboardProductTable from '../DashboardProduct/DashboardProductTable';
import History from '../history/history'
import GestionnaireUsers from '../users/gestionnaireUsers'
import "./Sidebar.css"
import Test from '../DashboardProduct/Test';
const SidebarExampleVisible = () => {
  
  return (
  <Sidebar.Pushable as={Segment} >
    <Sidebar
    className="ui container"
      as={Menu}
      animation='push'
      icon='labeled'
      inverted
      vertical
      visible
      width='thin'
      
      
    >

      <Menu.Item as={Link} to="/Product" >
        <Icon name='home' />
        Home
      </Menu.Item>
      <Menu.Item as={Link} to="/gestionnaireUsers">

        users
      </Menu.Item>
      <Menu.Item as={Link} to="/history">

        history
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