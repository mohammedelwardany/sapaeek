import { Button, Col, Row } from "antd";
import CircleImgModal from "../../SharedComponents/circleImageModal";
import { FacebookOutlined} from '@ant-design/icons';



const Foooter = () => {

return(
    <>
    
    <div className="footerbg">
    <div className="App-header footer-size">
        <br/>
        <Row className="w-80 directionAr">
            <Col className="flex-col-center mx-20 justfy-start" xs={24} sm={24} md={8} lg={8} xl={8}>
            <img src={require("../../../assets/homeScreen/logo.png")} className='logoNav' style={{scale:"130%"}}/>
            <p className="bold-text font mb-5 mt-25">تابعونا على</p>
            <div>
            <i class="fa-brands fa-square-facebook normal-normal-text"></i>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <i class="fa-brands fa-instagram normal-normal-text"></i>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <i class="fa-brands fa-linkedin normal-normal-text"></i>
            </div>

            </Col>
            <Col className="flex-col-center mx-20 justfy-start" xs={24} sm={24} md={8} lg={8} xl={8}>
<p className="bold-text font">يمكنك التواصل معنا</p>
<p className="normal-text font m-0">عبر الهاتف</p>
<p className="normal-text font m-0 directionnonAr">+96599131995</p>
<br/>
<p className="normal-text font m-0">عبر البريد الالكتروني</p>
<p className="normal-text font m-0">info@sapayiks.com</p>
            </Col>
            <Col className="flex-col-center mx-20 justfy-start" xs={24} sm={24} md={8} lg={8} xl={8}>
<p className="bold-text font">نتشرف بزيارتكم</p>
<p className="normal-text font">
الكويت ، شرق برج الدروازة 51 الدور 13-15
</p>
            </Col>
        </Row>
      </div>  
    </div>
   
    </>
)

}

export default Foooter;