import React from 'react';

const Footer = ({ children }) => (
  <div className="modal-footer">
    {children}
    <style jsx>{`
      .modal-footer{
        justify-content: center;
        padding-top:0px;
        padding-bottom:40px;
        border-top:none;
      }
      .modal-footer>:not(:last-child){
        margin-right: 2rem;
      }
      .modal-footer>:not(:first-child){
        margin-left: 2rem;
      }
    `}
    </style>
  </div>
);

export default Footer;
