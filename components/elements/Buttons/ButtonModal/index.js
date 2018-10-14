import React from 'react';

const ButtonModal = ({
  children,
  color,
  width,
  modalName,
  bstrap,
  onClick,
}) => (
  <div>
    <button type="button" className={`btn ${bstrap}`} data-toggle="modal" data-target={modalName} onClick={onClick} >
      {children[0]}
    </button>
    {children[1]}
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
  </div>
);

export default ButtonModal;
