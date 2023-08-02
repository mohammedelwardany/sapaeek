import React, { useState } from 'react';
import { Avatar, Button, Modal } from 'antd';
const CircleImgModal = () => {
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
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>




<Avatar 
//  size={{ xs: 50, sm: 80, md: 150, lg: 150, xl: 150, xxl: 200 }}
size={150}
src={<img src={require("../../assets/homeScreen/Vedioscreen.png")} alt="avatar" />} />

    <h4 className='font redtxt text'>
        الخدمه الاولي
    </h4>
    <button className="btnApp m-0" onClick={showModal}> <h4>إكتشف المزيد</h4></button>



      <Modal
        open={open}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            Submit
          </Button>,
          <Button
            key="link"
            href="https://google.com"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Search on Google
          </Button>,
        ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
export default CircleImgModal;