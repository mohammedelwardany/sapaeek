import { Button, Col, Row, Avatar, Modal, Card, Image } from "antd";
import CircleImgModal from "../../SharedComponents/circleImageModal";
const gridStyle = {
  width: "100%",
  textAlign: "right",
  boxShadow: "none",
};

const Services = () => {
  return (
    <>
      <div className="service-bg" id="services">
        <h1 className="m-0 font headTitle">خــــدمـــاتنــا</h1>
        <div className="App-header lil-size">
          <br />
          <br />
          <br />
          <Row className="w-80 directionAr">
            <Col
              className="flex-col-center mx-20"
              xs={24}
              sm={24}
              md={12}
              lg={8}
              xl={8}
            >
              <CircleImgModal
                outTitle={"المحاسبة والتدقيق المالي"}
                iconSrc={<i class="fa-solid fa-coins iconSet"></i>}
                code={
                  <>
                    <Card>
                      <Card.Grid hoverable={false} style={gridStyle}>
                        <Row gutter={16} className="flex-row-center">
                          <Col xs={24} sm={24} md={12}>
                            <div className="imgtitle">
                            <i class="fa-solid fa-coins icon-inside"></i>
                            </div>
                          </Col>
                          <Col xs={24} sm={24} md={12}>
                            <div>
                              <h4
                                style={{ color: "#F29F05" }}
                                className="font bold-bold-text"
                              >
                                المحاسبة والتدقيق المالي{" "}
                              </h4>
                              <p className="font normal-normal-text">
                                يقدم هذا القسم خدمات متعدة من حيث التدقيق على
                                كافة العمليات المالية لاصحاب العمل واعداد
                                التقارير التي من خلالها تساعد اصحاب المشاريع في
                                اتخاذ القرار المناسب قسم التدقيق المالي مختلف
                                تماما عن مكاتب المحاسبة حيث اننا ليس فقط نعمل من
                                حيث المستندات والارقام ولكن نعمل ايضا من وخلال
                                للافصاح لصاحب العمل وامكانية اتخاذ القرار
                                المناسب
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Card.Grid>
                    </Card>
                  </>
                }
              />
            </Col>
            <Col
              className="flex-col-center mx-20"
              xs={24}
              sm={24}
              md={12}
              lg={8}
              xl={8}
            >
              <CircleImgModal
                outTitle={"المشاريع"}
                iconSrc={<i class="fa-solid fa-diagram-project iconSet"></i>}
                code={
                  <>
                    <Card>
                      <Card.Grid hoverable={false} style={gridStyle}>
                        <Row gutter={16} className="flex-row-end">
                          <Col xs={24} sm={24} md={12}>
                            <div className="imgtitle">
                            <i class="fa-solid fa-diagram-project icon-inside"></i>
                            </div>
                          </Col>
                          <Col xs={24} sm={24} md={12}>
                            <div>
                              <h4
                                style={{ color: "#F29F05" }}
                                className="font bold-bold-text"
                              >
                                المشاريع
                              </h4>
                              <p className="font normal-normal-text">
                                يعمل قسم المشاريع فى اتجاهين : الاتجاة الاول
                                مشروع جديد وهذا يبدا من حيث توقيع العقد مع
                                الشركة واعداد دراسة جدوي مفصلة واعداد عروض
                                الاسعار ومناقشتها مع صاحب المشروع وتوريد كافة
                                متطلبات المشروع وفقا للعقد المبرم والمتفق علية
                                حتي يتم استلام المشروع وتبدا بعد ذلك المرحلة
                                الثانية وهي متابعة كافة الحسابات الاتجاة الثاني
                                مشروع قائم بالفعل : يتم اعداد دراسة اقتصادية
                                بكافة الجوانب المتعلقة بالمشروع وكذلك الجوانب
                                المالية والقوائم المالية من اجل الوصول الي
                                الاهداف الايجابية وتطويرها والاهداف السلبية
                                ومعالجتها واعداد خطط بديلة يتم مناقشتها مع صاحب
                                المشروع
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Card.Grid>
                    </Card>
                  </>
                }
              />
            </Col>
            <Col
              className="flex-col-center mx-20"
              xs={24}
              sm={24}
              md={12}
              lg={8}
              xl={8}
            >
              <CircleImgModal
                outTitle={"برمجة المواقع والتطبيقات"}
                iconSrc={<i class="fa-solid fa-laptop-code iconSet"></i>}
                code={
                  <>
                    <Card>
                      <Card.Grid hoverable={false} style={gridStyle}>
                        <Row gutter={16} className="flex-row-start">
                          <Col xs={24} sm={24} md={12}>
                            <div className="imgtitle">
                            <i class="fa-solid fa-laptop-code icon-inside"></i>
                            </div>
                          </Col>
                          <Col xs={24} sm={24} md={12}>
                            <div>
                              <h4
                                style={{ color: "#F29F05" }}
                                className="font bold-bold-text"
                              >
                                برمجة المواقع والتطبيقات{" "}
                              </h4>
                              <p className="font normal-normal-text">
                                تم انشاء هذا القسم وهو ليس بجديد فى عالم الويب
                                والانترنت وذلك من اجل اشهر وتسويق المشروعات
                                الصغري والمتوسطة لصحاب الاعمال والعملاء معانا
                                بالشركة وهذة تكون خدمة باسعار رمزية الهدف
                                مردورها يعود على عملائنا الكرام فأن نجاح عميل
                                لدينا يعني نجاح الشركة ونجاح فريق العمل القائم
                                علية. يمكن ايضا انشاء مواقع لكافة الانشطة
                                المشروعات الكبري والصغري والمتوسطة الغير متعقدين
                                معانا وتكون لهم خدمات خاصة ايضا واسعار مناسبة
                                جدا ويوجد لدينا على المستوي المحلي والخارجي
                                عملاء لنا ايضا
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Card.Grid>

                      <Card.Grid hoverable={false} style={gridStyle}>
                        <h4 className="section_2_header font bold-bold-text">
                          من اعمالنا
                        </h4>
                        <Row className="section_2_items" gutter={16}>
                          <Col
                            className="flex-col-center mx-20"
                            xs={24}
                            sm={24}
                            md={8}
                            lg={8}
                            xl={8}
                          >
                            <div className="div__items_Section_2">
                              <div className="section_2_items">
                                <Image
                                  src={require("../../../assets/homeScreen/webApps/mockup quantum.jpg")}
                                  style={{ width: "100%" }}
                                />
                                {/* <img
   
            /> */}
                              </div>
                              <p className="font normal-normal-text">
                                {" "}
                                كوانتم لتكنولوجيا المعلومات
                              </p>
                            </div>
                          </Col>
                          <Col
                            className="flex-col-center mx-20"
                            xs={24}
                            sm={24}
                            md={8}
                            lg={8}
                            xl={8}
                          >
                            <div className="div__items_Section_2">
                              <div className="section_2_items">
                                <Image
                                  src={require("../../../assets/homeScreen/webApps/mockup teeba.jpg")}
                                  style={{ width: "100%" }}
                                />
                              </div>
                              <p className="font normal-normal-text">
                                {" "}
                                طيبة للتحول الرقمي
                              </p>
                            </div>
                          </Col>
                          <Col
                            className="flex-col-center mx-20"
                            xs={24}
                            sm={24}
                            md={8}
                            lg={8}
                            xl={8}
                          >
                            <div className="div__items_Section_2">
                              <div className="section_2_items">
                                <Image
                                  src={require("../../../assets/homeScreen/webApps/sems mock.jpg")}
                                  style={{ width: "100%" }}
                                />
                              </div>
                              <p className="font normal-normal-text">
                                {" "}
                                المؤتمر السعودي للاسعافات الاوليه
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Card.Grid>
                    </Card>
                  </>
                }
              />
            </Col>
            <Col
              className="flex-col-center mx-20"
              xs={24}
              sm={24}
              md={12}
              lg={8}
              xl={8}
            >
              <CircleImgModal
                outTitle={"التسويق والتصاميم والجرافيك"}
                iconSrc={<i class="fa-solid fa-pen-nib iconSet"></i>}
                code={
                  <>
                    <Card>
                      <Card.Grid hoverable={false} style={gridStyle}>
                        <Row gutter={16} className="flex-row-start">
                          <Col xs={24} sm={24} md={12}>
                            <div className="imgtitle">
                            <i class="fa-solid fa-pen-nib icon-inside"></i>
                            </div>
                          </Col>
                          <Col xs={24} sm={24} md={12}>
                            <div>
                              <h4
                                style={{ color: "#F29F05" }}
                                className="font bold-bold-text"
                              >
                                التسويق والتصاميم والجرافيك{" "}
                              </h4>
                              <p className="font normal-normal-text">
                                تم انشاء هذا القسم لدعم اصحاب المشروعات الصغري
                                والمتوسطة والكبري ( عملائنا ) ويتمتعون بأفضلية
                                في كل شي على مستوي الخدمة والاسعار , يوجد ايضا
                                هدايا مقدمة من الشركة وعروض متميزة الهدف منها
                                ارضاء عملائنا وتحقيق اكبر استفادة لهم من حيث
                                الوصول الي اكبر عدد من الزبائن وتحقيق ارباح
                                ولاننسي دائما ان نجاح العميل يمثل لنا نجاح
                                الشركة وفريق العمل
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Card.Grid>
                    </Card>
                  </>
                }
              />
            </Col>
            <Col
              className="flex-col-center mx-20"
              xs={24}
              sm={24}
              md={12}
              lg={8}
              xl={8}
            >
              <CircleImgModal
                outTitle={"البرامج المحاسبية"}
                iconSrc={<i class="fa-solid fa-desktop iconSet"></i>}
                code={
                  <>
                    <Card>
                      <Card.Grid hoverable={false} style={gridStyle}>
                        <Row gutter={16} className="flex-row-end">
                          <Col xs={24} sm={24} md={12}>
                            <div className="imgtitle">
                            <i class="fa-solid fa-desktop icon-inside"></i>
                            </div>
                          </Col>
                          <Col xs={24} sm={24} md={12}>
                            <div>
                              <h4
                                style={{ color: "#F29F05" }}
                                className="font bold-bold-text"
                              >
                                البرامج المحاسبية{" "}
                              </h4>
                              <p className="font normal-normal-text">
                                طبقا للتحول الرقمي فى الفترة القادمة والتي
                                بداءات بالفعل نقدم خدماتنا في مجال البرامج
                                المحاسبية لكافة المشاريع والانشطة واصدار
                                الفواتير الرقمية مع ربطها بالمصلحة والهيئة
                                الرقابية الضرائب واعداد دورة محاسبية رقمية
                                واليكترونية لاصحاب المشروعات وذلك لتحقيق افضل
                                استفادة وارباح لتنظيم العمل
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Card.Grid>

                      <Card.Grid hoverable={false} style={gridStyle}>
                        <h4 className="section_2_header font bold-bold-text">
                          من اعمالنا
                        </h4>
                        <Row className="section_2_items" gutter={16}>
                          <Col
                            className="flex-col-center mx-20"
                            xs={24}
                            sm={24}
                            md={8}
                            lg={8}
                            xl={8}
                          >
                            <div className="div__items_Section_2">
                              <div className="section_2_items">
                                <Image
                                  src={require("../../../assets/homeScreen/disktopApps/gold.png")}
                                  style={{ width: "100%" }}
                                />
                                {/* <img
   
            /> */}
                              </div>
                              <p className="font normal-normal-text">
                                برامج الذهب والمجوهرات
                              </p>
                              {/* <p className="font normal-text">
                              
                            يعد برنامج الذهب والمجوهرات والماركات من البرامج التي تتيح اصدار فاتورة اليكترونية مطابقة لتعليمات وزارة التجارة وغسيل الاموال وسهولة اعداد التقارير المالية المطلوبة من قبل الوزارة
                            <br/> <br/>
كما تتيح لاصحاب المشروع الاطلاع على كل ايرادات ومصروفات المشروع (محل-شركة -بيع اون لاين) برنامج سهل الاستخدام والتعامل ويساعدك في انجاز المعاملات بشكل افضل واسرع كما يتمتع بكفاءة عالية فى التقارير والحماية وسهولة الحصول على البيانات ومعلومات النشاط .

                              </p> */}
                            </div>
                          </Col>
                          <Col
                            className="flex-col-center mx-20"
                            xs={24}
                            sm={24}
                            md={8}
                            lg={8}
                            xl={8}
                          >
                            <div className="div__items_Section_2">
                              <div className="section_2_items">
                                <Image
                                  src={require("../../../assets/homeScreen/disktopApps/law.png")}
                                  style={{ width: "100%" }}
                                />
                              </div>
                              <p className="font normal-normal-text">
                                {" "}
                                برنامج المحامي الشامل                              </p>
                            </div>
                          </Col>
                          <Col
                            className="flex-col-center mx-20"
                            xs={24}
                            sm={24}
                            md={8}
                            lg={8}
                            xl={8}
                          >
                            <div className="div__items_Section_2">
                              <div className="section_2_items">
                                <Image
                                  src={require("../../../assets/homeScreen/disktopApps/tagzea.png")}
                                  style={{ width: "100%" }}
                                />
                              </div>
                              <p className="font normal-normal-text">
                                {" "}
                                برنامج نقاط البيع والبيع بالتجزئة                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Card.Grid>
                    </Card>

{/* 

                    برامج الذهب والمجوهرات
يعد برنامج الذهب والمجوهرات والماركات من البرامج التي تتيح اصدار فاتورة اليكترونية مطابقة لتعليمات وزارة التجارة وغسيل الاموال وسهولة اعداد التقارير المالية المطلوبة من قبل الوزارة
كما تتيح لاصحاب المشروع الاطلاع على كل ايرادات ومصروفات المشروع (محل-شركة -بيع اون لاين) برنامج سهل الاستخدام والتعامل ويساعدك في انجاز المعاملات بشكل افضل واسرع كما يتمتع بكفاءة عالية فى التقارير والحماية وسهولة الحصول على البيانات ومعلومات النشاط .
برنامج المحامي الشامل
يعد برنامج المحامي الشامل من البرامج الهامة للمحامي والمندوبين 
حيث ان البرنامج يتيح اصدار عقد اليكتروني بجانب امكانية رفع وتحميل العقد الاصلي ارشيف اليكتروني
يتيح اصدار سند قبض مالي وصرف وكذلك اصدار شيكات 
يتيح متابعة القضية وتسجيل بيانات الموكلين والحصول على تقارير هامة  ومختلفة للموكلين واصحاب المكتب
برنامج نقاط البيع والبيع بالتجزئة
برنامج نقاط البيع والتجزئة من البرامج الخفيفة لاصحاب المحلات والمشروعات الصغري والمتوسطة 
ويركز كثيرا على اصدار فاتورة بيع وشراء للمشروعات مع معرفة حركة النقدية والتدفقات 
يتيح تسجيل المصروفات والايرادات واعداد تقارير عنها 
مستخدمي البرنامج 
محلات الموبيلات -قطع الغيار -الماركت والبقالات -مكتبة -وكل ماله علاقة بمبيعات التجزئة */}
                  </>
                }
              />
            </Col>
            <Col
              className="flex-col-center mx-20"
              xs={24}
              sm={24}
              md={12}
              lg={8}
              xl={8}
            >
              <CircleImgModal
                outTitle={"الاداره"}
                iconSrc={<i class="fa-solid fa-handshake iconSet"></i>}
                code={
                    <>
                    <Card>
                      <Card.Grid hoverable={false} style={gridStyle}>
                        <Row gutter={16} className="flex-row-center">
                          <Col xs={24} sm={24} md={12}>
                            <div className="imgtitle">
                            <i class="fa-solid fa-handshake icon-inside"></i>
                            </div>
                          </Col>
                          <Col xs={24} sm={24} md={12}>
                            <div>
                              <h4
                                style={{ color: "#F29F05" }}
                                className="font bold-bold-text"
                              >
                                الاداره
                              </h4>
                              <p className="font normal-normal-text">
                              شركة المحاسب لادارة المشاريع و تدار بكوادر وطنية ذو كفاءة عالية تقوم علي تقديم كافة الخدمات المتعلقة بالحسابات المالية والبرامج المحاسبية والتصاميم المختلفة (ويب واعلانات) بجانب التسويق الاليكتروني
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Card.Grid>
                    </Card>
                  </>
                }
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Services;

// <>
// <Card>
//   <Card.Grid hoverable={false} style={gridStyle}>
//     <Row gutter={16}>
//       <Col xs={24} sm={24} md={12}>
//         <div className="imgtitle">
//           <img
//             src={require("../../../assets/homeScreen/Rectangle 10.png")}
//             style={{ width: "100%" }}
//           />
//         </div>
//       </Col>
//       <Col xs={24} sm={24} md={12}>
//         <div>
//           <h4
//             style={{ color: "#F29F05" }}
//             className="font bold-bold-text"
//           >
//             المحاسبة والتدقيق المالي{" "}
//           </h4>
//           <p className="font normal-normal-text">
//             يقدم هذا القسم خدمات متعدة من حيث التدقيق على
//             كافة العمليات المالية لاصحاب العمل واعداد
//             التقارير التي من خلالها تساعد اصحاب المشاريع في
//             اتخاذ القرار المناسب قسم التدقيق المالي مختلف
//             تماما عن مكاتب المحاسبة حيث اننا ليس فقط نعمل من
//             حيث المستندات والارقام ولكن نعمل ايضا من وخلال
//             للافصاح لصاحب العمل وامكانية اتخاذ القرار
//             المناسب
//           </p>
//         </div>
//       </Col>
//     </Row>
//   </Card.Grid>

//   <Card.Grid hoverable={false} style={gridStyle}>
//     <h4 className="section_2_header">من اعمالنا</h4>
//     <Row className="section_2_items" gutter={16}>
//       <Col
//         className="flex-col-center mx-20"
//         xs={24}
//         sm={24}
//         md={8}
//         lg={8}
//         xl={8}
//       >
//         <div className="div__items_Section_2">
//           <div className="section_2_items">
//             <img
//               src={require("../../../assets/homeScreen/Rectangle 17.png")}
//               style={{ width: "100%" }}
//             />
//           </div>
//           <p> اسم الموقع</p>
//         </div>
//       </Col>
//       <Col
//         className="flex-col-center mx-20"
//         xs={24}
//         sm={24}
//         md={8}
//         lg={8}
//         xl={8}
//       >
//         <div className="div__items_Section_2">
//           <div className="section_2_items">
//             <img
//               src={require("../../../assets/homeScreen/Rectangle 17.png")}
//               style={{ width: "100%" }}
//             />
//           </div>
//           <p> اسم الموقع</p>
//         </div>
//       </Col>
//       <Col
//         className="flex-col-center mx-20"
//         xs={24}
//         sm={24}
//         md={8}
//         lg={8}
//         xl={8}
//       >
//         <div className="div__items_Section_2">
//           <div className="section_2_items">
//             <img
//               src={require("../../../assets/homeScreen/Rectangle 17.png")}
//               style={{ width: "100%" }}
//             />
//           </div>
//           <p> اسم الموقع</p>
//         </div>
//       </Col>
//     </Row>
//   </Card.Grid>
//   <Card.Grid hoverable={false} style={gridStyle}>
//     <h4 className="section_2_header">من عملائنا</h4>
//     <Row className="section_2_items" gutter={16}>
//       <Col
//         className="flex-col-center mx-20"
//         xs={24}
//         sm={12}
//         md={12}
//         lg={6}
//         xl={6}
//       >
//         <div>
//           <div className="section_2_items">
//             <img
//               src={require("../../../assets/homeScreen/Ellipse 6.png")}
//               style={{ width: "100%" }}
//             />
//           </div>
//           <p> اسم الشركه</p>
//         </div>
//       </Col>
//       <Col
//         className="flex-col-center mx-20"
//         xs={24}
//         sm={12}
//         md={12}
//         lg={6}
//         xl={6}
//       >
//         <div>
//           <div className="section_2_items">
//             <img
//               src={require("../../../assets/homeScreen/Ellipse 6.png")}
//               style={{ width: "100%" }}
//             />
//           </div>
//           <p> اسم الشركه</p>
//         </div>
//       </Col>
//       <Col
//         className="flex-col-center mx-20"
//         xs={24}
//         sm={12}
//         md={12}
//         lg={6}
//         xl={6}
//       >
//         <div>
//           <div className="section_2_items">
//             <img
//               src={require("../../../assets/homeScreen/Ellipse 6.png")}
//               style={{ width: "100%" }}
//             />
//           </div>
//           <p> اسم الشركه</p>
//         </div>
//       </Col>

//       <Col
//         className="flex-col-center mx-20"
//         xs={24}
//         sm={12}
//         md={12}
//         lg={6}
//         xl={6}
//       >
//         <div>
//           <div className="section_2_items">
//             <img
//               src={require("../../../assets/homeScreen/Ellipse 6.png")}
//               style={{ width: "100%" }}
//             />
//           </div>
//           <p> اسم الشركه</p>
//         </div>
//       </Col>
//     </Row>
//   </Card.Grid>
// </Card>
// </>
