import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-bootstrap-time-picker';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import Footer from './DefaultModal/Footer';
import { CancelModal, Button, Constant, ButtonModal, DiscountAddModal } from '../..';

class BookingDragAddModal extends Component {
  // constructor(props) {
  //   super(props);
  state = {
    // startTime: this.props.startTime,
    // endTime: this.props.endTime,
    // resourceId: this.props.resourceId,
    // startTime: moment(),
    // endTime: moment(),
    // resourceId: '',
  };
  // }

  render() {
    return (
      <DefaultModal title={this.props.title} type={this.props.type} percentWidth="45">
        <Body>
          <div className="row">
            <div className="col-sm-2">
              <p>สนาม</p>
            </div>
            <div className="col-sm-4">
              <select className="form-control" id="field" value={this.props.resourceId}>
                {this.props.fields.map(field => (
                  <option key={field.id} value={field.id}>
                    {field.field}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-sm-2">
              <p>วัน</p>
            </div>
            <div className="col-sm-4">
              <DatePicker
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                disabledKeyboardNavigation
                selected={this.props.day}
                // onChange={startTime => this.setState({ startTime })}
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p>เวลาเริ่มต้น</p>
            </div>
            <div className="col-sm-4">
              <TimePicker
                format={24}
                start="00:00"
                end="24:00"
                step={30}
                value={this.props.startTime}
                // onChange={startTime => this.setState({ startTime })}
              />
            </div>
            <div className="col-sm-2">
              <p>เวลาสิ้นสุด</p>
            </div>
            <div className="col-sm-4">
              <TimePicker
                format={24}
                start="00:00"
                end="24:00"
                step={30}
                value={this.props.endTime}
                // onChange={endTime => this.setState({ endTime })}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p>เบอร์โทร</p>
            </div>
            <div className="col-sm-4">
              <input type="text" className="form-control" id="firstname" />
            </div>
            <div className="col-sm-2">
              <p>ชื่อเล่น</p>
            </div>
            <div className="col-sm-4">
              <input type="text" className="form-control" id="firstname" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p>เบอร์โทร</p>
            </div>
            <div className="col-sm-10">
              <textarea className="form-control" rows="3" id="comment" />
            </div>
          </div>
        </Body>
        <Footer>
          <Button width="100px" bstrap="btn-success">
            บันทีก
          </Button>
          <CancelModal width="100px" bstrap="btn-danger">
            ยกเลิก
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

export default BookingDragAddModal;
