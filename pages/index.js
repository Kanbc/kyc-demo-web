import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import moment from 'moment';
import { Layout } from '../components';
import { setFieldData } from '../store';

class Index extends Component {
  state = {
    currentDate: moment(),
  }

  render() {
    return (
      <Layout title="Automatic Filling Machine (IDCard)">
        <div>
          <Row>
            <Col span={12}>col-12</Col>
            <Col span={12}>col-12</Col>
          </Row>
          <Row>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
          </Row>
          <Row>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
          </Row>
        </div>
       
        <style jsx>
          {`
            .header {
              height: 60px;
            }
            .pick-td-btn {
              margin-left: 10px;
            }
            .stadiums-wrapper {
              height: calc(100vh - 150px);
              padding: 20px 0;
              overflow-y: scroll;
              -webkit-overflow-scrolling: touch;
              white-space: nowrap;
              padding-right: 5%;
              .item {
                margin-right: 15px;
                height: 100%;
              }
            }
          `}
        </style>
      </Layout>
    );
  }
}



function mapStateToProps(state) {
  return {
    fields: state.fields,
  }
}

export default connect(mapStateToProps)(Index);
