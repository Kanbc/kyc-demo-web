import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { StadiumBookingTimetable } from './../../index';

const StadiumBookingModal = ({ isOpen, setIsOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      shouldCloseOnOverlayClick
    >

      <div className="modal-header">
        <h4 className="modal-title">เวลาจองสนาม</h4>
        <button
          type="button"
          className="btn btn-danger"
          data-dismiss="modal"
          aria-label="Close"
          onClick={() => setIsOpen(false)}
        >
          <i className="fa fa-times" />
        </button>
      </div>

      <div className="modal-body">
          {/* Name and Phone */}
          <div className="form-row">
            <div className="form-group col-md-3">
              <label htmlFor="staticEmail">ชื่อ:</label>
              <input type="text" readOnly className="form-control" id="staticEmail" value="คุณเอ" />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="phone">เบอร์โทรศัพท์:</label>
              <input type="text" readOnly className="form-control" id="inputPassword" placeholder="0923456234" />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="phone">ประเภทข้อมูลลูกค้า:</label>
              <input type="text" readOnly className="form-control" id="inputPassword" placeholder="ขาจร" />
            </div>
          </div>

          {/* Players count and customer type */}
          <div className="form-row">
            <div className="form-group col-md-3">
              <label htmlFor="staticEmail">จำนวนผู้เล่น:</label>
              <input type="text" readOnly className="form-control" id="staticEmail" value="4 คน" />
            </div>
            <div className="form-group col-auto">
              <label htmlFor="user">&nbsp;</label>
              <div className="form-row">
                <div className="col-auto">
                  <button type="submit" className="btn btn-primary" data-toggle="collaspe" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    <i className="fa fa-users mr-2" />แสดงผู้เล่น
                  </button>
                  <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-primary">ดูข้อมูลคุณเอ</button>
                </div>
              </div>
            </div>

          </div>
        <hr />
        <div className="row">
          {/* All stadium */}
          <div className="col-md-6">
            <h5 className="mb-3">จำนวนสนาม</h5>
            <StadiumBookingTimetable />
            <button className="btn btn-secondary mr-2">
              <i className="fa fa-pencil mr-2" />แก้ไข
            </button>
            <button className="btn btn-success">
              <i className="fa fa-plus mr-2" />จองเพิ่ม
            </button>
          </div>

          {/* Products  */}
          <div className="col-md-6">
            <h5 className="mb-3">สินค้า</h5>
            <p>To be done..</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .close {
          font-size: 20px;
        }
      `}</style>
    </Modal>
  );
};

StadiumBookingModal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

StadiumBookingModal.defaultProps = {
  isOpen: false,
  setIsOpen: () => console.log('StadiumBookingModal: no setIsOpen prop'),
};

export default StadiumBookingModal;
