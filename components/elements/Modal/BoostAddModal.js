import React, { Component } from 'react';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import { CancelModal, Button, Constant, ButtonModal, DiscountAddModal } from '../..';

class BoostAddModal extends Component {
  constructor(props) {
    super(props);
    this.state = { boostType: 'buffet' };

    this.changeBoostType = this.changeBoostType.bind(this);
  }

  changeBoostType(el) {
    this.setState({
      boostType: el.target.value,
    });
  }

  render() {
    return (
      <DefaultModal title={this.props.title} type={this.props.type} percentWidth="90">
        <Body>
          <div className="row">
            <div className="col-sm-1">
              <p>ประเภท</p>
            </div>
            <div className="col-sm-2">
              <select className="custom-select" onChange={this.changeBoostType} defaultValue={this.state.boostType}>
                <option value="boost">Boosts</option>
                <option value="buffet">Buffet</option>
              </select>
            </div>
            <div className="col-sm-9" />
          </div>
          {!(this.state.boostType == 'buffet') && <p className="nonote">บริการนี้ยังไม่เปิดให้บริการ</p>}
          {this.state.boostType == 'buffet' &&
          <div>
          <div className={this.state.boostType === 'buffet' ? 'row d-none' : 'row'}>
            <div className="col-sm-1">
              <p>ชื่อ</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="firstname" />
            </div>
            <div className="col-sm-1">
              <p>เบอร์โทร*</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="firstname" />
            </div>
            <div className="col-sm-1">
              <p>ประเภทลูกค้า</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="firstname" />
            </div>
          </div>
          <div className="row bottom-border">
            <div className={this.state.boostType === 'buffet' ? 'col-sm-1' : 'col-sm-1 d-none'}>
              <p>ราคาคนละ</p>
            </div>
            <div className={this.state.boostType === 'buffet' ? 'col-sm-2' : 'col-sm-2 d-none'}>
              <input type="text" className="form-control" id="firstname" />
            </div>
            <div className="col-sm-1">
              <p>จำนวนผู้เล่น</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="firstname" />
            </div>
            <div className={this.state.boostType === 'buffet' ? 'col-sm-6' : 'col-sm-9'}>
              <div className="space-r">
                <Button width="120px" color={Constant.Blue}>
                  แสดงผู้เล่น
                </Button>
              </div>
              <div className={this.state.boostType === 'buffet' ? 'space-r d-none' : 'space-r'}>
                <Button width="120px" color={Constant.Blue}>
                  ดูข้อมูลลูกค้า
                </Button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1">
              <p>จำนวนสนาม</p>
            </div>
            <div className="col-sm-2">
              <Button width="120px" color={Constant.Green}>
                จองเพิ่ม/แก้ไข
              </Button>
            </div>
            <div className={this.state.boostType === 'buffet' ? 'col-sm-1 d-none' : 'col-sm-1'}>
              <p>ค่า Com.</p>
            </div>
            <div className={this.state.boostType === 'buffet' ? 'col-sm-1 d-none' : 'col-sm-1'}>
              <input type="text" className="form-control red-text" id="firstname" defaultValue="20%" />
            </div>
            <div className={this.state.boostType === 'buffet' ? 'col-sm-1 d-none' : 'col-sm-1'}>
              <input type="text" className="form-control red-text" id="firstname" defaultValue="200" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="table-frame">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">สนาม</th>
                      <th scope="col">เวลา</th>
                      <th scope="col">ราคารวม</th>
                    </tr>
                  </thead>
                  <tbody className={this.state.boostType === 'buffet' ? '' : 'red-text'}>
                    <tr>
                      <th scope="row">1</th>
                      <td>18.00-22.00</td>
                      <td>1,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-sm-2" />
            <div className="col-sm-4">
              สินค้า To be done.
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1">
              <p>ค่าสนามรวม</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="firstname" />
            </div>
            <div className="col-sm-1">
              <p>ค่ามัดจำ</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="firstname" />
            </div>
            <div className="col-sm-1">
              <p>ค่าสินค้า</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="firstname" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1">
              <p>ส่วนลดแอพ</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="firstname" />
            </div>
            <div className="col-sm-1">
              <p>ส่วนลดอื่นๆ</p>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="firstname" />
            </div>
            <div className="col-sm-6">
              <div className="space-r">
                <ButtonModal color={Constant.Blue} width="120px" modalName="#discount2">
                  ส่วนลด
                  <DiscountAddModal title="ส่วนลด" type="discount2" fields={this.fields} />
                </ButtonModal>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <p>สร้างโดย เอ</p>
            </div>
            <div className="col-sm-3">
              <p>เก็บเงิน เอ</p>
            </div>
            <div className="col-sm-6 left-side">
              <div className={this.state.boostType === 'buffet' ? 'space-l' : 'space-l d-none'}>
                <CancelModal width="120px" bstrap="btn-danger" >
                  ยกเลิกการจอง
                </CancelModal>
              </div>
              <div className="space-l">
                <Button width="120px" bstrap="btn-success">
                  ชำระเงิน
                </Button>
              </div>
            </div>
          </div>
          </div>
          }
        </Body>
        <style jsx>
          {` 
            .nonote{
              text-align: center;
              color: ${Constant.Grey};
              height:300px;
            }
            .row {
              margin-top: 10px;
              margin-bottom: 20px;
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
            .table-frame{
              display: block;
              height: 170px;
              overflow-y: scroll;
              width: 100%;
            }
            .red-text{
              color: ${Constant.Red}
            }
            .left-side{
              text-align:right;
            }
            .space-r{
              display: inline-block;
              margin-right:10px;
            }
            .space-l{
              display: inline-block;
              margin-left:10px;
            }
            .bottom-border {
              border-bottom: 1px solid #bdc3c7;
              padding-bottom: 35px;
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

export default BoostAddModal;
