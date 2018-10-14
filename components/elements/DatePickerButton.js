import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class DatePickerButton extends Component {
  state = {
    currentDate: moment(),
  }

  render() {
    return (
      <button className="btn btn-info" onClick={this.props.onClick}>
        {moment(this.props.value, 'DD/MM/YYYY').format('วันdddd ที่ DD MMMM YYYY')}
        <i className="fa fa-pencil" />
        <style jsx>{`
          .fa {
            margin-left: 10px;
          }
        `}
        </style>
      </button>
    );
  }
}

DatePickerButton.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};

DatePickerButton.defaultProps = {
  value: '',
  onClick: () => console.log('DatePickerButton no onClick prop'),
};

export default DatePickerButton;
