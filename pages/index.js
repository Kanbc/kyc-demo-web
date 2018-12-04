import React, { Component } from 'react';
import { Row, Col, Upload, Icon, Button, message, Form, Input, DatePicker } from 'antd';
import moment from 'moment';
import Jimp from 'jimp';
import imageFileToBase64 from 'image-file-to-base64-exif'
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
      imageUrl: null,

      // Form Value
      normally_confidence: '',
      rotate_to: '',
      rotate_to_prob: '',

      address_moo: '',
      address_moo_prob: '',
      address_no: '',
      address_no_prob: '',
      address_soi: '',
      address_soi_prob: '',
      address_thanon: '',
      address_thanon_prob: '',
      address_trok: '',
      address_trok_prob: '',
      birthdate: '',
      birthdate_prob: '',
      card_no: '',
      card_no_prob: '',
      date_of_issue: '',
      date_of_issue_prob: '',
      expire_date: '',
      expire_date_prob: '',
      firstname_en: '',
      firstname_en_prob: '',
      firstname_th: '',
      firstname_th_prob: '',
      lastname_en: '',
      lastname_en_prob: '',
      lastname_th: '',
      lastname_th_prob: '',
      prefix_en: '',
      prefix_en_prob: '',
      prefix_th: '',
      prefix_th_prob: '',
      religion: '',
      religion_prob: '',
      
      province: '',
      province_prob: '',
      district: '',
      district_prob: '',
      sub_district: '',
      sub_district_prob: '',
      post_code: '',
      post_code_prob: '',
    };
  }

  handleChange = (info) => {
    beforeUpload(info.file.originFileObj);
    
    this.setState({
      imageUrl: null,
      loading: true
    });
    
    imageFileToBase64(info.file.originFileObj,720,720,1)
    .then(res => {
      this.setState({
        imageUrl: res,
        loading: false
      })
    });
    
    // getBase64(info.file.originFileObj, imageUrl => this.setState({
    //   imageUrl,
    //   loading: false,
    // }));

    this.setState({ 
      initial_step: false,
      preview_step: true,
      uploading_step: false,
      result_case1: false,
      result_case2: false,
    });
  }

  handleDateOfIssue = (dateString) => {
    this.setState({ date_of_issue: isNaN(dateString) ? dateString : '' });
  }

  handleExpireDate = (dateString) => {
    this.setState({ expire_date: isNaN(dateString) ? dateString : '' });
  }

  handleBirthDate = (dateString) => {
    this.setState({ birthdate: dateString });
  }

  colorResult = (probability) => {
    if (probability > 90){
      return 'good';
    }else if(probability > 80 && probability < 90) {
      return 'avg-good';
    }else if(probability > 65 && probability <80){
      return 'avg';
    }else if(probability > 50 && probability <65){
      return 'bad-avg';
    }else{
      return 'bad';
    }
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
    var normally = 0
    // axios.post('http://127.0.0.1:8081/ocr-idcard', data,
    axios.post('https://ml.odini-site.com/idcard-for-web', data, 
      {
        headers: {
          'Content-Type': 'application/json'
      }
    }).then( (response) => {
      if (response.status == 200){
        normally = response.data.normally.value;
        
        // case anomally
        if (normally == 0){
          message.error(response.data.desc);
          this.setState({
            initial_step: false,
            preview_step: false,
            uploading_step: false,
            result_case1: true,
            result_case2: false,
            normally_confidence: (100 * (1 - parseFloat(response.data.normally.probability))).toFixed(2),
          });
        }else{
          // Case Normally
          // -- Rotate Image
          var buf = Buffer.from(this.state.imageUrl.split(',')[1], 'base64');
          Jimp.read(buf).then(image => {
            image.rotate(parseInt(this.state.rotate_to)).getBase64(Jimp.AUTO, (err,b64img) => {
              this.setState({
                imageUrl: b64img
              });
            });          
          }).catch(err => {
            message.error(err);
          });

          message.success(response.data.desc);

          this.setState({
            initial_step: false,
            preview_step: false,
            uploading_step: false,
            result_case1: false,
            result_case2: true,

            normally_confidence: (100 * parseFloat(response.data.normally.probability)).toFixed(2),
            rotate_to: response.data.rotate_to.value,
            rotate_to_prob: (100 * parseFloat(response.data.rotate_to.probability)).toFixed(2),
            card_no: response.data.idcard_fields.card_no !== '' ? response.data.idcard_fields.card_no.value : '',
            card_no_prob: response.data.idcard_fields.card_no !== '' ? (100 * parseFloat(response.data.idcard_fields.card_no.probability)).toFixed(2) : '',
            
            address_moo: response.data.idcard_fields.address_moo !== '' ? response.data.idcard_fields.address_moo.value : '',
            address_moo_prob: response.data.idcard_fields.address_moo !== '' ? (100 * parseFloat(response.data.idcard_fields.address_moo.probability)).toFixed(2) : '',
            address_no: response.data.idcard_fields.address_no !== '' ? response.data.idcard_fields.address_no.value : '',
            address_no_prob: response.data.idcard_fields.address_no !== '' ? (100 * parseFloat(response.data.idcard_fields.address_no.probability)).toFixed(2) : '',
            address_soi: response.data.idcard_fields.address_soi !== '' ? response.data.idcard_fields.address_soi.value : '',
            address_soi_prob: response.data.idcard_fields.address_soi !== '' ? (100 * parseFloat(response.data.idcard_fields.address_soi.probability)).toFixed(2) : '',
            address_thanon: response.data.idcard_fields.address_thanon !== '' ? response.data.idcard_fields.address_thanon.value : '',
            address_thanon_prob: response.data.idcard_fields.address_thanon !== '' ? (100 * parseFloat(response.data.idcard_fields.address_thanon.probability)).toFixed(2) : '',
            address_trok: response.data.idcard_fields.address_trok !== '' ? response.data.idcard_fields.address_trok.value : '',
            address_trok_prob: response.data.idcard_fields.address_trok !== '' ? (100 * parseFloat(response.data.idcard_fields.address_trok.probability)).toFixed(2): '',
            
            birthdate: response.data.idcard_fields.birth_date !== '' ? response.data.idcard_fields.birth_date.value : '',
            birthdate_prob: response.data.idcard_fields.birth_date !== '' ? (100 * parseFloat(response.data.idcard_fields.birth_date.probability)).toFixed(2) : '',
            
            date_of_issue: response.data.idcard_fields.date_of_issue !== "" ? response.data.idcard_fields.date_of_issue.value : "",
            date_of_issue_prob: response.data.idcard_fields.date_of_issue !== "" ? (100 * parseFloat(response.data.idcard_fields.date_of_issue.probability)).toFixed(2) : "",

            district: response.data.idcard_fields.district !== '' ? response.data.idcard_fields.district.value : '',
            district_prob: response.data.idcard_fields.district !== '' ? (100 * parseFloat(response.data.idcard_fields.district.probability)).toFixed(2) : '',

            expire_date: response.data.idcard_fields.expire_date !== '' ? response.data.idcard_fields.expire_date.value: '',
            expire_date_prob: response.data.idcard_fields.expire_date !== '' ? (100 * parseFloat(response.data.idcard_fields.expire_date.probability)).toFixed(2) : '',

            firstname_en: response.data.idcard_fields.firstname_en !== '' ? response.data.idcard_fields.firstname_en.value: '',
            firstname_en_prob: response.data.idcard_fields.firstname_en !== '' ? (100 * parseFloat(response.data.idcard_fields.firstname_en.probability)).toFixed(2) :'',
            firstname_th: response.data.idcard_fields.firstname_th !== '' ? response.data.idcard_fields.firstname_th.value: '',
            firstname_th_prob: response.data.idcard_fields.firstname_th !== '' ? (100 * parseFloat(response.data.idcard_fields.firstname_th.probability)).toFixed(2) : '',
            lastname_en: response.data.idcard_fields.lastname_en !== '' ? response.data.idcard_fields.lastname_en.value: '',
            lastname_en_prob: response.data.idcard_fields.lastname_en !== '' ? (100 * parseFloat(response.data.idcard_fields.lastname_en.probability)).toFixed(2) : '',
            lastname_th: response.data.idcard_fields.lastname_th !== '' ? response.data.idcard_fields.lastname_th.value: '',
            lastname_th_prob: response.data.idcard_fields.lastname_th !== '' ? (100 * parseFloat(response.data.idcard_fields.lastname_th.probability)).toFixed(2) : '',
            prefix_en: response.data.idcard_fields.prefix_en !== '' ? response.data.idcard_fields.prefix_en.value:'',
            prefix_en_prob: response.data.idcard_fields.prefix_en !== '' ? (100 * parseFloat(response.data.idcard_fields.prefix_en.probability)).toFixed(2) : '',
            prefix_th: response.data.idcard_fields.prefix_th !== '' ? response.data.idcard_fields.prefix_th.value : '',
            prefix_th_prob: response.data.idcard_fields.prefix_th !== '' ? (100 * parseFloat(response.data.idcard_fields.prefix_th.probability)).toFixed(2) : '',
            province: response.data.idcard_fields.province !== '' ? response.data.idcard_fields.province.value: '',
            province_prob: response.data.idcard_fields.province !== '' ? (100 * parseFloat(response.data.idcard_fields.province.probability)).toFixed(2) : '',
            religion: response.data.idcard_fields.religion !== '' ? response.data.idcard_fields.religion.value: '',
            religion_prob: response.data.idcard_fields.religion !== '' ? (100 * parseFloat(response.data.idcard_fields.religion.probability)).toFixed(2) : '',
            sub_district: response.data.idcard_fields.sub_district !== '' ? response.data.idcard_fields.sub_district.value: '',
            sub_district_prob: response.data.idcard_fields.sub_district !== '' ? (100 * parseFloat(response.data.idcard_fields.sub_district.probability)).toFixed(2) : '',
            post_code: response.data.idcard_fields.post_code !== '' ? response.data.idcard_fields.post_code.value : '',
            post_code_prob: response.data.idcard_fields.post_code !== '' ? (100 * parseFloat(response.data.idcard_fields.post_code.probability)).toFixed(2) : '',
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
      <Layout title="AFM">
        <div className="bodyBox">
          <Row>
            <Col sm={0} lg={8} />
            <Col sm={24} lg={8}>
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={true}
                fileList={false}
                beforeUpload={false}
                onChange={this.handleChange}
              >
                {imageUrl ? <img id="c" src={imageUrl} alt="avatar" /> : uploadButton}
              </Upload>
            </Col>
            <Col sm={0} lg={8} />
          </Row>
          {/* Upload Button */}
          <Row style={{ marginTop: "30px" }} className={this.state.preview_step == true || this.state.uploading_step == true ? "show" : "hide" }>
            <Col sm={0} lg={8} />
            <Col sm={24} lg={8} >
              <Button 
                onClick={this.handleUpload}
                disabled={this.state.uploading_step}
                block>
                {this.state.uploading_step ? 'Uploading' : 'Upload'}
              </Button>
            </Col>
            <Col sm={0} lg={8} />
          </Row>
          {/* Anomaly Case */}
          <Row style={{ marginTop: "30px", textAlign: "left", color: "#ff6477" }} className={this.state.result_case1 == true ? "show" : "hide" }>
            <Col sm={0} lg={8} />
            <Col sm={24} lg={8}>
              <p>Invalid photo. Please <a className="linkStyle" href="/">try again</a>.</p>
            </Col>
            <Col sm={0} lg={8} />
          </Row>
          <Row style={{ textAlign: "left", color: "#ff6477" }} className={this.state.result_case1 == true ? "show" : "hide"}>
            <Col sm={0} lg={8} />
            <Col sm={24} lg={8} >
              <p>Anomaly confident : {this.state.normally_confidence}%</p>
            </Col>
            <Col sm={0} lg={8} />
          </Row>
          {/* Normally Case */}
          <Row style={{ marginTop: "30px", textAlign: "left", color: "#48ff7c" }} className={this.state.result_case2 == true ? "show" : "hide"}>
            <Col sm={0} lg={8} />
            <Col sm={24} lg={8} >
              <p className={this.colorResult(this.state.normally_confidence)}>Normally confident : {this.state.normally_confidence}%</p>
            </Col>
            <Col sm={0} lg={8} />
          </Row>
          <Row style={{ textAlign: "left", color: "#48ff7c" }} className={this.state.result_case2 == true ? "show" : "hide" }>
            <Col sm={0} lg={8} />
            <Col sm={24} lg={8}>
              <p className={this.colorResult(this.state.rotate_to_prob)}>Rotate to : {this.state.rotate_to} degree</p>
            </Col>
            <Col sm={0} lg={8} />
          </Row>
          <Row style={{ textAlign: "left", color: "#48ff7c" }} className={this.state.result_case2 == true ? "show" : "hide" }>
            <Col sm={0} lg={8} />
            <Col sm={24} lg={8} >
              <p className={this.colorResult(this.state.rotate_to_prob)}>Orientation confident : {this.state.rotate_to_prob}%</p>
            </Col>
            <Col sm={0} lg={8} />
          </Row>
          <Row style={{ marginTop: "30px", textAlign: "left" }} className={this.state.result_case2 == true ? "show" : "hide" }>
            <Col sm={0} lg={8} />
            <Col sm={24} lg={8} >
              <Form layout="vertical">
                <FormItem label="ID" style={{ color: '#fff' }} vertical>
                  <Input  defaultValue={this.state.card_no}/>
                  <p className={this.colorResult(this.state.card_no_prob)} >{this.state.card_no_prob == 0 ? '' : this.state.card_no_prob + '%'}</p>
                </FormItem>
                <Row gutter={16}>
                  <Col span={12}>
                    <FormItem label="คำนำหน้า" style={{ color: '#fff' }} vertical>
                      <Input defaultValue={this.state.prefix_th} />
                      <p className={this.colorResult(this.state.prefix_th_prob)}>Prefix Confident : {this.state.prefix_th_prob == 0 ? '' : this.state.prefix_th_prob + '%'}</p>
                    </FormItem>
                  </Col>
                  <Col span={12}>
                    <FormItem label="Prefix" style={{ color: '#fff' }} vertical>
                      <Input defaultValue={this.state.prefix_en} />
                    </FormItem>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={12} >
                    <FormItem label="ชื่อ" style={{ color: '#fff' }} vertical>
                      <Input defaultValue={this.state.firstname_th} />
                      <p className={this.colorResult(this.state.firstname_th_prob)}>{this.state.firstname_th_prob == 0 ? '' : this.state.firstname_th_prob + '%'}</p>
                    </FormItem>
                  </Col>
                  <Col span={12} >
                    <FormItem label="นามสกุล" style={{ color: '#fff' }} vertical>
                      <Input defaultValue={this.state.lastname_th} />
                      <p className={this.colorResult(this.state.lastname_th_prob)}>{this.state.lastname_th_prob == 0 ? '' : this.state.lastname_th_prob + '%'}</p>
                    </FormItem>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={12} >
                    <FormItem label="Firstname" style={{ color: '#fff' }} vertical>
                      <Input defaultValue={this.state.firstname_en}/>
                      <p className={this.colorResult(this.state.firstname_en_prob)}>{this.state.firstname_en_prob == 0 ? '' : this.state.firstname_en_prob + '%'}</p>
                    </FormItem>
                  </Col>
                  <Col span={12} >
                    <FormItem label="Lastname" style={{ color: '#fff' }} vertical>
                      <Input defaultValue={this.state.lastname_en} />
                      <p className={this.colorResult(this.state.lastname_en_prob)}>{this.state.lastname_en_prob == 0 ? '' : this.state.lastname_en_prob + '%'}</p>
                    </FormItem>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={12} >
                    <FormItem label="วันเกิด" style={{ color: '#fff' }} vertical>
                      {
                        <DatePicker value={this.state.birthdate && moment(this.state.birthdate, 'YYYY/MM/DD')} defaultValue={this.state.birthdate && moment(this.state.birthdate, 'YYYY/MM/DD')} onChange={(_, dateString) => this.handleBirthDate(dateString)} format='YYYY/MM/DD' />
                      }
                      <p className={this.colorResult(this.state.birthdate_prob)}>{this.state.birthdate_prob == 0 ? '' : this.state.birthdate_prob + '%'}</p>
                    </FormItem>
                  </Col>
                  <Col span={12} >
                    <FormItem label="ศาสนา" style={{ color: '#fff' }} vertical>
                      <Input defaultValue={this.state.religion_prob == 0 ? '' : this.state.religion} />
                      <p className={this.colorResult(this.state.religion_prob)}>{this.state.religion_prob == 0 ? '' : this.state.religion_prob + '%'}</p>
                    </FormItem>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={12}>
                    <FormItem label="วันออกบัตร" style={{ color: '#fff' }} vertical>
                      {
                        <DatePicker value={this.state.date_of_issue_prob == 0 ? '' : moment(this.state.date_of_issue, 'YYYY/MM/DD')} onChange={(_, dateString) => this.handleDateOfIssue(dateString)} format='YYYY/MM/DD' />
                      }
                      <p className={this.colorResult(this.state.date_of_issue_prob)}>{this.state.date_of_issue_prob == 0 ? '' : this.state.date_of_issue_prob + '%'}</p>
                    </FormItem>
                  </Col>
                  <Col span={12}>
                    <FormItem label="วันหมดอายุบัตร" style={{ color: '#fff' }} vertical>
                      { 
                        <DatePicker value={this.state.expire_date_prob == 0 ? '' : moment(this.state.expire_date, 'YYYY/MM/DD') } onChange={(_, dateString) => this.handleExpireDate(dateString)} format='YYYY/MM/DD' /> 
                      }
                      <p className={this.colorResult(this.state.expire_date_prob)}>{this.state.expire_date_prob == 0 ? '' : this.state.expire_date_prob + '%'}</p>
                    </FormItem>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={8}>
                    <FormItem label="เลขที่อยู่" style={{ color: '#fff' }} vertical>
                      <Input defaultValue={this.state.address_no} />
                      <p className={this.colorResult(this.state.address_no_prob)}>{this.state.address_no_prob == 0 ? '' : this.state.address_no_prob + '%'}</p>
                    </FormItem>
                  </Col>
                  <Col span={8}>
                    <FormItem label="หมู่ที่" style={{ color: '#fff' }} vertical>
                      <Input defaultValue={this.state.address_moo} />
                      <p className={this.colorResult(this.state.address_moo_prob)}>{this.state.address_moo_prob == 0 ? '' : this.state.address_moo_prob + '%'}</p>
                    </FormItem>
                  </Col>
                  <Col span={8}>
                    <FormItem label="ซอย" style={{ color: '#fff' }} vertical>
                      <Input defaultValue={this.state.address_soi} />
                      <p className={this.colorResult(this.state.address_soi_prob)}>{this.state.address_soi_prob == 0 ? '' : this.state.address_soi_prob + '%'}</p>
                    </FormItem>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={12}>
                    <FormItem label="ตรอก/แยก" style={{ color: '#fff' }} vertical>
                      <Input  defaultValue={this.state.address_trok} />
                      <p className={this.colorResult(this.state.address_trok_prob)}>{this.state.address_trok_prob == 0 ? '' : this.state.address_trok_prob +'%'}</p>
                    </FormItem>
                  </Col>
                  <Col span={12}>
                    <FormItem label="ถนน" style={{ color: '#fff' }} vertical>
                      <Input defaultValue={this.state.address_thanon} />
                      <p className={this.colorResult(this.state.address_thanon_prob)}>{this.state.address_thanon_prob == 0 ? '' : this.state.address_thanon_prob + '%'}</p>
                    </FormItem>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={12}>
                    <FormItem label="แขวง/ตำบล" style={{ color: '#fff' }} vertical>
                      <Input defaultValue={this.state.sub_district} />
                    </FormItem>
                  </Col>
                  <Col span={12}>
                    <FormItem label="เขต/อำเภอ" style={{ color: '#fff' }} vertical>
                      <Input defaultValue={this.state.district} />
                    </FormItem>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={12}>
                    <FormItem label="จังหวัด" style={{ color: '#fff' }} vertical>
                      <Input defaultValue={this.state.province} />
                      <p className={this.colorResult(this.state.province_prob)}>Address Confident : {this.state.province_prob}%</p>
                    </FormItem>
                  </Col>
                  <Col span={12}>
                    <FormItem label="รหัสไปรษณีย์" style={{ color: '#fff' }} vertical>
                      <Input defaultValue={this.state.post_code} />
                    </FormItem>
                  </Col>
                </Row>
                <FormItem vertical style={{marginTop: "30px"}}>
                  <Button href="/" block>Submit</Button>
                </FormItem>
              </Form>
            </Col>
            <Col sm={0} lg={8} />
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
            .good{
              color: #00FF00; 
              margin-top: 5px;
              font-size: 10px;
            }
            .avg-good{
              color: #7FFF00; 
              margin-top: 5px;
              font-size: 10px;
            }
            .avg{
              color: #FFFF00; 
              margin-top: 5px;
              font-size: 10px;
            }
            .bad-avg{
              color: #FFF000; 
              margin-top: 5px;
              font-size: 10px;
            }
            .bad{
              color: #FF0000; 
              margin-top: 5px;
              font-size: 10px;
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
  return !(isJPG || isPNG) && isLt2M;
}

// function getBase64(img, callback) {
//   const reader = new FileReader();
//   reader.addEventListener('load', () => callback(reader.result));
//   reader.readAsDataURL(img);
//   // reader.readAsBinaryString(img);
//   // console.log(reader.readyState);
//   // console.log(reader.readAsDataURL(img));
// }

export default Index;
