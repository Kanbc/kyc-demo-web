import React from 'react';

const PageTitle = ({ title }) => (
  <div className="row title">
    <p>{title}</p>
    <style jsx>{`
      .title{
        text-align:center;
        margin: 25px 0px 0px 0px;
        p{
          margin-bottom:20px;
          font-size:1.5rem;
          font-weight:bold;
          margin-left:auto;
          margin-right:auto;
        }
      }
    `}
    </style>
  </div>
);

export default PageTitle;
