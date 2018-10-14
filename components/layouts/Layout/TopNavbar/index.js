import React, { Component } from 'react';

class TopNavbar extends Component {

  render() {

    return (
      <nav >
        <a href="/">Automatic Filling Machine (IDCard)</a>
        <style jsx>{`
          nav {
            background-color: #171717;
            box-shadow: 0px 4px 6px rgba(0,0,0,0.4);
            width: 100%;
            height: 60px;
            line-height: 60px;
            white-space: nowrap;
            text-align: center;
            a{
              color:#7a7a7a;;
              text-decoration: none;
              font-family: montserrat;
              font-size: 22px;
              font-weight: 500;
            }
          }
        `}
        </style>
      </nav>
    );
  }
}

export default TopNavbar;
