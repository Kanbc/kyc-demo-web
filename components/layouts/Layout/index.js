import React from 'react';
import Head from 'next/head';
import moment from 'moment';
import Footer from './Footer';

moment.locale('th');

const Layout = ({ children, title = 'AFM' }) => (
  <div className="root">
    <Head>
      <title>{`Codefin - ${title}`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      <link rel='shortcut icon' type='image/x-icon' href='/static/img/favicon/favicon.ico' />
      <link rel="apple-touch-icon" sizes="180x180" href="/static/img/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/img/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/img/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/static/img/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/static/img/favicon/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet" />
      <link href="/static/antd/dist/antd.min.css" rel="stylesheet" />
      <link href="/static/custom.css" rel="stylesheet" />
    </Head>
    <div className="page-container">
      <div className="boxHeader">
        <h1><a href="/">Automatic Filling Machine (IDCard)</a></h1>
      </div>
      {children}
    </div>
    <Footer />
    <style jsx global>{`
      body {
        margin:0;
        padding:0;
      }
    `}</style>
    <style jsx>{`
      .root {
        position:relative;
        width: 100%;
        min-height: 100vh;
        background-color:#000;
      }
      .boxHeader{
        display:inline-flex;
      }
      h1{
        margin: 10px auto 10px auto;
        border-bottom: solid 1px #fff;
        padding-bottom: 15px;
        a{
          color:#fff;
          text-decoration: none;
          font-family: montserrat;
          font-size: 22px;
          font-weight: 500;
        }
      }
      .page-container {
        text-align:center;
        padding: 25px 25px 100px 25px;
      }
    `}
    </style>
  </div>
);

export default Layout;
