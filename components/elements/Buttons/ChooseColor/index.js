import React, { Component } from 'react';
import { TwitterPicker } from 'react-color';

class ColorButton extends Component {
  state = {
    background: '#CA0813',
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };

  render() {
    return (
      <div className="dropdown">
        <button className="btn dropdown-toggle" style={{ color: `${this.state.background}`, backgroundColor: `${this.state.background}` }} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <TwitterPicker
            color={this.state.background}
            onChangeComplete={this.handleChangeComplete}
          />
        </div>
        <style jsx>{`
          button{
            width: ${this.props.width};
            cursor:pointer;
          }
        `}
        </style>
      </div>
    );
  }
}

export default ColorButton;
