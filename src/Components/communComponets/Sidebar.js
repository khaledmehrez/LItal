import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

import {  Route, Switch, Link } from 'react-router-dom';
import DashboardProduct from '../DashboardProduct/DashboardProduct';
import DashboardProductTable from '../DashboardProduct/DashboardProductTable';

import "./Sidebar.css"
import Test from '../DashboardProduct/Test';

const SidebarExampleVisible = () => {
  
  return (
  <Sidebar.Pushable as={Segment} >
    <Sidebar
    className="ui container"
      as={Menu}
      animation='push'

const SidebarExampleVisible = () => (
  <Sidebar.Pushable as={Segment}>
    <Sidebar
      as={Menu}
      animation='overlay'

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
      <Menu.Item as={Link} to="/test">
        <Icon name='gamepad' />
        Games
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='camera' />
        Channels
      </Menu.Item>
    </Sidebar>


    <Sidebar.Pusher >

    <Sidebar.Pusher>

      <Segment basic>
          
        <Switch>
        <Route path='/Product' component={DashboardProduct} />
        <Route path='/test' component={Test} />
        </Switch>
      </Segment>
    </Sidebar.Pusher>
  </Sidebar.Pushable>

  
)
  }

)


export default SidebarExampleVisible