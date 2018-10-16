import React, { Component } from 'react';
import { Row, Col, Upload, Icon, Button, message, Form, Input } from 'antd';
import axios from 'axios';
import { Layout } from '../components';

const FormItem = Form.Item;

class Index extends Component {
  constructor() {
    super();
    this.state = {
      formLayout: 'vertical',
      // initial state
      initial_step: true,
      preview_step: false,
      uploading_step: false,
      result_case1: false,
      result_case2: false,

      // Form Value
      rotate_to: '',
      address_moo: '',
      address_num: '',
      address_soi: '',
      address_thanon: '',
      address_trok: '',
      bd_day_en: '',
      bd_day_th: '',
      bd_mon_en: '',
      bd_mon_th: '',
      bd_year_en: '',
      bd_year_th: '',
      card_no: '',
      date_of_issue_day_th: '',
      date_of_issue_mon_th: '',
      date_of_issue_year_th: '',
      district: '',
      expire_date_day_th: '',
      expire_date_mon_th: '',
      expire_date_year_th: '',
      firstname_en: '',
      firstname_th: '',
      lastname_en: '',
      lastname_th: '',
      prefix_en: '',
      prefix_th: '',
      province: '',
      religion: '',
      sub_district: '',
    };
  }

  handleChange = (info) => {
    beforeUpload(info.file.originFileObj);
    getBase64(info.file.originFileObj, imageUrl => this.setState({
      imageUrl,
      loading: false,
    }));

    this.setState({ 
      initial_step: false,
      preview_step: true,
      uploading_step: false,
      result_case1: false,
      result_case2: false,
    });
  }

  handleUpload = () => {
    this.setState({
      initial_step: false,
      preview_step: false,
      uploading_step: true,
      result_case1: false,
      result_case2: false,
    });

    const data = {
      instances: [{ b64: this.state.imageUrl.split(',')[1] }]
    }
    console.log(data);
    // AJAX
    var self = this;
    axios.post('http://35.187.230.68/ocr-idcard', data, 
      {
        headers: {
          'Content-Type': 'application/json'
      }
    }).then(function (response) {
      if (response.status == 200){
        console.log(response.data);
        
        // case anomally
        if (response.data.normally == 0){
          message.error(response.data.desc);
          self.setState({
            initial_step: false,
            preview_step: false,
            uploading_step: false,
            result_case1: true,
            result_case2: false,
          });
        }else{
          // case normaly
          message.success(response.data.desc);
          self.setState({
            initial_step: false,
            preview_step: false,
            uploading_step: false,
            result_case1: false,
            result_case2: true,

            rotate_to: response.data.rotate_to,
            address_moo: response.data.result.address_moo,
            address_num: response.data.result.address_num,
            address_soi: response.data.result.address_soi,
            address_thanon: response.data.result.address_thanon,
            address_trok: response.data.result.address_trok,
            bd_day_en: response.data.result.bd_day_en,
            bd_day_th: response.data.result.bd_day_th,
            bd_mon_en: response.data.result.bd_mon_en,
            bd_mon_th: response.data.result.bd_mon_th,
            bd_year_en: response.data.result.bd_year_en,
            bd_year_th: response.data.result.bd_year_th,
            card_no: response.data.result.card_no,
            date_of_issue_day_th: response.data.result.date_of_issue_day_th,
            date_of_issue_mon_th: response.data.result.date_of_issue_mon_th,
            date_of_issue_year_th: response.data.result.date_of_issue_year_th,
            district: response.data.result.district,
            expire_date_day_th: response.data.result.expire_date_day_th,
            expire_date_mon_th: response.data.result.expire_date_mon_th,
            expire_date_year_th: response.data.result.expire_date_year_th,
            firstname_en: response.data.result.firstname_en,
            firstname_th: response.data.result.firstname_th,
            lastname_en: response.data.result.lastname_en,
            lastname_th: response.data.result.lastname_th,
            prefix_en: response.data.result.prefix_en,
            prefix_th: response.data.result.prefix_th,
            province: response.data.result.province,
            religion: response.data.result.religion,
            sub_district: response.data.result.sub_district,
          });
        }        
      }else{
        message.error('Some thing went wrong with the server. Please call +6687-480-8376.');
      }
      
    });

  }

  render() {
    const uploadButton = (
      <div>
        <Icon style={{ color: '#fff'  }} type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Choose Your ID Card Photo</div>
        <style jsx>
          {`
            .ant-upload-text {
              color: #fff; 
              margin-top:20px;
            }
          `}
        </style>
      </div>
    );
    const imageUrl = this.state.imageUrl;

    return (
      <Layout title="Automatic Filling Machine (IDCard)">
        <div className="bodyBox">
          <Row>
            <Col span={8} />
            <Col span={8}>
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={true}
                fileList={false}
                onChange={this.handleChange}
              >
                {imageUrl ? <img id="c" src={imageUrl} alt="avatar" /> : uploadButton}
              </Upload>
            </Col>
            <Col span={8} />
          </Row>
          {/* Upload Button */}
          <Row style={{ marginTop: "30px" }} className={this.state.preview_step == true || this.state.uploading_step == true ? "show" : "hide" }>
            <Col span={8} />
            <Col span={8}>
              <Button 
                onClick={this.handleUpload}
                disabled={this.state.uploading_step}
                block>
                {this.state.uploading_step ? 'Uploading' : 'Upload'}
              </Button>
            </Col>
            <Col span={8} />
          </Row>
          {/* Anomaly Case */}
          <Row style={{ marginTop: "30px", textAlign: "left", color: "#ff6477" }} className={this.state.result_case1 == true ? "show" : "hide" }>
            <Col span={8} />
            <Col span={8}>
              <p>Invalid photo. Please <a className="linkStyle" href="/">try again</a>.</p>
            </Col>
            <Col span={8} />
          </Row>
          <Row style={{ textAlign: "left", color: "#ff6477" }} className={this.state.result_case1 == true ? "show" : "hide"}>
            <Col span={8} />
            <Col span={8}>
              <p>Anomaly confident : 90%</p>
            </Col>
            <Col span={8} />
          </Row>
          {/* Normally Case */}
          <Row style={{ marginTop: "30px", textAlign: "left", color: "#48ff7c" }} className={this.state.result_case2 == true ? "show" : "hide"}>
            <Col span={8} />
            <Col span={8}>
              <p>Rotate to : {this.state.rotate_to} degree</p>
            </Col>
            <Col span={8} />
          </Row>
          {/* <Row style={{ textAlign: "left", color: "#48ff7c" }} className={this.state.result_case2 == true ? "show" : "hide" }>
            <Col span={8} />
            <Col span={8}>
              <p>Normally confident : 90%</p>
            </Col>
            <Col span={8} />
          </Row>
          <Row style={{ textAlign: "left", color: "#48ff7c" }} className={this.state.result_case2 == true ? "show" : "hide" }>
            <Col span={8} />
            <Col span={8}>
              <p>Orientation confident : -</p>
            </Col>
            <Col span={8} />
          </Row> */}
          <Row style={{ marginTop: "30px", textAlign: "left" }} className={this.state.result_case2 == true ? "show" : "hide" }>
            <Col span={8} />
            <Col span={8}>
              <Form layout="vertical">
                <FormItem label="ID" style={{ color: '#fff' }} vertical>
                  <Input placeholder="placeholder"  defaultValue={this.state.card_no}/>
                  <p style={{ color: '#48ff7c', marginTop: '5px' }}>Confident : 90%</p>
                </FormItem>
                <FormItem label="คำนำหน้า" style={{ color: '#fff' }} vertical>
                  <Input placeholder="placeholder" defaultValue={this.state.prefix_th}/>
                  {/* <p style={{ color: '#48ff7c', marginTop: '5px' }}>Confident : 90%</p> */}
                </FormItem>
                <FormItem label="ชื่อ" style={{ color: '#fff' }} vertical>
                  <Input placeholder="placeholder" defaultValue={this.state.firstname_th}/>
                  {/* <p style={{ color: '#48ff7c', marginTop: '5px' }}>Confident : 90%</p> */}
                </FormItem>
                <FormItem label="นามสกุล" style={{ color: '#fff' }} vertical>
                  <Input placeholder="placeholder" defaultValue={this.state.lastname_th}/>
                  {/* <p style={{ color: '#48ff7c', marginTop: '5px' }}>Confident : 90%</p> */}
                </FormItem>
                <FormItem label="Prefix" style={{ color: '#fff' }} vertical>
                  <Input placeholder="placeholder" defaultValue={this.state.prefix_en} />
                  {/* <p style={{ color: '#48ff7c', marginTop: '5px' }}>Confident : 90%</p> */}
                </FormItem>
                <FormItem label="Firstname" style={{ color: '#fff' }} vertical>
                  <Input placeholder="placeholder" defaultValue={this.state.firstname_en}/>
                  {/* <p style={{ color: '#48ff7c', marginTop: '5px' }}>Confident : 90%</p> */}
                </FormItem>
                <FormItem label="Lastname" style={{ color: '#fff' }} vertical>
                  <Input placeholder="placeholder" defaultValue={this.state.lastname_en} />
                  {/* <p style={{ color: '#48ff7c', marginTop: '5px' }}>Confident : 90%</p> */}
                </FormItem>
                <FormItem label="วันเกิด" style={{ color: '#fff' }} vertical>
                  <Input placeholder="placeholder" defaultValue={this.state.bd_day_th +'/'+ this.state.bd_mon_th +'/'+ this.state.bd_year_th} />
                  {/* <p style={{ color: '#48ff7c', marginTop: '5px' }}>Confident : 90%</p> */}
                </FormItem>
                <FormItem label="Birthdate" style={{ color: '#fff' }} vertical>
                  <Input placeholder="placeholder" defaultValue={this.state.bd_day_en + '/' + this.state.bd_mon_en + '/' + this.state.bd_year_en}/>
                  {/* <p style={{ color: '#48ff7c', marginTop: '5px' }}>Confident : 90%</p> */}
                </FormItem>
                <FormItem label="ศาสนา" style={{ color: '#fff' }} vertical>
                  <Input placeholder="placeholder" defaultValue={this.state.religion} />
                  {/* <p style={{ color: '#48ff7c', marginTop: '5px' }}>Confident : 90%</p> */}
                </FormItem>
                <FormItem label="เลขที่อยู่" style={{ color: '#fff' }} vertical>
                  <Input placeholder="placeholder" defaultValue={this.state.address_num}/>
                  {/* <p style={{ color: '#48ff7c', marginTop: '5px' }}>Confident : 90%</p> */}
                </FormItem>
                <FormItem label="หมู่ที่" style={{ color: '#fff' }} vertical>
                  <Input placeholder="placeholder" defaultValue={this.state.address_moo} />
                  {/* <p style={{ color: '#48ff7c', marginTop: '5px' }}>Confident : 90%</p> */}
                </FormItem>
                <FormItem label="ซอย" style={{ color: '#fff' }} vertical>
                  <Input placeholder="placeholder" defaultValue={this.state.address_soi}/>
                  {/* <p style={{ color: '#48ff7c', marginTop: '5px' }}>Confident : 90%</p> */}
                </FormItem>
                <FormItem label="ตรอก/แยก" style={{ color: '#fff' }} vertical>
                  <Input placeholder="placeholder" defaultValue={this.state.address_trok} />
                  {/* <p style={{ color: '#48ff7c', marginTop: '5px' }}>Confident : 90%</p> */}
                </FormItem>
                <FormItem label="ถนน" style={{ color: '#fff' }} vertical>
                  <Input placeholder="placeholder" defaultValue={this.state.address_thanon}/>
                  {/* <p style={{ color: '#48ff7c', marginTop: '5px' }}>Confident : 90%</p> */}
                </FormItem>
                <FormItem label="แขวง/ตำบล" style={{ color: '#fff' }} vertical>
                  <Input placeholder="placeholder" defaultValue={this.state.sub_district}/>
                  {/* <p style={{ color: '#48ff7c', marginTop: '5px' }}>Confident : 90%</p> */}
                </FormItem>
                <FormItem label="เขต/อำเภอ" style={{ color: '#fff' }} vertical>
                  <Input placeholder="placeholder" defaultValue={this.state.district}/>
                  {/* <p style={{ color: '#48ff7c', marginTop: '5px' }}>Confident : 90%</p> */}
                </FormItem>
                <FormItem label="จังหวัด" style={{ color: '#fff' }} vertical>
                  <Input placeholder="placeholder" defaultValue={this.state.province}/>
                  {/* <p style={{ color: '#48ff7c', marginTop: '5px' }}>Confident : 90%</p> */}
                </FormItem>
                <FormItem label="วันออกบัตร" style={{ color: '#fff' }} vertical>
                  <Input placeholder="placeholder" defaultValue={this.state.date_of_issue_day_th + '/' + this.state.date_of_issue_mon_th + '/' + this.state.date_of_issue_year_th} />
                  {/* <p style={{ color: '#48ff7c', marginTop: '5px' }}>Confident : 90%</p> */}
                </FormItem>
                <FormItem label="วันหมดอายุบัตร" style={{ color: '#fff' }} vertical>
                  <Input placeholder="placeholder" defaultValue={this.state.expire_date_day_th + '/' + this.state.expire_date_mon_th + '/' + this.state.expire_date_year_th}/>
                  {/* <p style={{ color: '#48ff7c', marginTop: '5px' }}>Confident : 90%</p> */}
                </FormItem>
                <FormItem vertical>
                  <Button href="/" block>Submit</Button>
                </FormItem>
              </Form>
            </Col>
            <Col span={8} />
          </Row>
        </div>
        <style jsx>
          {`
            .bodyBox {
              padding-top:50px; 
            }
            .linkStyle{
              text-decoration: underline;
              color: #ff6477;
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

function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  const isPNG = file.type === 'image/png';
  if (!isJPG && !isPNG) {
    message.error('You can only upload JPG or PNG file!');
  }
  const isLt2M = file.size / 2048 / 2048 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 4MB!');
  }
  console.log((isJPG || isPNG) && isLt2M);
  return !(isJPG || isPNG) && isLt2M;
}

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

export default Index;
