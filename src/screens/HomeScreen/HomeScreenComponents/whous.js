import { Button, Col, Row } from "antd";
import CircleImgModal from "../../SharedComponents/circleImageModal";

const WhoUs = () => {
  return (
    <>
      <div className="whous-bg">
        <h1 className=" font headTitle">من نحن</h1>
        <div className="App-header lil-size">
        <Row className="w-80">
          <Col className="flex-col-center mx-20 " sm={24} md={24} lg={10}>
            
            <img src={require("../../../assets/homeScreen/logo.png")} className="logo-inside"/>
          </Col>
          <Col className="flex-col-start mx-20 px-20 directionAr" sm={24} md={24} lg={14}>
            <p className=" font bold-bold-text">شركة سبائك للحلول المتكامله</p>
<p className="normal-normal-text font m-0">
شركة سبائك للحلول المتكامله
وهي شركة تم انشاؤها لتمييز الحلول المتكاملة ومن
ثم يتم خدمة العميل .... وهي شركة تم انشاؤها لتمييز 
الحلول المتكاملة ومن ثم يتم خدمة العميل .... 
وهي شركة تم انشاؤها لتمييز الحلول المتكاملة 
ومن ثم يتم خدمة العميل ....
وهي شركة تم انشاؤها لتمييز الحلول المتكاملة ومن
ثم يتم خدمة العميل .... 

</p>
<button className="btnApp"> <h2>إكتشف المزيد</h2></button>

          </Col>
        </Row>
     
        </div>

     
      </div>
    </>
  );
};

export default WhoUs;
