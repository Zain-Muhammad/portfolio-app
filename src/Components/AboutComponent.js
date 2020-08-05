import React, { Component } from 'react';
import './style.css';
import {MDBAnimation } from "mdbreact";
import Service from './ServicesComponent';
class About extends Component
 {
render()
{
	return(
    <div className="About-us">
    <div className="container">
      <MDBAnimation type="pulse" delay=".5s" infinite className="">
     <h1 className="about-main-head">About <span className="abt-me"> ME</span></h1>
      <img
                      src={process.env.PUBLIC_URL + '/assets/images/head-underlined-01.png'}
                      alt=""
                      className="img-fluid head-underlined center "
                    />
    </MDBAnimation>
    <div className="about-section-info">
    <div className="row">
    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12">
    <MDBAnimation type="fadeInLeft" delay=".5s" className="">

   <a> <img src={process.env.PUBLIC_URL + '/assets/images/zs.jpg'} className="about-img rounded-circle" /></a>
    <h3 className="rank">Website & Mobile</h3><h3 className="rank2"> Application Developer</h3>
    </MDBAnimation>
    </div>
    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12">
    <MDBAnimation type="fadeInRight" delay=".5s" className="">
    <div class="about-right">
    <h2 className="about-me">I am <span className="my-name"> Zain Muhammad</span></h2>
    <p className="about-me-para">
    I am Pixel Perfect Front-End Web Developer & Graphic Designer and have more than 7 months 
    of experience in the field of Web Development, Desktop Application . I have the expertise 
    in the following technologies HTML5 CC3, Bootstrap4 jQuery, Javascript, JSX, React.js, Reactstrap,
     MDBootstrap, MDBReact, vue.js & php tools, php_laravel, vuejs_laravel, CMS Developer and the Wordpress
     Front-End Design tools, Elementor, WPbakery, Visual Composer, Version Control using Git and also in 
     others tools of Graphic Designer and have the expertise to creative designs using the tools of 
     Adobe Photo Shop CC and Adobe illustrator CC.<br/>
    My objectives are increasing my knowledge in computer science fields and new technologies especially,
 Front-End/Backend web development and Graphic Designing field. Always looking forward to learn new technologies and 
 be a part of a huge change in the world. Aspiring for the Competent position in a prestigious and 
 prosperous company where i can utilize my skills for the mutual batterment we both are striving for.
 </p>
 <div className="row">

  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 personal-data-hov">
  <div className="row">
  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
  <i class="fas fa-user about-icon"></i>
  </div>
  <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12">
   <h5 className="about-personal-data about-ps-data">Name<span className="star">*</span></h5>
   <h5  className="about-ps-data">Zain Muhammad</h5>
   </div>
   </div>
   </div>

    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 personal-data-hov">
    <div className="row">
  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
  <i class="fas fa-envelope about-icon"></i>
  </div>
    <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12">
   <h5 className="about-personal-data about-ps-data">
Email<span className="star">*</span></h5>
   <h5  className="about-ps-data">zainsher5@gmail.com</h5>
   </div>
   </div>
</div>
 
 <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 personal-data-hov">
  <div className="row">
  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
  <i class="fas fa-phone-volume about-icon"></i>
   </div>
    <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12">
   <h5 className="about-personal-data about-ps-data">Phone<span className="star">*</span></h5>
   <h5  className="about-ps-data">+92 322-5034501</h5>
   </div>
   </div>
 </div>

<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 personal-data-hov">
  <div className="row">
  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
  <i class="far fa-calendar-alt about-icon"></i>
   </div>
   <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12">
   <h5 className="about-personal-data about-ps-data">Date Of Birthday<span className="star">*</span></h5>
   <h5  className="about-ps-data">23 December 1997</h5>
   </div>
   </div>
</div>

<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 personal-data-hov">
  <div className="row">
  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
  <i class="fas fa-map-marker-alt about-icon"></i>
  </div>
   <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12">
   <h5 className="about-personal-data about-ps-data">Address<span className="star">*</span></h5>
   <h5  className="about-ps-data">Baghbanpura Lahore Cantt.</h5>
   </div>
   </div>
</div>


<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 personal-data-hov">
<div className="row">
  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
  <i class="fab fa-font-awesome-flag about-icon"></i>
  </div>
     <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12">
   <h5 className="about-personal-data about-ps-data">Nationality<span className="star">*</span></h5>
   <h5  className="about-ps-data">Pakistan</h5>
   </div>
   </div>
</div>


  </div>
   </div>
   </MDBAnimation>
   </div>
    </div>

    <div className="social-icons">
   <MDBAnimation type="pulse" delay=".5s" infinite className="">
    <h4>Social <span className="skill-half">Profile</span></h4>
    </MDBAnimation>
     <a href="https://www.linkedin.com/in/zain-sher/"> <i className="fab fa-linkedin social-icon"></i></a>
     <a href="https://www.behance.net/zainsher"><i className="fab fa-behance social-icon"></i></a>
     <a><i className="fab fa-facebook social-icon"></i></a>
     
    <a> <i className="fab fa-pinterest-p social-icon"></i></a>
     <a><i className="fab fa-twitter social-icon"></i></a>
   
    

    </div>


     </div>

    </div>
    
    <Service />
    </div>

		);
}



	}
	export default About;