import React from 'react';

const Header = ({ title }) => (
  <div className="modal-header">
    <h5 className="modal-title" id="lenkilaModalLongTitle">{ title }</h5>
    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    <style jsx>{`
      .modal-header{
        border-bottom:none;
        .close {
          margin:-1rem -1rem -1rem -1rem;
        } 
      }
      .modal-title{
        margin-left:auto;
        margin-right:auto;
        font-weight:900;
        font-size: 1.5rem;
      }
    `}
    </style>
  </div>
);

export default Header;
