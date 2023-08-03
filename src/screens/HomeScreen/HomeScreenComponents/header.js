import { Button } from "antd";
import { Link, animateScroll as scroll } from 'react-scroll';


const Header = () => {
    const scrollToElement = (id) => {
        scroll.scrollTo(document.getElementById(id).offsetTop, {
          duration: 500,
          delay: 0,
          smooth: 'easeInOutQuart'
        });
      };
return(
    <>
    <div className="App-header home-header" id="topHeader">
        <img className="logo-inside" src={require("../../../assets/homeScreen/logo.png")}/>
        <h1 className="font">سبائك للحلول المتكامله</h1>
        {/* <Button type="primary" size="large" >إكتشف المزيد</Button> */}
        <button className="btnApp" onClick={() => scrollToElement('services')}> <h2>إكتشف المزيد</h2></button>
    </div>
    </>
)

}

export default Header;