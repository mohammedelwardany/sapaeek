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
            <img src={require("../../../assets/homeScreen/logo.png")} className='logoNav' style={{scale:"150%"}}/>
            <br/><br/>
            <p className="bold-text font mb-5 mt-25">تابعونا على</p>
            <div>
            <a href="https://www.facebook.com/ALMOHASEB_Acc/?paipv=0&eav=Afa6kKuCvj2kxvc6tyJTxUJQ2r3yqfrsXbSNrsncUbwukzBgGnvmhKQQ8pSpgsQllDA&_rdr" target="_blank">
            <i class="fa-brands fa-square-facebook normal-normal-text"></i>
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://instagram.com/sabiks_pc?igshid=ZGUzMzM3NWJiOQ==" target="_blank">
            <i class="fa-brands fa-instagram normal-normal-text"></i>
            </a>

            </div>

            </Col>
            <Col className="flex-col-center mx-20 justfy-start" xs={24} sm={24} md={8} lg={8} xl={8}>
<p className="bold-text font">يمكنك التواصل معنا</p>
<p className="normal-text font m-0">عبر الهاتف</p>
<p className="normal-text font m-0 directionnonAr">0096599131995</p>
<p className="normal-text font m-0 directionnonAr">00201149166240</p>

<br/>
<p className="normal-text font m-0">عبر البريد الالكتروني</p>
<p className="normal-text font m-0">acc_db_com@outlook.sa</p>
<p className="normal-text font m-0">haitham_telb@hotmail.com</p>


            </Col>
            <Col className="flex-col-center mx-20 justfy-start" xs={24} sm={24} md={8} lg={8} xl={8}>
<p className="bold-text font">نتشرف بزيارتكم</p>
<p className="normal-text font m-0">
فرع الكويت</p>
<p className="normal-text font m-0">
الكويت ، شرق برج الدروازة 51 الدور 13-15
</p>
<br/>
<p className="normal-text font m-0">
فرع مصر</p>
<p className="normal-text font m-0">
سوهاج - جرجا – المزلقان القبلي – برج البارودي الدور الاول

</p>


            </Col>
        </Row>
      </div>  
    </div>
   
    </>
)

}

export default Foooter;