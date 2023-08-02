import { Button, Col, Row } from "antd";
import CircleImgModal from "../../SharedComponents/circleImageModal";



const Services = () => {

return(
    <>
    <div className="service-bg"> 
    <h1 className="m-0 font headTitle">خــــدمـــاتنــا</h1> 
    <div className="App-header lil-size">
        <br/><br/><br/>
        <Row className="w-80">
            <Col className="flex-col-center mx-20" xs={24} sm={24} md={12} lg={6} xl={6}><CircleImgModal/></Col>
            <Col className="flex-col-center mx-20" xs={24} sm={24} md={12} lg={6} xl={6}><CircleImgModal/></Col>
            <Col className="flex-col-center mx-20" xs={24} sm={24} md={12} lg={6} xl={6}><CircleImgModal/></Col>
            <Col className="flex-col-center mx-20" xs={24} sm={24} md={12} lg={6} xl={6}><CircleImgModal/></Col>
        </Row>
        
    </div>
    </div>
    </>
)

}

export default Services;