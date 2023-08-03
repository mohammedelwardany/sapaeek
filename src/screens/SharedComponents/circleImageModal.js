import React, { useState } from "react";
import { Avatar, Button, Modal, Card, Row, Col } from "antd";
import { Link, animateScroll as scroll } from 'react-scroll';

const gridStyle = {
  width: "100%",
  textAlign: "right",
  boxShadow: "none",
};

const CircleImgModal = ({code , iconSrc , outTitle}) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const scrollToElement = (id) => {
    scroll.scrollTo(document.getElementById(id).offsetTop, {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Avatar
        //  size={{ xs: 50, sm: 80, md: 150, lg: 150, xl: 150, xxl: 200 }}
        size={150}
        src={
          <div style={{width:"100%",backgroundColor:"#15453D",padding:"2.5vh"}}>
            {iconSrc}
          </div>
        }
      />

      <h4 className="font redtxt text">{outTitle}</h4>
      <button className="btnApp m-0" onClick={showModal}>
        {" "}
        <h4>إكتشف المزيد</h4>
      </button>

      <Modal
        open={open}
        onCancel={handleCancel}
        onOk={handleOk}
        width={"80%"}
        footer={[
          <div className="flex-row-center mb-30">

          
          <Button
            key="submit"
            className="submit_button font normal-normal-text"
            loading={loading}
            onClick={()=>{
              handleOk();
              scrollToElement('contactus');
            }}
          >
            الحصول على الخدمه
          </Button></div>
        ]}
      >
{code}
      </Modal>
    </>
  );
};
export default CircleImgModal;
