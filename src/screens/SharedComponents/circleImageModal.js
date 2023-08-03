import React, { useState } from "react";
import { Avatar, Button, Modal, Card, Row, Col } from "antd";

const gridStyle = {
  width: "100%",
  textAlign: "right",
  boxShadow: "none",
};

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
        src={
          <img
            src={require("../../assets/homeScreen/Vedioscreen.png")}
            alt="avatar"
          />
        }
      />

      <h4 className="font redtxt text">الخدمه الاولي</h4>
      <button className="btnApp m-0" onClick={showModal}>
        {" "}
        <h4>إكتشف المزيد</h4>
      </button>

      <Modal
        open={open}
        title="Title"
        onOk={handleOk}
        footer={[
          <Button
            key="submit"
            className="submit_button"
            loading={loading}
            onClick={handleOk}
          >
            الحصول على الخدمه
          </Button>,
        ]}
      >
        <Card>
          <Card.Grid hoverable={false} style={gridStyle}>
            <h4 style={{ color: "#F29F05" }}>خدمات برمجة المواقع</h4>

            <Row gutter={16}>
              <Col span={12}>
                <div className="imgtitle">
                  <img
                    src={require("../../assets/homeScreen/Rectangle 10.png")}
                    style={{ width: "100%" }}
                  />
                </div>
              </Col>
              <Col span={12}>
                <div>
                  <p>
                    يمكنك صناعة موقعك الخاص بكل ما تريد من خدمات مواقع تسويقية
                    مواقع تجارة الكترونيه مواقع شركات مواقع تعريفيه مواقع ادارية
                    ويمكنك ايضا ادارة موقعك من خلال داش بورد والتحكم به
                  </p>
                </div>
              </Col>
            </Row>
          </Card.Grid>

          <Card.Grid hoverable={false} style={gridStyle}>
            <h4 className="section_2_header">من اعمالنا</h4>
            <Row className="section_2_items" gutter={16}>
              <Col  className="flex-col-center mx-20" xs={24} sm={24} md={8} lg={8} xl={8} >
                <div className="div__items_Section_2">
                  <div className="section_2_items">
                    <img
                      src={require("../../assets/homeScreen/Rectangle 17.png")}
                      style={{ width: "100%" }}
                    />
                  </div>
                  <p> اسم الموقع</p>
                </div>
              </Col>
              <Col className="flex-col-center mx-20" xs={24} sm={24} md={8} lg={8} xl={8} >
                <div className="div__items_Section_2">
                  <div className="section_2_items">
                    <img
                      src={require("../../assets/homeScreen/Rectangle 17.png")}
                      style={{ width: "100%" }}
                    />
                  </div>
                  <p> اسم الموقع</p>
                </div>
              </Col>
              <Col className="flex-col-center mx-20" xs={24} sm={24} md={8} lg={8} xl={8} >
                <div className="div__items_Section_2">
                  <div className="section_2_items">
                    <img
                      src={require("../../assets/homeScreen/Rectangle 17.png")}
                      style={{ width: "100%" }}
                    />
                  </div>
                  <p> اسم الموقع</p>
                </div>
              </Col>
            </Row>
          </Card.Grid>
          <Card.Grid hoverable={false} style={gridStyle}>
            <h4 className="section_2_header">من عملائنا</h4>
            <Row className="section_2_items" gutter={16}>
              <Col className="flex-col-center mx-20" xs={24} sm={12} md={12} lg={6} xl={6} >
                <div>
                  <div className="section_2_items">
                    <img
                      src={require("../../assets/homeScreen/Ellipse 6.png")}
                      style={{ width: "100%" }}
                    />
                  </div>
                  <p> اسم الشركه</p>
                </div>
              </Col>
              <Col className="flex-col-center mx-20" xs={24} sm={12} md={12} lg={6} xl={6} >
                <div>
                  <div className="section_2_items">
                    <img
                      src={require("../../assets/homeScreen/Ellipse 6.png")}
                      style={{ width: "100%" }}
                    />
                  </div>
                  <p> اسم الشركه</p>
                </div>
              </Col>
              <Col className="flex-col-center mx-20" xs={24} sm={12} md={12} lg={6} xl={6} >
                <div>
                  <div className="section_2_items">
                    <img
                      src={require("../../assets/homeScreen/Ellipse 6.png")}
                      style={{ width: "100%" }}
                    />
                  </div>
                  <p> اسم الشركه</p>
                </div>
              </Col>

              <Col className="flex-col-center mx-20" xs={24} sm={12} md={12} lg={6} xl={6} >
                <div>
                  <div className="section_2_items">
                    <img
                      src={require("../../assets/homeScreen/Ellipse 6.png")}
                      style={{ width: "100%" }}
                    />
                  </div>
                  <p> اسم الشركه</p>
                </div>
              </Col>
            </Row>
          </Card.Grid>
        </Card>
      </Modal>
    </>
  );
};
export default CircleImgModal;
