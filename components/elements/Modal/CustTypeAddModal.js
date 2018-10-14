import React, { Component } from 'react';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import Footer from './DefaultModal/Footer';
import { ColorButton, CancelModal, Button } from '../..';

class CustTypeAddModal extends Component {
  constructor(props) {
    super(props);
    this.state = { isDisableTime: true, numberOfDays: 0 };

    this.cancelDisableTime = this.cancelDisableTime.bind(this);
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
    return (
      <DefaultModal title={this.props.title} type={this.props.type} percentWidth="70" >
        <Body>
          <div className="row">
            <div className="col-sm-2">
              <p>ชื่อ</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="firstname" />
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
              <input type="text" className="form-control" id="nickname" value={this.state.numberOfDays > 0 ? this.state.numberOfDays : ''} disabled={this.state.isDisableTime} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p>จำนวนชั่วโมง</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="username" />
            </div>
            <div className="col-sm-2">
              <p>ราคา</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="username" />
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
              <textarea className="form-control" id="note" rows="3" />
            </div>
          </div>
        </Body>
        <Footer>
          <Button width="100px" bstrap="btn-success" >
            สร้าง
          </Button>
          <CancelModal width="100px" bstrap="btn-danger" >
            ยกเลิก
          </CancelModal>
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

export default CustTypeAddModal;
