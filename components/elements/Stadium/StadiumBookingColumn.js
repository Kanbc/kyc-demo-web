import React from 'react';
import { StadiumBookingColumnItem, BookingEditModal, Constant } from '../../../components';

const StadiumBookingColumn = ({ title, bookings }) => {

  return (
    <div className="stadium-booking-column card text-center">
      <div className="card-header">
        สนาม {title}
      </div>
      <ul className="list-group list-group-flush">
        {bookings.length > 0 && bookings.map(booking => {
          return (
            <li className={`list-group-item ${booking.color}`} key={booking.id} data-toggle="modal" data-target={`#edit-booking-modal-${booking.id}`}>
              <StadiumBookingColumnItem booking={booking} />
            </li>
          );
        })}
        {bookings.length === 0 && <p style={{margin: '30px'}}>ไม่มีการจองในเวลานี้</p>}
      </ul>
      <div className="card-footer text-muted">
        {bookings && bookings.map(booking => {
          return (
            <BookingEditModal
              key={booking.id}
              title="ข้อมูลการจอง"
              type={`edit-booking-modal-${booking.id}`}
              startTime={booking.start}
              endTime={booking.end}
              resourceId={booking.resourceId}
            />
          );
        })}
      </div>
      <style jsx>{`
        .stadium-booking-column {
          width: 100%;
          max-height: 500px;
          border: 1px solid #ddd;
          border-radius: 5px;
          margin-bottom: 20px;
        }
        .list-group {
          overflow-y: scroll;
          min-height: 250px;
          max-height: 250px;
          -webkit-overflow-scrolling: touch;
          .list-group-item.green{
            background-color: rgba(40, 167, 69, 0.8);
          }
          .list-group-item.red{
            background-color: rgba(200, 35, 51, 0.8);
          }
          .list-group-item.grey{
            background-color: ${Constant.Grey};
          }
        }
        .list-group-item {
          color: white;
        }
      `}
      </style>
    </div>
  );
};

export default StadiumBookingColumn;
