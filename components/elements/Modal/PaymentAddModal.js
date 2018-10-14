import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import Footer from './DefaultModal/Footer';
import { Button, CancelModal, Constant } from '../..';
import { addPaymentData } from '../../../store';

class PaymentAddModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      time: '',
      username: '',
      price: '',
      admin: 'Demo',

      checking: true,
      reChecking: false,
      confirming: false,
    };

    this.checkPayment = this.checkPayment.bind(this);
    this.addNewPayment = this.addNewPayment.bind(this);
    this.cancelAddPayment = this.cancelAddPayment.bind(this);
  }

  checkPayment(){
    const payments = this.props.payments
    const instance = this.state.username

    if (instance === '' || this.state.price === '' ) {
      var matchUserName = [];
    }else{
      var matchUserName = payments.filter(function (payment) {
        return payment.username === instance;
      });
    }

    if (matchUserName.length > 0){
      // Found
      console.log('confirm')
      this.setState({ reChecking: false, confirming: true, checking: false });
    }else{
      // Not Found
      console.log('recheck')
      this.setState({ reChecking: true, confirming: false, checking: false });
    }
  }

  cancelAddPayment() {
    this.setState({
      id: '',
      date: '',
      time: '',
      username: '',
      price: '',
      admin: 'Demo',

      checking: true,
      reChecking: false,
      confirming: false,
    });
  }

  addNewPayment() {
    // validation
    // add user api
    this.props.dispatch(addPaymentData({
      id: moment().format('YYYY-MM-DD HH:mm:ss').toString(),
      date: moment().format('YYYY-MM-DD').toString(),
      time: moment().format('HH:mm:ss').toString(),
      username: this.state.username,
      price: parseInt(this.state.price),
      admin: 'Demo',
    }));
    this.cancelAddPayment();
  }

  render() {
    let button1 = null;
    let text = null;
    if (this.state.checking === true) {
      button1 = <Button width="100px" bstrap="btn-success" onClick={() => this.checkPayment()} >
        Check
      </Button>;
    } else if (this.state.reChecking === true) {
      button1 = <Button width="100px" bstrap="btn-success" onClick={() => this.checkPayment()} >
        Re-Check
      </Button>;
      text = <p style={{color:Constant.Red, margin: '0 auto'}}>รหัสหรือจำนวนเงินไม่ถูกต้อง โปรดลองอีกครั้ง</p>
    } else {
      button1 = <CancelModal width="100px" bstrap="btn-success" onClick={() => {
        // validation
        // add user api
        this.addNewPayment();
      }}>ยืนยัน</CancelModal>;
      text = <p style={{color:Constant.Green, margin: '0 auto'}}>ข้อมูลถูกต้อง กดยืนยันเพื่อสำเร็จรายการ</p>
    }

    return (
      <DefaultModal title={this.props.title} type={this.props.type} percentWidth="40" >
        <Body>
          <div className="row">
            <div className="col-sm-2" />
            <div className="col-sm-2">
              <p>จำนวนเงิน</p>
            </div>
            <div className="col-sm-4">
              <input type="number" className="form-control" disabled={this.state.confirming ? true : false} id="money" value={this.state.price} onChange={e => this.setState({ price: e.target.value })} />
            </div>
            <div className="col-sm-2" />
            <div className="col-sm-2" />
          </div>
          <div className="row">
            <div className="col-sm-2" />
            <div className="col-sm-2">
              <p>รหัส</p>
            </div>
            <div className="col-sm-4">
              <input type="text" className="form-control" disabled={this.state.confirming ? true : false} id="code" value={this.state.username} onChange={e => this.setState({ username: e.target.value })}/>
            </div>
            <div className="col-sm-2" />
            <div className="col-sm-2" />
          </div>
        </Body>
        <Footer>
          {button1}
        </Footer>
        <div className="row">
          {text}
        </div>
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

export default connect()(PaymentAddModel);
