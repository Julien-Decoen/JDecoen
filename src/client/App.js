import React, { Component } from 'react';
import './app.scss';

export default class App extends Component {

  componentDidMount() {
  }

  render() {
    return (
        <div>
          <div className="wrapper" id="wrapper">
            <nav id="bt-menu" className="bt-menu bt-menu-close">            
              <div className="bt-menu-trigger">
                <a className="link link--logo" href="#">JD<span data-letters="JD"></span><span data-letters="JD"></span></a>
              </div>

              <ul>
                <li><a href="#" className="bt-icon icon-user-outline">About</a></li>
                <li><a href="#" className="bt-icon icon-sun">Skills</a></li>
                <li><a href="#" className="bt-icon icon-windows">Work</a></li>
                <li><a href="#" className="bt-icon icon-speaker">Blog</a></li>
                <li><a href="#" className="bt-icon icon-star">Clients</a></li>
                <li><a href="#" className="bt-icon icon-bubble">Contact</a></li>
              </ul>
              <div className="bt-overlay"></div>
            </nav>
            <div className="left"></div>
            <div className="right"></div>
          </div>
        </div>
    );
  }
}
