import React, { Fragment, createContext, useReducer } from "react";
import Layout from "../layout";
import Slider from "./Slider";
import "./style.css";
import "./styles.css"
import { homeState, homeReducer } from "./HomeContext";


//import SingleProduct from "./SingleProduct";


export const HomeContext = createContext();

const HomeComponent = () => {
  return (
    <Fragment>
      <Slider />

      <section className="container">
        <div style={{ margin: `0px`, width: '1525px', display: `flex`, flexDirection: `row`, justifyContent: `center`, height: `300px` }}>
          <div className="e-card e-card-horizontal" style={{ width: `100%`, background: `#FF8648  ` }}>
            <div style={{ display: `flex`, flexDirection: `row`, justifyContent: `center` }}>

              <div className="e-card e-card-horizontal my-8" style={{ width: `100%`, marginLeft: `70px`, fontSize: `20px` }}>

                <div className="e-card-stacked">


                  <div classname="content">
                    <h2 classname="text_shadows">Hello,welcome</h2>
                  </div>

                  <div className="e-card-header-title mx-6" style={{ color: `brown`, fontWeight: `bold` }}> <p>"Over 115,000 people worldwide urgently await organ transplants, highlighting a critical shortage of life-saving organs."<p>Our website connects organ donors and recipients, bringing together the power of humanity to save lives through life-changing organ transplants.</p> Join us in the mission of giving the gift of life!

                  </p>
                  </div>


                  <div className="e-card-content">

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="container" style={{ margin: `10px`, display: `flex`, flexDirection: `row`, justifyContent: `center`, alignContent: `space-around` }}>
          <div style={{ display: `flex`, flexDirection: `row`, justifyContent: `center` }}>
            <div className="e-card e-card-horizontal" style={{ width: `400px`, marginLeft: `70px` }}>
              <img src="https://www.careinsurance.com/upload_master/media/posts/July2023/organ-transplant.webp" alt="Sample" style={{ height: `300px`, width: `400px` }} />
              <div className="e-card-stacked">
                <div className="e-card-header">
                  <div className="e-card-header-caption">
                    <div className="e-card-header-title"><p classname="text-center" style={{ fontWeight: `bold`, color: `black`, fontSize: `20px` }}>Organ donation</p>
                    </div>
                    <p>Organ donation is when someone gives their organs or tissues to help someone else who's very sick. It's like sharing the gift of life.
                      <h1 style={{ fontWeight: `bold`, color: `black`, fontSize: `17px` }}>Types of Organ Donation:</h1>
                      <p> <h1 style={{ fontWeight: `bold`, color: `black`, fontSize: `15px` }}>Deceased Donation:</h1> Organs are taken from someone who has passed away, and they can save lives even after death.</p>
                      <p> <h1 style={{ fontWeight: `bold`, color: `black`, fontSize: `15px` }}>Living Donation:</h1> Healthy people can give away an organ (like a kidney or a part of their liver) while they're still alive to help someone in need..</p>
                      <p> <h1 style={{ fontWeight: `bold`, color: `black`, fontSize: `15px` }}>Why is Organ Donation Important?</h1> Because it can Save lives: One person's organs can save multiple lives.</p>

                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div style={{ display: `flex`, flexDirection: `row`, justifyContent: `center` }}>
            <div className="e-card e-card-horizontal" style={{ width: `400px`, marginLeft: `70px` }}>
              <img src="https://www.sakraworldhospital.com/spl_splimgs/organ%20donation-2020-1.jpg" alt="Sample" style={{ height: `300px`, width: `400px` }} />
              <div className="e-card-stacked">
                <div className="e-card-header">
                  <div className="e-card-header-caption">
                    <div className="e-card-header-title"><p classname="text-center" style={{ fontWeight: `bold`, color: `black`, fontSize: `20px` }}>How can you help?</p>

                    </div>
                    <p>
                      <h1 style={{ fontWeight: `bold`, color: `black`, fontSize: `17px` }}>Register as an organ donor: </h1>
                      <p>Let others know your wish to donate your organs when you're no longer here.</p>
                      <h1 style={{ fontWeight: `bold`, color: `black`, fontSize: `17px` }}>Share the message: </h1>
                      <p>Tell your family and friends about the importance of organ donation.</p>
                      <h1 style={{ fontWeight: `bold`, color: `black`, fontSize: `17px` }}>Share the message: </h1>
                      <p>Tell your family and friends about the importance of organ donation.</p>
                      <h1 style={{ fontWeight: `bold`, color: `black`, fontSize: `17px` }}>Consider living donation: </h1>
                      <p>If you're healthy, think about donating an organ to someone who needs it.</p>

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: `flex`, flexDirection: `row`, justifyContent: `center`, marginLeft: `70px`, marginRight: `-200px` }}>
            <div className="e-card e-card-horizontal" style={{ width: `400px` }}>
              <img src="https://www.diginerve.com/wp-content/uploads/2023/07/800x350.jpg" alt="Sample" style={{ height: `300px`, width: `400px` }} />
              <div className="e-card-stacked">
                <div className="e-card-header">
                  <div className="e-card-header-caption">
                    <div className="e-card-header-title"><p classname="text-center" style={{ fontWeight: `bold`, color: `black`, fontSize: `20px` }}>What do we do?</p>

                    </div>
                    <p>
                      <h1 style={{ fontWeight: `bold`, color: `black`, fontSize: `17px` }}>Register organ donars: </h1>
                      <p>Organ donars can create their profile on the platform after which their identity will be authenticated and legiblity will be checked on standard medical factors and then allowed for organ donation</p>
                      <h1 style={{ fontWeight: `bold`, color: `black`, fontSize: `17px` }}>Register the Receipents: </h1>
                      <p>Organ receipents can create their profile on the platform after which their identity will be authenticated and legiblity will be checked on standard medical factors and then allowed to make organ receiption request</p>
                      <h1 style={{ fontWeight: `bold`, color: `black`, fontSize: `17px` }}>Map the donars' and receipents' requests </h1>
                      <p>On the basis of data provided filter can be applied and once the match for organs is found, the receipents as well as will be notified</p>


                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section>

      </section>
      <section className="container my-30" >
        <div style={{ marginTop: '70px', width: '1525px', display: `flex`, flexDirection: `row`, justifyContent: `center`, alignItems: `center`, height: `300px` }}>
          <div className="e-card e-card-horizontal" style={{ width: `100%`, background: `#FFF1B1` }}>
            <div style={{ display: `flex`, flexDirection: `row`, justifyContent: `center` }}>

              <div className="e-card e-card-horizontal mx-4 my-" style={{ width: `100%`, marginLeft: `6px`, fontSize: `20px` }}>

                <div className="e-card-header">
                  <div className="e-card-header-caption">
                    <div className="e-card-header-title"><p classname="text mx-5" style={{ fontWeight: `bold`, color: `black`, fontSize: `20px` }}>Organs That Can Be Donated through Living Donation:</p>

                    </div>
                    <p className="e-card e-card-horizontal mx-6 my-6">
                      <h1 style={{ fontWeight: `bold`, color: `black`, fontSize: `17px` }}>Kidney </h1>
                      <p style={{ color: `black`, fontSize: `13px` }}> A healthy person can donate one of their kidneys to someone in need of a kidney transplant.</p>
                      <h1 style={{ fontWeight: `bold`, color: `black`, fontSize: `17px` }}>Liver </h1>
                      <p style={{ color: `black`, fontSize: `13px` }} >A living donor can provide a portion of their liver for transplantation, and both the donor and recipient's livers will regenerate.</p>
                      <h1 style={{ fontWeight: `bold`, color: `black`, fontSize: `17px` }}>Lungs </h1>
                      <p style={{ color: `black`, fontSize: `13px` }}> In rare cases, a segment of a lung can be donated by a living donor, usually from a family member.</p>
                      <h1 style={{ fontWeight: `bold`, color: `black`, fontSize: `17px` }}>Pancreas</h1>
                      <p style={{ color: `black`, fontSize: `13px` }}>Living pancreas donation is possible, but it's less common than other types of living donation.</p>

                    </p>
                  </div>
                </div>
              </div>
              <div className="e-card e-card-horizontal mx-6 my-5" style={{ width: `100%`, marginLeft: `-5px`, fontSize: `20px` }}>

                <div className="e-card-header">
                  <div className="e-card-header-caption">
                    <div className="e-card-header-title"><p classname="text mx-5" style={{ fontWeight: `bold`, color: `black`, fontSize: `20px`, display: `flex`, flexDirection: `row` }}>Organs / Tissues That Can Be Donated through Deceased Donation:</p>
                      <p className="e-card e-card-horizontal mx-6 my-2">
                        <h1 style={{ fontWeight: `bold`, color: `black`, fontSize: `17px` }}>Heart </h1>

                        <h1 style={{ fontWeight: `bold`, color: `black`, fontSize: `17px` }}>Kidney </h1>

                        <h1 style={{ fontWeight: `bold`, color: `black`, fontSize: `17px` }}>Liver </h1>

                        <h1 style={{ fontWeight: `bold`, color: `black`, fontSize: `17px` }}>Lungs </h1>

                        <h1 style={{ fontWeight: `bold`, color: `black`, fontSize: `17px` }}>Pancreas </h1>
                        <h1 style={{ fontWeight: `bold`, color: `black`, fontSize: `17px` }}>Corneas: For cornea transplant to restore vision. </h1>

                        <h1 style={{ fontWeight: `bold`, color: `black`, fontSize: `17px` }}>Bone: For orthopedic surgeries and bone-related conditions..</h1>

                        <h1 style={{ fontWeight: `bold`, color: `black`, fontSize: `17px` }}>Heart Valves: For heart valve replacement surgery.</h1>

                        <h1 style={{ fontWeight: `bold`, color: `black`, fontSize: `17px` }}>Blood Vessels: For various vascular procedures</h1>

                        <h1 style={{ fontWeight: `bold`, color: `black`, fontSize: `17px` }}>Connective Tissues (Tendons and Ligaments): For orthopedic and reconstructive surgeries. </h1>




                      </p>



                    </div>

                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

    </Fragment>
  );
};

const Home = (props) => {
  const [data, dispatch] = useReducer(homeReducer, homeState);
  return (
    <Fragment>
      <HomeContext.Provider value={{ data, dispatch }}>
        <Layout children={<HomeComponent />} />
      </HomeContext.Provider>
    </Fragment>
  );
};

export default Home;