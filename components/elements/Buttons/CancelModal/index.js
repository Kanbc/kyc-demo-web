import React from 'react';

const CancelModal = ({
  children,
  color,
  width,
  bstrap,
  onClick,
}) => (
  <button type="button" className={`btn ${bstrap}`} data-dismiss="modal" onClick={onClick} >
    {children}
    <style jsx>{`
      button{
        background-color: ${color};
        cursor:pointer;
        width: ${width};
        color: #ffffff;
      }
      @media (max-width: 576px) { 
        button{
          width: 50px;
        }
      }
    `}
    </style>
  </button>
);

export default CancelModal;
