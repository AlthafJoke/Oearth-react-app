import React from "react";
import Body from "../components/body/Body";
import Footer from "../components/footer/Footer";
import NavbarComponent from "../components/navbar/Navbar";
import OBG from "../OBG.jpg";


const NavigationComponent = () => {
  const backgroundImageStyle = {
    backgroundImage: `url('${OBG}')`,
    backgroundSize: "cover"
  }
  return (
    <>
    {/* <div class="w-full h-screen bg-cover  " >hello</div> */}
    
      <div className=""  style={backgroundImageStyle}>
        <NavbarComponent />

        <div class="text-center flex flex-row min-h-[100vh]">
          <div className="basis-1/4">
            <div>
              <h1>hello</h1>
            </div>
          </div>
          <div className="basis-2/3">
            <div>
              
              <Body />
            </div>
          </div>
          <div className="basis-1/3">
            <div className="bg-green-500/100  min-h-[50px] w-100">1</div>
          </div>
        </div>
        <Footer/>

      </div>
    </>
  );
};

export default NavigationComponent;
