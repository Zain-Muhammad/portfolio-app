

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBFormInline,
  MDBAnimation
} from "mdbreact";
import Typical from 'react-typical';
import "./index.css";
import './style.css';
import './cv.txt';

class Home extends React.Component {


  render() {

    return (
      <div id="apppage">

        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBCol
                  md="6"
                  className="white-text text-center text-md-left  mb-5"
                >
                  <MDBAnimation type="fadeInLeft" delay=".3s">
                  <MDBAnimation type="pulse" delay="8s" infinite >
                    <h1 className="h1-responsive font-weight-bold mt-sm-5 home-main-head">
                      Hi I am <span className="span-home-head">Zain Muhammad</span>
                    </h1>
                    </MDBAnimation>
                    <hr className="hr-light" />
                   
                         <div>
 <h2 className="typical-lines"> 
 I am &nbsp;
<Typical
        loop={Infinity}
        steps={[
          
          'Pixel Perfect Front-End Web Developer.', 1000,
          'Graphic Designer and much familiar with using the tools Adobe Photoshop CC, Adobe illustrator CC.', 1000,
          'HTML5 CSS3 DEVELOPER.',1000,
          'BootStrap4 DEVELOPER.',1000,
          'JavaScript DEVELOPER.',1000,
          'jQuery DEVELOPER.',1000,
          'JSX DEVELOPER.',1000,
          'React.js DEVELOPER.',1000,
          'MDBootStrap DEVELOPER.',1000,
          'MDBReact DEVELOPER.',1000,
          'VueJs DEVELOPER.',1000,
          'Vuejs_Laravel DEVELOPER.',1000,
          'Vuetify DEVELOPER.',1000,
          'php_Laravel DEVELOPER.',1000,
          'Wordpress DEVELOPER.',1000,
          'Wordpress Theme Customizer.',1000,
          'Shopify DEVELOPER.',1000,
          'Shopify Theme Customizer.',1000,
          'Shopify Theme Customizer.',1000,
          'familiar with version Control using Git.',1000,
          'Google Certified in The Basic Foundations Of Digital Marketing.',1000,
          'Certified in Web Development CSS3cratch till advanced Project Based.',1000,
          'Certified in Spoken English.',1000,
          'Certified in computer Foundations.',1000,
          
          

          ]}
        
        wrapper="h2"
        wrapper="b"
        className="typical-lines-skills"
      />
      </h2>
</div>

                    
                   
                    <a href="https://drive.google.com/file/d/1pKWajUHpyPxbUu-DKW0cdG8MA4EVXINA/view?usp=sharing" download><MDBBtn color="white"  >Download Cv</MDBBtn></a>
                    
                  </MDBAnimation>
                </MDBCol>

                <MDBCol md="6" xl="5" className="mt-xl-0 mt-0">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                   <MDBAnimation type="pulse" delay="7s" infinite className="slow" >
                    <img
                      src={process.env.PUBLIC_URL + '/assets/images/PngItem_2194090.png'}
                      alt=""
                      className="img-fluid logo-right center "
                    />
                    </MDBAnimation>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>


      </div>
    );
  }
}

export default Home;