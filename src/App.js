import React from "react";
import { connect } from "react-redux";
import "./App.css";

import { Component } from "react";

import { testaction } from "./actions";
import Navbar from "./Components/communComponets/Navbar";
import Sidebar from "./Components/communComponets/Sidebar";

class App extends Component {
  componentDidMount() {
    this.props.testaction("ahlan react redux");
  }

  render() {
    const contenu = <div>
      <h1>hello</h1>;
    {
      this.props.testin
    }

    <div class="ui segment">
      <div class="ui active transition visible inverted dimmer">
        <div class="content">
          <div class="ui inverted text loader">Loading</div>
        </div>
      </div>
     
    </div>
    </div>;

    return (
      <div className="App">
        <Navbar />
        <Sidebar contenu={contenu} />
      </div>
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
