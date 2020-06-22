import React from "react";
import { connect } from "react-redux";
import "./App.css";

import { Component } from "react";

import { testaction } from "./actions";
import Navbar from "./Components/communComponets/Navbar";
import Sidebar from "./Components/communComponets/Sidebar";
import DashboardManagement from "./Components/DashboardProduct/DashboardProduct";


const App = () => {
  

  
   

    return (
      

class App extends Component {
  componentDidMount() {
    this.props.testaction("ahlan react redux");
  }

  render() {
   

    return (

      <div className="App">
        <Navbar />
        <Sidebar  />
       
      </div>

      
    );
  }


export default App;

    );
  }
}
const mapStateToProps = (state) => ({
  testin: state.testin,
});
const mapDispatchToProps = (dispatch) => ({
  testaction: (payload) => dispatch(testaction(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

