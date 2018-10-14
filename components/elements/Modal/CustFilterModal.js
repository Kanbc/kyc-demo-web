import React, { Component } from 'react';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import Footer from './DefaultModal/Footer';
import { CancelModal, Constant, Button } from '../..';

class CustFilterModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheck1: true,
      isCheck2: true,
      isCheck3: true,
      isCheck4: true,
      isCheck5: true,
      isCheck6: true,
      isCheck7: true,
      isCheck8: true,
      isCheck9: true,
      isCheck10: true,
      isCheck11: true,
      isCheck12: true,
      isCheck13: true,
      isCheck14: true,
      isCheck15: true,
      isCheck16: true,
      isCheck17: true,
      isCheck18: true,
      isCheck19: true,
      isCheck20: true,
    };

    this.checkAll = this.checkAll.bind(this);
    this.disCheckAll = this.disCheckAll.bind(this);
    this.toggleCheck1 = this.toggleCheck1.bind(this);
    this.toggleCheck2 = this.toggleCheck2.bind(this);
    this.toggleCheck3 = this.toggleCheck3.bind(this);
    this.toggleCheck4 = this.toggleCheck4.bind(this);
    this.toggleCheck5 = this.toggleCheck5.bind(this);
    this.toggleCheck6 = this.toggleCheck6.bind(this);
    this.toggleCheck7 = this.toggleCheck7.bind(this);
    this.toggleCheck8 = this.toggleCheck8.bind(this);
    this.toggleCheck9 = this.toggleCheck9.bind(this);
    this.toggleCheck10 = this.toggleCheck10.bind(this);
    this.toggleCheck11 = this.toggleCheck11.bind(this);
    this.toggleCheck12 = this.toggleCheck12.bind(this);
    this.toggleCheck13 = this.toggleCheck13.bind(this);
    this.toggleCheck14 = this.toggleCheck14.bind(this);
    this.toggleCheck15 = this.toggleCheck15.bind(this);
    this.toggleCheck16 = this.toggleCheck16.bind(this);
    this.toggleCheck17 = this.toggleCheck17.bind(this);
    this.toggleCheck18 = this.toggleCheck18.bind(this);
    this.toggleCheck19 = this.toggleCheck19.bind(this);
    this.toggleCheck20 = this.toggleCheck20.bind(this);
  }

  checkAll() {
    this.setState({
      isCheck1: true,
      isCheck2: true,
      isCheck3: true,
      isCheck4: true,
      isCheck5: true,
      isCheck6: true,
      isCheck7: true,
      isCheck8: true,
      isCheck9: true,
      isCheck10: true,
      isCheck11: true,
      isCheck12: true,
      isCheck13: true,
      isCheck14: true,
      isCheck15: true,
      isCheck16: true,
      isCheck17: true,
      isCheck18: true,
      isCheck19: true,
      isCheck20: true,
    });
  }

  disCheckAll() {
    this.setState({
      isCheck1: false,
      isCheck2: false,
      isCheck3: false,
      isCheck4: false,
      isCheck5: false,
      isCheck6: false,
      isCheck7: false,
      isCheck8: false,
      isCheck9: false,
      isCheck10: false,
      isCheck11: false,
      isCheck12: false,
      isCheck13: false,
      isCheck14: false,
      isCheck15: false,
      isCheck16: false,
      isCheck17: false,
      isCheck18: false,
      isCheck19: false,
      isCheck20: false,
    });
  }

  toggleCheck1() {
    this.setState({
      isCheck1: this.state.isCheck1 !== true,
    });
  }

  toggleCheck2() {
    this.setState({
      isCheck2: this.state.isCheck2 !== true,
    });
  }

  toggleCheck3() {
    this.setState({
      isCheck3: this.state.isCheck3 !== true,
    });
  }

  toggleCheck4() {
    this.setState({
      isCheck4: this.state.isCheck4 !== true,
    });
  }

  toggleCheck5() {
    this.setState({
      isCheck5: this.state.isCheck5 !== true,
    });
  }

  toggleCheck6() {
    this.setState({
      isCheck6: this.state.isCheck6 !== true,
    });
  }

  toggleCheck7() {
    this.setState({
      isCheck7: this.state.isCheck7 !== true,
    });
  }

  toggleCheck8() {
    this.setState({
      isCheck8: this.state.isCheck8 !== true,
    });
  }

  toggleCheck9() {
    this.setState({
      isCheck9: this.state.isCheck9 !== true,
    });
  }

  toggleCheck10() {
    this.setState({
      isCheck10: this.state.isCheck10 !== true,
    });
  }

  toggleCheck11() {
    this.setState({
      isCheck11: this.state.isCheck11 !== true,
    });
  }

  toggleCheck12() {
    this.setState({
      isCheck12: this.state.isCheck12 !== true,
    });
  }

  toggleCheck13() {
    this.setState({
      isCheck13: this.state.isCheck13 !== true,
    });
  }

  toggleCheck14() {
    this.setState({
      isCheck14: this.state.isCheck14 !== true,
    });
  }

  toggleCheck15() {
    this.setState({
      isCheck15: this.state.isCheck15 !== true,
    });
  }

  toggleCheck16() {
    this.setState({
      isCheck16: this.state.isCheck16 !== true,
    });
  }

  toggleCheck17() {
    this.setState({
      isCheck17: this.state.isCheck17 !== true,
    });
  }

  toggleCheck18() {
    this.setState({
      isCheck18: this.state.isCheck18 !== true,
    });
  }

  toggleCheck19() {
    this.setState({
      isCheck19: this.state.isCheck19 !== true,
    });
  }

  toggleCheck20() {
    this.setState({
      isCheck20: this.state.isCheck20 !== true,
    });
  }

  render() {
    return (
      <DefaultModal title={this.props.title} type={this.props.type} percentWidth="70" >
        <Body>
          <div className="row">
            <div className="col-sm-2">
              <p className="bold-text">หน้าที่ :</p>
            </div>
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="checkbox1">
                <input className="form-check-input" type="checkbox" id="checkbox1" value="option1" onClick={this.toggleCheck1} checked={this.state.isCheck1} />
                หัวกลุ่ม
              </label>
            </div>
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="checkbox2">
                <input className="form-check-input" type="checkbox" id="checkbox2" value="option2" checked={this.state.isCheck2} onClick={this.toggleCheck2} />
                ลูกกลุ่ม
              </label>
            </div>
            <div className="col-sm-2" />
            <div className="col-sm-2" />
            <div className="col-sm-2" />
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p className="bold-text">ความสัมพันธ์ :</p>
            </div>
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="checkbox3">
                <input className="form-check-input" type="checkbox" id="checkbox3" value="option3" onClick={this.toggleCheck3} checked={this.state.isCheck3} />
                ขาประจำ
              </label>
            </div>
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="checkbox4">
                <input className="form-check-input" type="checkbox" id="checkbox4" value="option4" onClick={this.toggleCheck4} checked={this.state.isCheck4} />
                ขาเก่า
              </label>
            </div>
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="checkbox5">
                <input className="form-check-input" type="checkbox" id="checkbox5" value="option5" onClick={this.toggleCheck5} checked={this.state.isCheck5} />
                ขาจร
              </label>
            </div>
            <div className="col-sm-2" />
            <div className="col-sm-2" />
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p className="bold-text">ประเภท :</p>
            </div>
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="checkbox6">
                <input className="form-check-input" type="checkbox" id="checkbox6" value="option6" onClick={this.toggleCheck6} checked={this.state.isCheck6} />
                นักเรียน
              </label>
            </div>
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="checkbox7">
                <input className="form-check-input" type="checkbox" id="checkbox7" value="option7" onClick={this.toggleCheck7} checked={this.state.isCheck7} />
                นักศึกษา
              </label>
            </div>
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="checkbox8">
                <input className="form-check-input" type="checkbox" id="checkbox8" value="option8" onClick={this.toggleCheck8} checked={this.state.isCheck8} />
                ทั่วไป
              </label>
            </div>
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="checkbox9">
                <input className="form-check-input" type="checkbox" id="checkbox9" value="option9" onClick={this.toggleCheck9} checked={this.state.isCheck9} />
                สูงวัย
              </label>
            </div>
            <div className="col-sm-2" />
          </div>
          <div className="row">
            <div className="col-sm-2" />
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="checkbox10">
                <input className="form-check-input" type="checkbox" id="checkbox10" value="option10" onClick={this.toggleCheck10} checked={this.state.isCheck10} />
                VIP Member
              </label>
            </div>
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="checkbox11">
                <input className="form-check-input" type="checkbox" id="checkbox11" value="option11" onClick={this.toggleCheck11} checked={this.state.isCheck11} />
                Special
              </label>
            </div>
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="checkbox12">
                <input className="form-check-input" type="checkbox" id="checkbox12" value="option12" onClick={this.toggleCheck12} checked={this.state.isCheck12} />
                Gold
              </label>
            </div>
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="checkbox13">
                <input className="form-check-input" type="checkbox" id="checkbox13" value="option13" onClick={this.toggleCheck13} checked={this.state.isCheck13} />
                Red
              </label>
            </div>
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="checkbox14">
                <input className="form-check-input" type="checkbox" id="checkbox14" value="option14" onClick={this.toggleCheck14} checked={this.state.isCheck14} />
                Silver
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2" />
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="checkbox15">
                <input className="form-check-input" type="checkbox" id="checkbox15" value="option15" onClick={this.toggleCheck15} checked={this.state.isCheck15} />
                Blue
              </label>
            </div>
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="checkbox16">
                <input className="form-check-input" type="checkbox" id="checkbox16" value="option16" onClick={this.toggleCheck16} checked={this.state.isCheck16} />
                Green
              </label>
            </div>
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="checkbox17">
                <input className="form-check-input" type="checkbox" id="checkbox17" value="option17" onClick={this.toggleCheck17} checked={this.state.isCheck17} />
                Yellow
              </label>
            </div>
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="checkbox18">
                <input className="form-check-input" type="checkbox" id="checkbox18" value="option18" onClick={this.toggleCheck18} checked={this.state.isCheck18} />
                Mars
              </label>
            </div>
            <div className="col-sm-2">
              <label className="form-check-label" htmlFor="checkbox19">
                <input className="form-check-input" type="checkbox" id="checkbox19" value="option19" onClick={this.toggleCheck19} checked={this.state.isCheck19} />
                Pluto
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2" />
            <div className="col-sm-2">
              <label className="form-check-label red-label" htmlFor="checkbox20">
                <input className="form-check-input" type="checkbox" id="checkbox20" value="option20" onClick={this.toggleCheck20} checked={this.state.isCheck20} />
                Blacklist
              </label>
            </div>
            <div className="col-sm-2" />
            <div className="col-sm-2" />
            <div className="col-sm-2" />
            <div className="col-sm-2" />
          </div>
          <div className="row">
            <div className="col-sm-3">
              <Button width="150px" bstrap="btn-success" color={Constant.Green} onClick={() => this.checkAll()}>เลือกทั้งหมด</Button>
            </div>
            <div className="col-sm-3">
              <Button width="150px" bstrap="btn-primary" color={Constant.Blue} onClick={() => this.disCheckAll()}>ไม่เลือกทั้งหมด</Button>
            </div>
            <div className="col-sm-3" />
            <div className="col-sm-3" />
          </div>
        </Body>
        <Footer>
          <CancelModal width="100px" bstrap="btn-danger">ปิด</CancelModal>
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
            }
            .bold-text{
              font-weight:bold;
            }
            .red-label{
              color:#c82333;
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

export default CustFilterModal;
