import ContactUs from "./HomeScreenComponents/contactus";
import Header from "./HomeScreenComponents/header";
import Services from "./HomeScreenComponents/services";
import WhoUs from "./HomeScreenComponents/whous";
import WhyUs from "./HomeScreenComponents/whyus";



const Home = () => {

    return(
        <>
        <Header/>
        <Services/>
        <WhyUs/>
        <WhoUs/>
        <ContactUs/>
        </>
    )
    
    }
    
    export {Home};