import React from 'react';
import Head from 'next/head';
import moment from 'moment';
import TopNavbar from './TopNavbar';

moment.locale('th');

const Layout = ({ children, title = 'Automatic Filling Machine (IDCard)' }) => (
  <div className="root">
    <Head>
      <title>{`Codefin - ${title}`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico' />
      <link rel="apple-touch-icon" sizes="180x180" href="/statics/img/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/statics/img/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/statics/img/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/statics/img/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/statics/img/favicon/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet" />
    </Head>
    <TopNavbar/>
    <div className="content d-flex flex-row">
      <div className="page-container">
        {children}
      </div>
    </div>
    <style jsx>{`
      .root {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
      }
      .page-container {
        padding: 25px 25px 100px 25px;
        overflow: hidden;
        width: calc(100% - 220px);
        height: 100vh; 
        overflow-y: scroll;
      }
      @media (max-width: 992px) { 
        .page-container {
          padding: 25px 25px 100px 25px;
          width: 100%;
        }
      }
      @media (max-width: 576px) { 
        .page-container {
          padding: 10px 10px 50px 10px;
          width: 100%;
        }
      }
    `}
    </style>
  </div>
);

export default Layout;
