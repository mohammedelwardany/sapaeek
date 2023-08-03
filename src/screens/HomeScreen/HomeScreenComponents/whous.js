import { Button, Col, Row } from "antd";
import CircleImgModal from "../../SharedComponents/circleImageModal";
import { Link, animateScroll as scroll } from 'react-scroll';

const WhoUs = () => {

  const scrollToElement = (id) => {
    scroll.scrollTo(document.getElementById(id).offsetTop, {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };
  return (
    <>
      <div className="whous-bg" id="whoUs">
        <h1 className=" font headTitle">من نحن</h1>
        <div className="App-header lil-size">
          <Row className="w-80">
            <Col className="flex-col-center mx-20 " sm={24} md={24} lg={10}>
              <img
                src={require("../../../assets/homeScreen/logo.png")}
                className="logo-inside"
              />
            </Col>
            <Col
              className="flex-col-start mx-20 px-20 directionAr"
              sm={24}
              md={24}
              lg={14}
            >
              <p className=" font bold-bold-text">
                شركة سبائك للحلول المتكامله
              </p>
              <p className="normal-normal-text font m-0">
                 واحدة من الشركات الرائدة في مجال
                ادارة المشروعات الصغري والمتوسطة منذ عام 2014 , وهي احدي الشركات
                التي تتمتع بخبرات متميزة نالت ثقة المتعاملين معها وتقدم كافة
                الخدمات المتعلقة بالحسابات والماليات والتكنولوجيا متوافقة مع
                العصر الحديث وتقنيات التطور الغير محدود للحاسبات ويتوفر لديها
                عدة أقسام تدار بكفاءة من محاسبين محترفين ومصممين ويب وبرامج
                حسابات ومصممين كافة اعمال الديزين والتسويق الاليكتروني
              </p>
              <button className="btnApp"  onClick={() => scrollToElement('contactus')}>
                {" "}
                <h2>تواصل معنا</h2>
              </button>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default WhoUs;
