


import React, { Component } from 'react';
import './style.css';
import { Progress } from 'reactstrap';
import {MDBAnimation } from "mdbreact";
import Chart from './ChartComponent';
import Experience from './ExperienceComponent';
class Resume extends Component
 {
render()
{
	return( 
   <div className="resume">
    <MDBAnimation type="pulse" delay=".5s" infinite className="">
    <h1 className="skill-main">MY <span className="skill-half">SKILLS</span></h1>
    <img
                      src={process.env.PUBLIC_URL + '/assets/images/head-underlined-01.png'}
                      alt=""
                      className="img-fluid head-underlined center pt-4"
                    />
    </MDBAnimation>
    <div className="container">
    <div className="row">
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
    <MDBAnimation type="fadeInLeft" delay=".5s" className="">
    <MDBAnimation type="pulse" delay=".5s" infinite className="">
    <h4 className="skills-head">Marketable <span className="skill-half"> Skills</span></h4>
    </MDBAnimation>
    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <h5 className="skill-prog-head">HTML5 CSS3 Bootstrap4 jQuery <span className="skill-half">80%</span></h5>
    <Progress animated color="primary" value="80" >80%</Progress>
    </div>

    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <h5 className="skill-prog-head"> Website Designing and Development<span className="skill-half"> 80%</span></h5>
    <Progress animated color="success" value="80" >90%</Progress>
    </div>

     <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <h5 className="skill-prog-head">Graphic Designer,adobe Photoshop CC, Adobe illlustrator CC<span className="skill-half">80%</span></h5>
    <Progress animated color="primary" value="80" >80%</Progress>
    </div>

       <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <h5 className="skill-prog-head">React.js ReactStrap JSX MDBReact MDBootstrap<span className="skill-half"> 80%</span></h5>
    <Progress animated color="primary" value="80" >80%</Progress>
    </div>

       <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <h5 className="skill-prog-head">php_Laravel Vuejs_laravel Shopify CMS<span className="skill-half"> 80%</span></h5>
    <Progress animated color="primary" value="80" >80%</Progress>
    </div>

      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <h5 className="skill-prog-head">Version Control using git,bit bucket<span className="skill-half"> 80%</span></h5>
    <Progress animated color="primary" value="80" >80%</Progress>
    </div>
     </MDBAnimation>
   </div>

   <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
   <MDBAnimation type="fadeInRight" delay=".5s" className="">
   <MDBAnimation type="pulse" delay=".5s" infinite className="">
    <h4 className="skills-head skills-head-second">TRANSFERABLE<span className="skill-half"> Skills</span></h4>
    </MDBAnimation>
    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <h5 className="skill-prog-head"> Communication <span className="skill-half">80%</span></h5>
    <Progress animated color="primary" value="80" >80%</Progress>
    </div>

    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <h5 className="skill-prog-head"> Team Work<span className="skill-half"> 85%</span></h5>
    <Progress animated color="success" value="85" >85%</Progress>
    </div>

       <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <h5 className="skill-prog-head"> LeaderShip<span className="skill-half"> 80%</span></h5>
    <Progress animated color="primary" value="80" >80%</Progress>
    </div>

       <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <h5 className="skill-prog-head">Time Management<span className="skill-half"> 90%</span></h5>
    <Progress animated color="success" value="90" >90%</Progress>
    </div>
    </MDBAnimation>

   </div>


   </div>
   </div>

   <Chart />
   <Experience />
    </div>

		);
}
}
export default Resume;
