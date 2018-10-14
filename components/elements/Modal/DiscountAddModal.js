import React, { Component } from 'react';
import { connect } from 'react-redux';
import DefaultModal from './DefaultModal';
import Body from './DefaultModal/Body';
import Footer from './DefaultModal/Footer';
import { Button, Constant, DiscountForm } from '../..';
import { setThisBookingDiscount, addThisBookingDiscount } from '../../../store';

class DiscountAddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdding: false,
      detail: null,
      price: null,
    };

    this.addDiscount = this.addDiscount.bind(this);
    this.cancelAddDiscount = this.cancelAddDiscount.bind(this);
    this.exitDiscountModal = this.exitDiscountModal.bind(this);
  }

  addDiscount() {
    this.setState({ isAdding: true });
  }

  cancelAddDiscount() {
    this.setState({
      isAdding: false,
      detail: null,
      price: null,
    });
  }

  exitDiscountModal(){
    this.setState({
      isAdding: false,
      detail: null,
      price: null,
    });
    // Jquery hide specific modal
    $("#" + this.props.type).modal('hide');
  }

  componentDidMount() {
    this.props.dispatch(setThisBookingDiscount(this.discounts));
  }

  // [GET] discounts of this day
  discounts = discounts();

  render() {
    const { discounts } = this.props;
    console.log('render!', discounts);
    console.log('render!', this.state.isAdding);
    return (
      <DefaultModal title={this.props.title} type={this.props.type} percentWidth="60">
        <Body>
          {(!discounts || discounts.length == 0 && !this.state.isAdding) && <p className="nonote">กดปุ่ม เพิ่ม เพื่อเพิ่มส่วนลด</p>}
          {discounts && discounts.map(discount => {
            return (
              <DiscountForm key={discount.id} discount={discount} />
            );
          })}
          {this.state.isAdding &&
            <div>
              <div className="row">
                <div className="col-sm-2">
                  <p className="bold-text">รายละเอียด</p>
                </div>
                <div className="col-sm-3">
                <input type="text" className="form-control" id="detail" defaultValue={this.state.detail} onChange={e => this.setState({ detail: e.target.value })} />
                </div>
                <div className="col-sm-2">
                  <p className="bold-text">ลดราคา</p>
                </div>
                <div className="col-sm-3">
                <input type="text" className="form-control" id="price" defaultValue={this.state.price} onChange={e => this.setState({ price: e.target.value })}/>
                </div>
                <div className="col-sm-2">
                  <Button width="80px" bstrap="btn-success" onClick={() => {
                    // validation
                    // add note api
                    this.props.dispatch(addThisBookingDiscount({
                      id: moment().format('dd/MM/YY_hh:mm:ss'),
                      detail: this.state.detail,
                      price: this.state.price,
                    }));

                    this.cancelAddDiscount();
                  }}>บันทึก</Button>
                </div>
              </div>
            </div>
          }
        </Body>
        <Footer>
          <Button width="100px" bstrap="btn-primary" color={Constant.Blue} onClick={this.addDiscount}>
            เพิ่ม
          </Button>
          <Button width="100px" color={Constant.Red} onClick={this.exitDiscountModal}>
            ยกเลิก
          </Button>
        </Footer>
        <style jsx>
          {` 
            .bodyNote{
              max-height:400px;
              width:100%;
              overflow-y: scroll;
              overflow-x: visible;
            }
            .bold-text{
              font-weight:bold;
            }
            .nonote{
              text-align: center;
              color: ${Constant.Grey};
            }
            .row {
              margin-top: 10px;
              margin-bottom: 40px;
              p {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                left: 0;
                right: 0;
                text-align: left;
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

function discounts() {
  const discounts = [
    {
      id: 1,
      detail: 'คูปอง',
      price: 120,
    },
    {
      id: 2,
      detail: 'ส่วนลดวันเสาร์',
      price: 200,
    },
  ];
  return discounts;
}

function mapStateToProps(state) {
  return {
    discounts: state.discounts,
  }
}

export default connect(mapStateToProps)(DiscountAddModal);
