import React, { Component } from 'react';

class StadiumBookingTimetable extends Component {
  state = {
    timetable: [{
      stadium: 1,
      startTime: 1,
    }],
  }
  render() {
    return (
      <div className="card mb-3">
        <div className="card-header">
          <div className="row">
            <div className="col-3">สนามที่</div>
            <div className="col-9">เวลา</div>
          </div>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className="row">
              <div className="col-3">1</div>
              <div className="col-9">8.00 - 9.00</div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-3">1</div>
              <div className="col-9">8.00 - 9.00</div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-3">1</div>
              <div className="col-9">8.00 - 9.00</div>
            </div>
          </li>
        </ul>
        <style jsx>{`
          .card {
            width: 100%;
          }
        `}</style>
      </div>
    );
  }
}

export default StadiumBookingTimetable;
