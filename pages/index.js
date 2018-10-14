import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Layout, DatePickerButton, StadiumBookingColumn, Loader, Constant } from '../components';
import { setFieldData } from '../store';

class Index extends Component {
  state = {
    currentDate: moment(),
  }

  render() {
    const { fields } = this.props;
    console.log('render!', fields);

    return (
      <Layout title="Automatic Filling Machine (IDCard)">
        <div className="d-flex align-items-center header">
          <h5 style={{ margin: '0 10px' }}>รายการของ : </h5>
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
