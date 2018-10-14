import React from 'react';
import DefaultModal from './../../DefaultModal';
import Body from './../../DefaultModal/Body';
import Footer from './../../DefaultModal/Footer';
import { CancelModal } from '../../../..';

const HistoryModal = ({ title, type }) => (
  <DefaultModal title={title} type={type} percentWidth="70" >
    <Body customStyle="overflow-y:scroll;margin-bottom:20px;max-height: 300px;">
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="hide1">วันเวลา</th>
              <th scope="col">รายการ</th>
              <th scope="col">ช่องทาง</th>
              <th scope="col" className="hide2">ราคา</th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td className="hide1">10/01/61</td>
              <td>เล่นกีฬา</td>
              <td>เงินสด</td>
              <td className="hide2">1,000</td>
            </tr>
            <tr >
              <td className="hide1">10/01/61</td>
              <td>เล่นกีฬา</td>
              <td>เงินสด</td>
              <td className="hide2">1,000</td>
            </tr>
            <tr >
              <td className="hide1">10/01/61</td>
              <td>เล่นกีฬา</td>
              <td>เงินสด</td>
              <td className="hide2">1,000</td>
            </tr>
            <tr >
              <td className="hide1">10/01/61</td>
              <td>เล่นกีฬา</td>
              <td>เงินสด</td>
              <td className="hide2">1,000</td>
            </tr>
            <tr >
              <td className="hide1">10/01/61</td>
              <td>เล่นกีฬา</td>
              <td>เงินสด</td>
              <td className="hide2">1,000</td>
            </tr>
            <tr >
              <td className="hide1">10/01/61</td>
              <td>เล่นกีฬา</td>
              <td>เงินสด</td>
              <td className="hide2">1,000</td>
            </tr>
            <tr >
              <td className="hide1">10/01/61</td>
              <td>เล่นกีฬา</td>
              <td>เงินสด</td>
              <td className="hide2">1,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Body>
    <Footer>
      <CancelModal width="100px" bstrap="btn-danger" >
        ปิด
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
        th,td{
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

export default HistoryModal;
