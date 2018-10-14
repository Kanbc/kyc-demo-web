import React, { Component } from 'react';
import moment from 'moment';
import TimePicker from 'react-bootstrap-time-picker';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import Footer from './DefaultModal/Footer';
import { ColorButton, Button, Constant, CancelModal } from '../..';

class FMPriceEditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      startTime: moment(),
      endTime: moment(),
    };

    this.editForm = this.editForm.bind(this);
    this.cancelEditForm = this.cancelEditForm.bind(this);
  }

  editForm() {
    this.setState({
      isEdit: true,
    });
  }

  cancelEditForm() {
    this.setState({
      isEdit: false,
    });
  }

  render() {
    // const userDetail = this.props.userData;
    let button1 = null;
    let button2 = null;
    let button3 = null;
    if (this.state.isEdit === true) {
      button1 = <Button width={Constant.Buttons.default} bstrap="btn-success" >บันทึก</Button>;
      button2 = <CancelModal width={Constant.Buttons.default} color={Constant.Orange}>ยกเลิก</CancelModal>;
    } else {
      button1 = <Button width={Constant.Buttons.default} bstrap="btn-success" >บันทึก</Button>;
      button2 = <CancelModal width={Constant.Buttons.default} color={Constant.Orange}>ยกเลิก</CancelModal>;
      button3 = <CancelModal width={Constant.Buttons.default} bstrap="btn-danger" >ลบ</CancelModal>;
    }
    return (
      <DefaultModal title={this.props.title} type={this.props.type} percentWidth="90" >
        <Body>
          <div className="row">
            <div className="col-sm-12">
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox6">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="option1" />
                  Mon
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox6">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="option1" />
                  Tue
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox6">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="option1" />
                  Wed
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox6">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="option1" />
                  Thu
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox6">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="option1" />
                  Fri
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox6">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="option1" />
                  Sat
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox6">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="option1" />
                  Sun
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="inlineCheckbox6">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="option1" />
                  Hol
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1">
              <p>เวลาที่เริ่ม</p>
            </div>
            <div className="col-sm-2">
              <TimePicker
                format={24}
                start="00:00"
                end="24:00"
                step={30}
                value={this.state.startTime}
                onChange={startTime => this.setState({ startTime })}
              />
            </div>
            <div className="col-sm-1">
              <p>เวลาสิ้นสุด</p>
            </div>
            <div className="col-sm-2">
              <TimePicker
                format={24}
                start="00:00"
                end="24:00"
                step={30}
                value={this.state.endTime}
                onChange={endTime => this.setState({ endTime })}
              />
            </div>
            <div className="col-sm-1">
              <p>สี</p>
            </div>
            <div className="col-sm-1">
              <ColorButton width="100%" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1">
              <p>ทั่วไป</p>
            </div>
            <div className="col-sm-2 field-and-button">
              <div className="input-group">
                <input type="number" className="form-control" placeholder="เต็ม" />
                <input type="number" className="form-control" placeholder="ครึ่ง" />
              </div>
            </div>
            <div className="col-sm-1">
              <p>นักเรียน</p>
            </div>
            <div className="col-sm-2 field-and-button">
              <div className="input-group">
                <input type="number" className="form-control" placeholder="เต็ม" />
                <input type="number" className="form-control" placeholder="ครึ่ง" />
              </div>
            </div>
            <div className="col-sm-1">
              <p>นักศึกษา</p>
            </div>
            <div className="col-sm-2 field-and-button">
              <div className="input-group">
                <input type="number" className="form-control" placeholder="เต็ม" />
                <input type="number" className="form-control" placeholder="ครึ่ง" />
              </div>
            </div>
            <div className="col-sm-1">
              <p>สูงวัย</p>
            </div>
            <div className="col-sm-2 field-and-button">
              <div className="input-group">
                <input type="number" className="form-control" placeholder="เต็ม" />
                <input type="number" className="form-control" placeholder="ครึ่ง" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1">
              <p>VIP</p>
            </div>
            <div className="col-sm-2 field-and-button">
              <div className="input-group">
                <input type="number" className="form-control" placeholder="เต็ม" />
                <input type="number" className="form-control" placeholder="ครึ่ง" />
              </div>
            </div>
            <div className="col-sm-1">
              <p>Silver</p>
            </div>
            <div className="col-sm-2 field-and-button">
              <div className="input-group">
                <input type="number" className="form-control" placeholder="เต็ม" />
                <input type="number" className="form-control" placeholder="ครึ่ง" />
              </div>
            </div>
            <div className="col-sm-1">
              <p>Gold</p>
            </div>
            <div className="col-sm-2 field-and-button">
              <div className="input-group">
                <input type="number" className="form-control" placeholder="เต็ม" />
                <input type="number" className="form-control" placeholder="ครึ่ง" />
              </div>
            </div>
            <div className="col-sm-1">
              <p>1</p>
            </div>
            <div className="col-sm-2 field-and-button">
              <div className="input-group">
                <input type="number" className="form-control" placeholder="เต็ม" />
                <input type="number" className="form-control" placeholder="ครึ่ง" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1">
              <p>2</p>
            </div>
            <div className="col-sm-2 field-and-button">
              <div className="input-group">
                <input type="number" className="form-control" placeholder="เต็ม" />
                <input type="number" className="form-control" placeholder="ครึ่ง" />
              </div>
            </div>
            <div className="col-sm-1">
              <p>3</p>
            </div>
            <div className="col-sm-2 field-and-button">
              <div className="input-group">
                <input type="number" className="form-control" placeholder="เต็ม" />
                <input type="number" className="form-control" placeholder="ครึ่ง" />
              </div>
            </div>
            <div className="col-sm-6" />
          </div>
        </Body>
        <Footer>
          {button1}
          {button2}
          {button3}
        </Footer>
        <style jsx>{`
          .row{
            margin-top:10px;
            margin-bottom:40px;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            color: #212529;
            text-align: left;
            p{
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              left: 0;
              right: 0;
              text-align: center;
            }
            .field-and-button input{
              width:48%;
              display:inline-block;
            }
          }
          @media (max-width: 576px) { 
            .row{
              margin-top:0px;
              margin-bottom:0px;
              p{
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

export default FMPriceEditModal;
