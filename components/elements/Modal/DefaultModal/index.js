import React from 'react';
import Header from './Header';

const DefaultModal = ({
  children,
  title,
  type,
  percentWidth,
}) => (
  <div className="modal fade" id={type} tabIndex="-1" role="dialog" aria-labelledby="lenkilaModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <Header title={title} />
          {children}
      </div>
    </div>
    <style jsx>{`
      .modal-dialog{
        max-width:${percentWidth}%;
      } 
      @media (max-width: 992px) { 
        .modal-dialog{
          max-width:${parseInt(percentWidth, 10) + 20}%;
        }
      }
      @media (max-width: 768px) { 
        .modal-dialog{
          max-width:${parseInt(percentWidth, 10) + 25}%;
        }
      }
      @media (max-width: 576px) { 
        .modal-dialog{
          max-width:${parseInt(percentWidth, 10) + 26}%;
        }
      }
    `}
    </style>
  </div>
);

export default DefaultModal;
