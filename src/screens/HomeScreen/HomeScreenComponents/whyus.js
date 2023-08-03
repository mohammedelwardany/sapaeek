import { Button, Col, Row } from "antd";
import CircleImgModal from "../../SharedComponents/circleImageModal";

const WhyUs = () => {
  return (
    <>
      <div id="whyus">
        <h1 className=" font headTitle">لماذا سبائك</h1>
        <p className="m-0 font text-center">تابع معنا الفيديو</p>
        <div className="App-header lil-size">
            <br/><br/><br/>
        
        <video controls="true" className="w-80-responsive" src={require("../../../assets/homeScreen/video.mp4")} />

        </div>

        <br/><br/><br/><br/>
<Row className="directionAr">
    <Col className="flex-col-center mx-20 " sm={24} md={24} lg={12}>
        <div className="bg-whyus rounded  w-80-responsive"></div>
    {/* <img src={require("../../../assets/homeScreen/Vedioscreen.png")} className="w-80 rounded"/> */}
      
        
        
        </Col>
    <Col className="flex-col-start mx-20 px-20" sm={24} md={24} lg={12}>
        

    
    <p className=" font bold-text">لشركة سبائك مميزات كثيرة</p>

        <ul className="normal-text font m-0">
            <li>خبراء متخصصين</li>
            <li>سرعة التنفيذ</li>
            <li>اسعار مناسبه لا تقبل المنافسه</li>
            <li>المساعده في نجاح مشروعك</li>
            <li>افكار رائعه</li>
            <li>جودة المنتج</li>
        </ul>
<br/><br/>
{/* <p className="font bold-text">كما يمكنك الاستفاده بـ</p>
        <ul className="normal-text font m-0" >
            <li>الميزة الاولي</li>
            <li>الميزة الاولي</li>
            <li>الميزة الاولي</li>
            <li>الميزة الاولي</li>
            <li>الميزة الاولي</li>
        </ul> */}
    </Col>
</Row>
      </div>
    </>
  );
};

export default WhyUs;
