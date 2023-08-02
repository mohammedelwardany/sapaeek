import { Button } from "antd";



const Header = () => {

return(
    <>
    <div className="App-header home-header">
        <img className="logo-inside" src={require("../../../assets/homeScreen/logo.png")}/>
        <h1 className="font">سبائك للحلول المتكامله</h1>
        {/* <Button type="primary" size="large" >إكتشف المزيد</Button> */}
        <button className="btnApp"> <h2>إكتشف المزيد</h2></button>
    </div>
    </>
)

}

export default Header;