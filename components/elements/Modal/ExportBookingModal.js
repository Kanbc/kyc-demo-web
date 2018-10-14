import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import Footer from './DefaultModal/Footer';
import { CancelModal, Button } from '../..';

class ExportBookingModal extends Component {
  state = {
    startTime: moment("1","DD"),
    endTime: moment(),
  };

  render() {
    return (
      <DefaultModal title={this.props.title} type={this.props.type} percentWidth="45">
        <Body>
          <div className="row">
            <div className="col-sm-2">
              <p>วันเริ่มต้น</p>
            </div>
            <div className="col-sm-4">
              <DatePicker
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                disabledKeyboardNavigation
                selected={this.state.startTime}
                onChange={startTime => this.setState({ startTime })}
                className="form-control"
              />
            </div>
            <div className="col-sm-2">
              <p>วันสิ้นสุด</p>
            </div>
            <div className="col-sm-4">
              <DatePicker
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                disabledKeyboardNavigation
                selected={this.state.endTime}
                onChange={endTime => this.setState({ endTime })}
                className="form-control"
              />
            </div>
          </div>
        </Body>
        <Footer>
          <Button width="100px" bstrap="btn-success">
            Export
          </Button>
          <CancelModal width="100px" bstrap="btn-danger">
            Cancel
          </CancelModal>
        </Footer>
        <style jsx>
          {` 
            .row {
              margin-top: 10px;
              margin-bottom: 40px;
              p {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                left: 0;
                right: 0;
                text-align: center;
              }
            }
            .lenkila_time_picker {
              font-size:100px;
              .react-datepicker__time-container {
                .react-datepicker__time {
                  .react-datepicker__time-box {
                    ul.react-datepicker__time-list {
                      padding:0;
                      background-color:black;      
                    }
                  }
                }
              }
            }
            @media (max-width: 576px) {
              .row {
                margin-top: 0;
                margin-bottom: 0;
                p {
                  position: relative;
                  text-align: left;
                }
              }
            }
          `}
        </style>
      </DefaultModal>
    );
  }
}

export default ExportBookingModal;
