import { Button, Col, Row , Checkbox, Form, Input} from "antd";
import { LockOutlined, UserOutlined ,MailOutlined,PhoneOutlined} from '@ant-design/icons';
const { TextArea } = Input;

const ContactUs = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
return(
    <>
    <div id="contactus"> 
    <h1 className="m-0 font headTitle">تواصل معنا</h1> 
    <br/><br/><br/><br/>
    <h2 className="m-0 font text-center">يمكنك التواصل معنا عبر الهاتف</h2>
    <br/>
    <h2 className="m-0 font text-center directionnonAr">+965 9913 1995</h2>
    <br/><br/><br/>
    <h2 className="m-0 font text-center">يمكنك التواصل معنا عبر البريد الالكتروني</h2>
    <div className="App-header lil-size">
        
        <Form
      name="normal_login"
      className="login-form directionAr"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: 'من فضلك ادخل اسمك',
          },
        ]}
      >
        <Input className="formInput" prefix={<UserOutlined className="site-form-item-icon" style={{color:"#F28705"}}/>} placeholder="الإسم" />
      </Form.Item>

      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'من فضلك ادخل بريدك الالكتروني',
          },
        ]}
      >
        <Input className="formInput" prefix={<MailOutlined className="site-form-item-icon" style={{color:"#F28705"}}/>} placeholder="البريد الالكتروني" />
      </Form.Item>



      <Form.Item
        name="phone"
        rules={[
          {
            required: true,
            message: 'من فضلك ادخل رقم هاتفك',
          },
        ]}
      >
        <Input className="formInput" prefix={<PhoneOutlined className="site-form-item-icon" style={{color:"#F28705"}}/>} placeholder="رقم الهاتف" />
      </Form.Item>
      <Form.Item
        name="message"
        rules={[
          {
            required: true,
            message: 'من فضلك ادخل رسالتك',
          },
        ]}
      >
        <TextArea className="formInput" rows={4} placeholder="رسالتك"/>
      
      </Form.Item>








      <Form.Item>
        {/* <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button> */}
        <button className="btnApp" type="submit"> <h2>ارسال الرسالة</h2></button>

      </Form.Item>
    </Form>

        
    </div>
    </div>
    </>
)

}

export default ContactUs;