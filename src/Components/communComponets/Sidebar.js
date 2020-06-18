import React, { Component } from 'react';
import "./Sidebar.css"
class Sidebar extends Component {
    render() {
        return (
            <div class="ui segment pushable">
  <div class="ui inverted vertical labeled icon ui overlay left thin visible sidebar menu">
    <a class="item">
      <i aria-hidden="true" class="home icon"></i>
      Home
    </a>
    <a class="item">
      <i aria-hidden="true" class="gamepad icon"></i>
      Games
    </a>
    <a class="item">
      <i aria-hidden="true" class="camera icon"></i>
      Channels
    </a>
  </div>
  <div class="pusher">
    <div class="ui basic segment">
      <h3 class="ui header">{this.props.contenu}</h3>
      <img src="/images/wireframe/paragraph.png" class="ui image" />
    </div>
  </div>
</div>
        );
    }
}

export default Sidebar;