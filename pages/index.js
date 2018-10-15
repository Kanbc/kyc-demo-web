import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import moment from 'moment';
import { Layout } from '../components';
import { setFieldData } from '../store';

class Index extends Component {
  state = {
    fields: moment(),
  }

  // componentDidMount() {
  //   this.props.dispatch(setFieldData(this.fields));
  // }

  render() {
    return (
      <Layout title="Automatic Filling Machine (IDCard)">
        <div className="bodyBox">
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
            .bodyBox {
              padding-top:50px;
              
            }
          `}
        </style>
        <style jsx global>{`
          body {
            color:#fff;
          }
        `}</style>
      </Layout>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     fields: state.fields,
//   }
// }

// export default connect(mapStateToProps)(Index);
export default Index;
