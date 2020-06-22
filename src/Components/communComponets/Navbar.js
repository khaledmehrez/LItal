import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      

        <div class="ui secondary menu container ">
          <a class="active item">Logo</a>
          

        <div class="ui secondary menu">
          <a class="active item">Home</a>
          <a class="item">Messages</a>
          <a class="item">Friends</a>

          <div class="right menu">
            <div class="item">
              <div class="ui icon input">
                <input type="text" placeholder="Search..." />
                <i aria-hidden="true" class="search icon"></i>
              </div>
            </div>
            <a class="item">Logout</a>
          </div>
        </div>
      
    );
  }
}

export default Navbar;
