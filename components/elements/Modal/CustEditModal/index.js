import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import MemberModal from './MemberModal';
import HistoryModal from './HistoryModal';
import DefaultModal from './../DefaultModal';
import Body from './../DefaultModal/Body';
import Footer from './../DefaultModal/Footer';
import { CancelModal, Button, Constant, ButtonModal } from '../../..';

class CustEditModal extends Component {
  constructor(props) {
    super(props);
    this.state = { isEdit: false, currentDate: moment() };

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
    const userDetail = this.props.userData;
    let button1 = null;
    let button2 = null;
    let button3 = null;
    if (this.state.isEdit === true) {
      button1 = <Button width={Constant.Buttons.default} bstrap="btn-success" >บันทึก</Button>;
      button2 = <CancelModal width={Constant.Buttons.default} bstrap="btn-danger" onClick={() => this.cancelEditForm()}>ยกเลิก</CancelModal>;
      button3 = null;
    } else {
      button1 = <ButtonModal color={Constant.Orange} width={Constant.Buttons.default} modalName="#history">ประวัติ<HistoryModal title="ประวัติ" type="history" /></ButtonModal>;
      button2 = <Button width={Constant.Buttons.default} color={Constant.Blue} bstrap="btn-primary" onClick={() => this.editForm()}>แก้ไข</Button>;
      button3 = <CancelModal width={Constant.Buttons.default} bstrap="btn-danger" >ลบ</CancelModal>;
    }
    return (
      <DefaultModal title={this.props.title} type={this.props.type} percentWidth="70" >
        <Body>
          <div className="row">
            <div className="col-sm-2">
              <p className="bold-text">ชื่อเล่น*</p>
            </div>
            <div className="col-sm-2">
              <p className={this.state.isEdit ? 'd-none' : ''} >{userDetail.firstname}</p>
              <input type="text" className={this.state.isEdit ? 'form-control' : 'form-control d-none'} id="firstname" defaultValue={userDetail.firstname} />
            </div>
            <div className="col-sm-2">
              <p className="bold-text">เบอร์โทรศัพท์*</p>
            </div>
            <div className="col-sm-2">
              <p>{userDetail.lastname}</p>
            </div>
            <div className="col-sm-2">
              <p className="bold-text">วันเกิด</p>
            </div>
            <div className="col-sm-2">
              <p className={this.state.isEdit ? 'd-none' : ''}>{moment(this.state.currentDate, 'DD/MM/YYYY').format('DD/MM/YYYY')}</p>
              <div className={this.state.isEdit ? '' : 'd-none'}>
                <DatePicker
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  disabledKeyboardNavigation
                  selected={this.state.currentDate}
                  onChange={currentDate => this.setState({ currentDate })}
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p className="bold-text">ชื่อจริง</p>
            </div>
            <div className="col-sm-2">
              <p className={this.state.isEdit ? 'd-none' : ''}>{userDetail.username}</p>
              <input type="text" className={this.state.isEdit ? 'form-control' : 'form-control d-none'} id="nickname" defaultValue={userDetail.username} />
            </div>
            <div className="col-sm-2">
              <p className="bold-text">นามสกุล</p>
            </div>
            <div className="col-sm-2">
              <p className={this.state.isEdit ? 'd-none' : ''}>xxxx</p>
              <input type="text" className={this.state.isEdit ? 'form-control' : 'form-control d-none'} id="nickname" defaultValue="xxxx" />
            </div>
            <div className="col-sm-2">
              <p className="bold-text">เพศ</p>
            </div>
            <div className="col-sm-2">
              <p className={this.state.isEdit ? 'd-none' : ''}>ชาย</p>
              <select className={this.state.isEdit ? 'custom-select' : 'custom-select d-none'} defaultValue="0">
                <option value="0">ชาย</option>
                <option value="1">หญิง</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p className="bold-text">หน้าที่:</p>
            </div>
            <div className="col-sm-2">
              <p>{userDetail.username}</p>
            </div>
            <div className="col-sm-2">
              <p className="bold-text">ความสัมพันธ์:</p>
            </div>
            <div className="col-sm-2">
              <p>ขาประจำ</p>
            </div>
            <div className="col-sm-2">
              <p className="bold-text">Free Credits:</p>
            </div>
            <div className="col-sm-2">
              <p className={this.state.isEdit ? 'd-none' : ''}>50</p>
              <input type="text" className={this.state.isEdit ? 'form-control' : 'form-control d-none'} id="nickname" defaultValue="50" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p className="bold-text">ประเภท:</p>
            </div>
            <div className="col-sm-2">
              <p>{userDetail.username}</p>
            </div>
            <div className="col-sm-2">
              <ButtonModal color={Constant.Orange} width={Constant.Buttons.default} modalName="#member">
                Member
                <MemberModal title="Member" type="member" />
              </ButtonModal>
            </div>
            <div className="col-sm-2" />
            <div className="col-sm-2" />
            <div className="col-sm-2" />
          </div>
          <div className="row">
            <div className="col-sm-2">
              <p className="bold-text">โน้ต</p>
            </div>
            <div className="col-sm-10">
              <textarea className="form-control" id="note" rows="3" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-10" />
            <div className="col-sm-2">
              <label className={this.state.isEdit ? 'form-check-label red-label' : 'form-check-label red-label d-none'} htmlFor="inlineCheckbox5">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="0" />
                Blacklist
              </label>
            </div>
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
            margin-bottom:30px;
          }
          .red-label{
            color:#c82333;
          }
          .bold-text{
            font-weight:bold;
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

export default CustEditModal;
