import React from 'react';
import DefaultModal from './../../DefaultModal';
import Body from './../../DefaultModal/Body';
import Footer from './../../DefaultModal/Footer';
import { CancelModal } from '../../../..';

const MemberModal = ({ title, type }) => (
  <DefaultModal title={title} type={type} percentWidth="70" >
    <Body>
      <div className="row">
        <div className="col-sm-2">
          <p className="bold-text">Default:</p>
        </div>
        <div className="col-sm-4">
          <p>ทั่วไป</p>
        </div>
        <div className="col-sm-2">
          <p className="bold-text">ปัจจุบัน:</p>
        </div>
        <div className="col-sm-4">
          <p>Silver</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2">
          <p className="bold-text">จำนวนชั่วโมง:</p>
        </div>
        <div className="col-sm-4">
          <p>6</p>
        </div>
        <div className="col-sm-2">
          <p className="bold-text">หมดอายุ:</p>
        </div>
        <div className="col-sm-4">
          <p>10/04/61</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2">
          <p className="bold-text">Next :</p>
        </div>
        <div className="col-sm-4">
          <p>-</p>
        </div>
        <div className="col-sm-2" />
        <div className="col-sm-4" />
      </div>
    </Body>
    <Footer>
      <CancelModal width="100px" bstrap="btn-danger" >
        ปิด
      </CancelModal>
    </Footer>
    <style jsx>{`
      .bold-text{
        font-weight:bold;
      }
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
          padding-bottom:30px;
          padding-top:0px;
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

export default MemberModal;
