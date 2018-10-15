import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Upload, Icon, Button, message, Form, Input, Radio } from 'antd';
import moment from 'moment';
import { Layout } from '../components';
import { setFieldData } from '../store';

const FormItem = Form.Item;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

class Index extends Component {
  constructor() {
    super();
    this.state = {
      formLayout: 'vertical',
    };
  }

  state = {
    // initial state
    initial_step: true,
    preview_step: false,
    uploading_step: false,
    result_case1: false,
    result_case2: false,


    previewVisible: false,
    previewImage: '',
    fileList: [{
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }],

    fields: moment(),
    loading: false,
    anomaly: '',
    anomaly_confidence: '',
    angle_rotation: '',
    angle_confidence: '',
    firstname:'',
    firstname_confidence: '',
    lastname: '',
    lastname_confidence: '',
  }

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false,
      }));
    }
  }

  handleFormLayoutChange = (e) => {
    this.setState({ formLayout: e.target.value });
  }

  // componentDidMount() {
  //   this.props.dispatch(setFieldData(this.fields));
  // }

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
    const { previewVisible, previewImage, fileList } = this.state;
    const { formLayout } = this.state;
    // const formItemLayout = formLayout === 'horizontal' ? {
    //   labelCol: { span: 4 },
    //   wrapperCol: { span: 14 },
    // } : null;
    // const buttonItemLayout = formLayout === 'horizontal' ? {
    //   wrapperCol: { span: 14, offset: 4 },
    // } : null;

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
                showUploadList={false}
                fileList={fileList}
                onPreview={this.handlePreview}
                action="//jsonplaceholder.typicode.com/posts/"
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
              >
                {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
              </Upload>
            </Col>
            <Col span={8} />
          </Row>
          {/* Upload Button */}
          <Row style={{marginTop:"30px"}}>
            <Col span={8} />
            <Col span={8}>
              <Button block>Upload</Button>
            </Col>
            <Col span={8} />
          </Row>
          {/* Anomaly Case */}
          <Row style={{ marginTop: "30px", textAlign: "left", color: "#ff6477" }}>
            <Col span={8} />
            <Col span={8}>
              <p>Invalid photo. Please <a className="linkStyle" href="/">try again</a>.</p>
            </Col>
            <Col span={8} />
          </Row>
          <Row style={{ textAlign: "left", color: "#ff6477" }}>
            <Col span={8} />
            <Col span={8}>
              <p>Anomaly confident : 90%</p>
            </Col>
            <Col span={8} />
          </Row>
          {/* Normally Case */}
          <Row style={{ marginTop: "30px", textAlign: "left", color: "#48ff7c" }}>
            <Col span={8} />
            <Col span={8}>
              <p>Orientation confident : 90%</p>
            </Col>
            <Col span={8} />
          </Row>
          <Row style={{ textAlign: "left", color: "#48ff7c" }}>
            <Col span={8} />
            <Col span={8}>
              <p>Normally confident : 90%</p>
            </Col>
            <Col span={8} />
          </Row>
          <Row style={{ marginTop: "30px", textAlign: "left" }}>
            <Col span={8} />
            <Col span={8}>
              <Form layout="vertical">
                <FormItem label="ID" style={{ color: '#fff' }} vertical>
                  <Input placeholder="placeholder" />
                  <p style={{ color: '#48ff7c', marginTop: '5px' }}>Confident : 90%</p>
                </FormItem>
                <FormItem label="คำนำหน้า" style={{ color: '#fff' }} vertical>
                  <Input placeholder="placeholder" />
                  <p style={{ color: '#48ff7c', marginTop: '5px' }}>Confident : 90%</p>
                </FormItem>
                <FormItem label="ชื่อ" style={{ color: '#fff' }} vertical>
                  <Input placeholder="placeholder" />
                  <p style={{ color: '#48ff7c', marginTop: '5px' }}>Confident : 90%</p>
                </FormItem>
                <FormItem label="นามสกุล" style={{ color: '#fff' }} vertical>
                  <Input placeholder="placeholder" />
                  <p style={{ color: '#48ff7c', marginTop: '5px' }}>Confident : 90%</p>
                </FormItem>
                <FormItem label="Prefix" style={{ color: '#fff' }} vertical>
                  <Input placeholder="placeholder" />
                  <p style={{ color: '#48ff7c', marginTop: '5px' }}>Confident : 90%</p>
                </FormItem>
                <FormItem label="Firstname" style={{ color: '#fff' }} vertical>
                  <Input placeholder="placeholder" />
                  <p style={{ color: '#48ff7c', marginTop: '5px' }}>Confident : 90%</p>
                </FormItem>
                <FormItem label="Lastname" style={{ color: '#fff' }} vertical>
                  <Input placeholder="placeholder" />
                  <p style={{ color: '#48ff7c', marginTop: '5px' }}>Confident : 90%</p>
                </FormItem>
                <FormItem label="วันเกิด" style={{ color: '#fff' }} vertical>
                  <Input placeholder="placeholder" />
                  <p style={{ color: '#48ff7c', marginTop: '5px' }}>Confident : 90%</p>
                </FormItem>
                <FormItem label="Birthdate" style={{ color: '#fff' }} vertical>
                  <Input placeholder="placeholder" />
                  <p style={{ color: '#48ff7c', marginTop: '5px' }}>Confident : 90%</p>
                </FormItem>
                <FormItem label="ศาสนา" style={{ color: '#fff' }} vertical>
                  <Input placeholder="placeholder" />
                  <p style={{ color: '#48ff7c', marginTop: '5px' }}>Confident : 90%</p>
                </FormItem>
                <FormItem label="เลขที่อยู่" style={{ color: '#fff' }} vertical>
                  <Input placeholder="placeholder" />
                  <p style={{ color: '#48ff7c', marginTop: '5px' }}>Confident : 90%</p>
                </FormItem>
                <FormItem label="ซอย" style={{ color: '#fff' }} vertical>
                  <Input placeholder="placeholder" />
                  <p style={{ color: '#48ff7c', marginTop: '5px' }}>Confident : 90%</p>
                </FormItem>
                <FormItem label="ตรอก/แยก" style={{ color: '#fff' }} vertical>
                  <Input placeholder="placeholder" />
                  <p style={{ color: '#48ff7c', marginTop: '5px' }}>Confident : 90%</p>
                </FormItem>
                <FormItem label="ถนน" style={{ color: '#fff' }} vertical>
                  <Input placeholder="placeholder" />
                  <p style={{ color: '#48ff7c', marginTop: '5px' }}>Confident : 90%</p>
                </FormItem>
                <FormItem label="แขวง/ตำบล" style={{ color: '#fff' }} vertical>
                  <Input placeholder="placeholder" />
                  <p style={{ color: '#48ff7c', marginTop: '5px' }}>Confident : 90%</p>
                </FormItem>
                <FormItem label="เขต/อำเภอ" style={{ color: '#fff' }} vertical>
                  <Input placeholder="placeholder" />
                  <p style={{ color: '#48ff7c', marginTop: '5px' }}>Confident : 90%</p>
                </FormItem>
                <FormItem label="จังหวัด" style={{ color: '#fff' }} vertical>
                  <Input placeholder="placeholder" />
                  <p style={{ color: '#48ff7c', marginTop: '5px' }}>Confident : 90%</p>
                </FormItem>
                <FormItem label="วันออกบัตร" style={{ color: '#fff' }} vertical>
                  <Input placeholder="placeholder" />
                  <p style={{ color: '#48ff7c', marginTop: '5px' }}>Confident : 90%</p>
                </FormItem>
                <FormItem label="วันหมดอายุบัตร" style={{ color: '#fff' }} vertical>
                  <Input placeholder="placeholder" />
                  <p style={{ color: '#48ff7c', marginTop: '5px' }}>Confident : 90%</p>
                </FormItem>
                <FormItem vertical>
                  <Button block>Submit</Button>
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
  return (isJPG || isPNG) && isLt2M;
}

// function mapStateToProps(state) {
//   return {
//     fields: state.fields,
//   }
// }

// export default connect(mapStateToProps)(Index);
export default Index;
