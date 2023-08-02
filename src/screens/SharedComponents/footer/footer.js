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
            <Col className="flex-col-center mx-20" xs={24} sm={24} md={12} lg={8} xl={8}>
            <img src={require("../../../assets/homeScreen/logo.png")} className='logoNav'/>
            <p>تابعونا على</p>
            <div>
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
            </div>

            </Col>
            <Col className="flex-col-center mx-20" xs={24} sm={24} md={12} lg={8} xl={8}>
every

            </Col>
            <Col className="flex-col-center mx-20" xs={24} sm={24} md={12} lg={8} xl={8}>

one
            </Col>
        </Row>
      </div>  
    </div>
   
    </>
)

}

export default Foooter;