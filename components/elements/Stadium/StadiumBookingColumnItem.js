import React, { Component } from 'react';

class StadiumBookingColumnItem extends Component {

  render() {
    return (
      <div className="item">
        <div className="d-flex align-items-center">
          <div className="time">{this.props.booking.start} - {this.props.booking.end}</div>
          <div className="name">
            <p>{this.props.booking.title}</p>
          </div>
        </div>
        <style jsx>{`
          .item {
            width: 100%;
          }
          .time {
            flex: 1.5;
            border-right: 1px solid #ddd;
          }
          .name {
            flex: 1;
            white-space: pre;
          }
          p {
            margin: 0;
            padding-left: 5px;
            word-break: break-all;
            word-wrap: break-word;
            white-space: pre-wrap;
          }
        `}
        </style>
      </div>
    );
  }
}

export default StadiumBookingColumnItem;
