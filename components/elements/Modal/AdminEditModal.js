import React, { Component } from 'react';
import { connect } from 'react-redux';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import Footer from './DefaultModal/Footer';
import { CancelModal, Button, Constant } from '../..';
import { editAdminData } from '../../../store';

class AdminEditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: this.props.userData.firstname,
      lastname: this.props.userData.lastname,
      password: this.props.userData.password,
      email: this.props.userData.email,
      tel: this.props.userData.tel,
      role: this.props.userData.role, 

      isEdit: false, 
      changePass: false 
    };

    this.editForm = this.editForm.bind(this);
    this.cancelEditForm = this.cancelEditForm.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.cancelChangePassword = this.cancelChangePassword.bind(this);
  }

  changePassword() {
    this.setState({ changePass: true });
  }

  cancelChangePassword() {
    this.setState({ changePass: false });
  }

  editForm() {
    this.setState({isEdit: true});
  }

  cancelEditForm() {
    this.setState({
      isEdit: false,
    });
  }

  render() {
    let button1 = null;
    let button2 = null;
    if (this.state.isEdit === true) {
      button1 = <Button width="100px" bstrap="btn-success" onClick={() => {
        // validation
        // add user api
        this.props.dispatch(editAdminData({
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          password: this.state.password,
          email: this.state.email,
          tel: this.state.tel,
          role: this.state.role,
        }));

        this.cancelEditForm();
      }}>บันทึก</Button>;
      button2 = <CancelModal width="100px" color={Constant.Red} onClick={() => this.cancelEditForm()}>ยกเลิก</CancelModal>;
    } else {
      button1 = <Button width="100px" color={Constant.Orange} onClick={this.editForm}>แก้ไข</Button>;
      button2 = <CancelModal width="100px" bstrap="btn-danger" >ยกเลิก</CancelModal>;
    }
    return (
      <DefaultModal title={this.props.title} type={this.props.type} percentWidth="70" >
        <Body>
          <div className="row">
            <div className="col-sm-1">
              <p className="bold-text">ชื่อ</p>
            </div>
            <div className="col-sm-3">
              <p className={this.state.isEdit ? 'd-none' : ''} >{this.state.firstname}</p>
              <input type="text" className={this.state.isEdit ? 'form-control' : 'form-control d-none'}  id="firstname" defaultValue={this.state.firstname} onChange={e => this.setState({ firstname: e.target.value })} />
            </div>
            <div className="col-sm-2">
              <p className="bold-text">นามสกุล</p>
            </div>
            <div className="col-sm-3">
              <p className={this.state.isEdit ? 'd-none' : ''}>{this.state.lastname}</p>
              <input type="text" className={this.state.isEdit ? 'form-control' : 'form-control d-none'} id="lastname" defaultValue={this.state.lastname} onChange={e => this.setState({ lastname: e.target.value })} />
            </div>
            <div className="col-sm-1">
              <p className="bold-text">Role</p>
            </div>
            <div className="col-sm-2">
              <p className={this.state.isEdit ? 'd-none' : ''}>{this.state.role}</p>
              <select className={this.state.isEdit ? 'form-control' : 'form-control d-none'} id="role" defaultValue={this.state.role} onChange={e => this.setState({ role: e.target.value })} >
                <option>Owner</option>
                <option>Admin</option>
                <option>Staff</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1">
              <p className="bold-text">Email</p>
            </div>
            <div className="col-sm-3">
              <p className={this.state.isEdit ? 'd-none' : ''}>{this.state.email}</p>
              <input type="text" className={this.state.isEdit ? 'form-control' : 'form-control d-none'} id="email" defaultValue={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
            </div>
            <div className="col-sm-2">
              <p className="bold-text">เบอร์โทร</p>
            </div>
            <div className="col-sm-3">
              <p className={this.state.isEdit ? 'd-none' : ''}>{this.state.tel}</p>
              <input type="text" className={this.state.isEdit ? 'form-control' : 'form-control d-none'} id="tel" defaultValue={this.state.tel} onChange={e => this.setState({ tel: e.target.value })} />
            </div>
            <div className="col-sm-1" />
            <div className="col-sm-2" />
          </div>
          <div className="row">
            <div className="col-sm-1">
              <p className="bold-text">Password</p>
            </div>
            <div className={this.state.changePass ? 'col-sm-3' : 'col-sm-3'}>
              <input type="text" className={this.state.changePass ? 'form-control' : 'form-control d-none'} id="password" onChange={e => this.setState({ password: e.target.value })} />
              <Button width="100%" color={Constant.Blue} onClick={this.changePassword} bstrap={this.state.changePass ? 'd-none' : ''}>เปลี่ยนรหัส</Button>
            </div>
            <div className="col-sm-2">
              <Button width="100%" color={Constant.Green} onClick={this.cancelChangePassword} bstrap={this.state.changePass ? '' : 'd-none'} >บันทึก</Button>
            </div>
            <div className={this.state.changePass ? 'col-sm-2' : 'col-sm-1'}>
              <Button width="100%" color={Constant.Red} onClick={this.cancelChangePassword} bstrap={this.state.changePass ? '' : 'd-none'} >ยกเลิก</Button>
            </div>
            <div className="col-sm-1" />
            <div className="col-sm-3" />
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
            padding:10px;
            p{
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              left: 0;
              right: 0;
              text-align: center;
            }
          }
          .bold-text{
            font-weight:bold;
            margin-bottom:30px;
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

export default connect()(AdminEditModal);
