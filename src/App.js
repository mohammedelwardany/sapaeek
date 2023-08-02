import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Home } from './screens';
import "./App.css"
import Foooter from './screens/SharedComponents/footer/footer';
import NavBar from './screens/SharedComponents/NavBar/NavBar';
const { Header, Content, Footer } = Layout;
const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
<NavBar/>
      </Header>


      <Content
        className="site-layout"
        
        >
        {/* <Navbar/> */}
        
<Home/>






      </Content>
      
        <Foooter/>
      
    </Layout>
  );
};
export default App;
