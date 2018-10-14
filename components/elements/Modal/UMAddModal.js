import React, { Component } from 'react';
import { connect } from 'react-redux';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import Footer from './DefaultModal/Footer';
import { CancelModal, Button } from '../..';
import { addUsersData } from '../../../store';

class UMAddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      nickname: '',
      userid: '',
      password: '',
      email: '',
      tel: '',
      role: "Owner",
      note: ''
    };

    this.cancelAddUser = this.cancelAddUser.bind(this);
    this.addNewUser = this.addNewUser.bind(this);
  }

  cancelAddUser() {
    this.setState({
      firstname: '',
      lastname: '',
      nickname: '',
      userid: '',
      password: '',
      email: '',
      tel: '',
      role: "Owner",
      note: ''
    });
  }

  addNewUser() {
    // validation
    // add user api
    this.props.dispatch(addUsersData({
      id: this.state.userid,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      nickname: this.state.nickname,
      username: this.state.userid,
      password: this.state.password,
      email: this.state.email,
      tel: this.state.tel,
      role: this.state.role,
      note: this.state.note
    }));
    this.cancelAddUser();
  }

  render() {
    return (
      <DefaultModal title={this.props.title} type={this.props.type} percentWidth="70" >
        <Body>
          <div className="row">
            <div className="col-sm-1">
              <p>ชื่อ</p>
            </div>
            <div className="col-sm-3">
              <input type="text" className="form-control" id="firstname" value={this.state.firstname} onChange={e => this.setState({ firstname: e.target.value })} />
            </div>
            <div className="col-sm-2">
              <p>นามสกุล</p>
            </div>
            <div className="col-sm-3">
              <input type="text" className="form-control" id="lastname" value={this.state.lastname} onChange={e => this.setState({ lastname: e.target.value })} />
            </div>
            <div className="col-sm-1">
              <p>ชื่อเล่น</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="nickname" value={this.state.nickname} onChange={e => this.setState({ nickname: e.target.value })} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1">
              <p>ID</p>
            </div>
            <div className="col-sm-3">
              <input type="text" className="form-control" id="userid" value={this.state.userid} onChange={e => this.setState({ userid: e.target.value })} />
            </div>
            <div className="col-sm-2">
              <p>Password</p>
            </div>
            <div className="col-sm-3">
              <input type="text" className="form-control" id="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
            </div>
            <div className="col-sm-1" />
            <div className="col-sm-2" />
          </div>
          <div className="row">
            <div className="col-sm-1">
              <p>Email</p>
            </div>
            <div className="col-sm-3">
              <input type="text" className="form-control" id="email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
            </div>
            <div className="col-sm-2">
              <p>เบอร์โทร</p>
            </div>
            <div className="col-sm-3">
              <input type="text" className="form-control" id="tel" value={this.state.tel} onChange={e => this.setState({ tel: e.target.value })} />
            </div>
            <div className="col-sm-1">
              <p>Role</p>
            </div>
            <div className="col-sm-2">
              <select className="form-control" id="role" value={this.state.role} onChange={e => this.setState({ role: e.target.value })} >
                <option>Owner</option>
                <option>Admin</option>
                <option>Staff</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1">
              <p>โน้ต</p>
            </div>
            <div className="col-sm-11">
              <textarea className="form-control" id="note" rows="3" value={this.state.note} onChange={e => this.setState({ note: e.target.value })} />
            </div>
          </div>
        </Body>
        <Footer>
          <CancelModal width="100px" bstrap="btn-success" onClick={() => this.addNewUser()} >
            สร้าง
          </CancelModal>
          <CancelModal width="100px" bstrap="btn-danger" onClick={() => this.cancelAddUser()} >
            ยกเลิก
          </CancelModal>
        </Footer>
        <style jsx>{`
          .row{
            margin-top:10px;
            margin-bottom:40px;
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

export default connect()(UMAddModal);
