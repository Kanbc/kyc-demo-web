import React, { Component } from 'react';

class TopNavbar extends Component {

  render() {

    return (
      <nav className="navbar navbar-expand-lg navbar-dark d-flex justify-content-space-between">
        <a className="navbar-brand d-none d-sm-block" href="/">Automatic Filling Machine (IDCard)</a>
        <a className="navbar-brand d-sm-none" href="/">AFM(IDCard)</a>
        <style jsx>{`
          .navbar {
            background: linear-gradient(270deg,#000 0,#062a64 100%);
            box-shadow: 0px 4px 6px rgba(0,0,0,0.4);
            #navbarNavDropdown2 ul {
              position: absolute;
              right:15px;
              .dropdown-divider{
                border-top: 1px solid #484848;
              }
              .dropdown-item{
                color:#7a7b7b;
                text-align: right;
                padding:.5rem 1.5rem
              }
              .dropdown-item:hover{
                color: #fff;
                background-color: #000;
              }
              .dropdown-menu-right{
                background-color: #000;
                color: rgba(255,255,255,.5);
              }
            }
          }
        `}
        </style>
      </nav>
    );
  }
}

export default TopNavbar;
