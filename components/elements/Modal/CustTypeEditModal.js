import React, { Component } from 'react';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import Footer from './DefaultModal/Footer';
import { ColorButton, CancelModal, Button, Constant } from '../..';

class CustTypeEditModal extends Component {
  constructor(props) {
    super(props);
    this.state = { isEdit: false, isDisableTime: true, numberOfDays: 0 };

    this.editForm = this.editForm.bind(this);
    this.cancelEditForm = this.cancelEditForm.bind(this);
    this.cancelDisableTime = this.cancelDisableTime.bind(this);
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

  cancelDisableTime(event) {
    if (event.target.value === '0') {
      this.setState({
        isDisableTime: true,
        numberOfDays: 0,
      });
    } else if (event.target.value === '2') {
      this.setState({
        isDisableTime: false,
        numberOfDays: 30,
      });
    } else if (event.target.value === '3') {
      this.setState({
        isDisableTime: false,
        numberOfDays: 365,
      });
    } else {
      this.setState({
        isDisableTime: false,
        numberOfDays: 0,
      });
    }
  }

  render() {
    const userDetail = this.props.userData;
    let button1 = null;
    let button2 = null;
    if (this.state.isEdit === true) {
      button1 = <Button width={Constant.Buttons.default} bstrap="btn-success" >บันทึก</Button>;
      button2 = <CancelModal width={Constant.Buttons.default} bstrap="btn-danger" onClick={() => this.cancelEditForm()}>ยกเลิก</CancelModal>;
    } else {
      button1 = <Button width={Constant.Buttons.default} color={Constant.Orange}>แก้ไข</Button>;
      button2 = <CancelModal width={Constant.Buttons.default} bstrap="btn-danger" >ลบ</CancelModal>;
    }
    return (
      <DefaultModal title={this.props.title} type={this.props.type} percentWidth="70" >
        <Body>
          <div className="row">
            <div className="col-sm-2">
              <p>ชื่อ</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="firstname" defaultValue={userDetail.firstname} onChange={this.editForm} />
            </div>
            <div className="col-sm-2">
              <p>ประเภท</p>
            </div>
            <div className="col-sm-2">
              <select className="custom-select" defaultValue="0" value={this.state.inputValue} onChange={(e) => { this.cancelDisableTime(e); }}>
                <option value="0">ถาวร</option>
                <option value="1">ชั่วโมง</option>
                <option value="2">รายเดือน</option>
                <option value="3">รายปี</option>
              </select>
            </div>
            <div className="col-sm-2">
              <p>วันหมดอายุ (วัน)</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="nickname" defaultValue={userDetail.nickname} onChange={this.editForm} value={this.state.numberOfDays > 0 ? this.state.numberOfDays : ''} disabled={this.state.isDisableTime} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p>จำนวนชั่วโมง</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="username" defaultValue={userDetail.username} onChange={this.editForm} />
            </div>
            <div className="col-sm-2">
              <p>ราคา</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="username" defaultValue={userDetail.username} onChange={this.editForm} />
            </div>
            <div className="col-sm-2">
              <p>สี</p>
            </div>
            <div className="col-sm-2">
              <ColorButton width="100%" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p>โน้ต</p>
            </div>
            <div className="col-sm-10">
              <textarea className="form-control" id="note" rows="3" onChange={this.editForm} />
            </div>
          </div>
        </Body>
        <Footer>
          {button1}
          {button2}
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

export default CustTypeEditModal;
