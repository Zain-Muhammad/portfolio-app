
import React, { Component } from 'react';
import './style.css';
import {MDBAnimation } from "mdbreact";
class Service extends Component
 {
render()
{
	return(
      <div className="service">

  <MDBAnimation type="pulse" delay=".5s" infinite className="">
 <h1 className="service-main-head">Serv<span className="skill-half">ices</span></h1>
 </MDBAnimation>
 <div class="container">
<div class="row">

<div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
<div class="service-section">
<MDBAnimation type="pulse" delay=".5s" infinite className="">
<i class="fas fa-mobile-alt service-icon "></i>
</MDBAnimation>
<h3 className="services-main-head">Responsive Designs</h3>
<p class="services-para">Need service of any website Responsive Front-End development ?<br/>Status:Available .</p>
</div>

</div>

<div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
<div class="service-section ">

<MDBAnimation type="pulse" delay=".5s" infinite className="">
<i class="fas fa-code service-icon"></i>
</MDBAnimation>
<h3 className="services-main-head">Web Development</h3>
<p class="services-para">Need service of any website Front-End development and Web app Development?<br/>Status:Available .</p>


</div>

</div>


<div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
<div class="service-section">

<MDBAnimation type="pulse" delay=".5s" infinite className="">
<i class="fas fa-palette service-icon"></i>
</MDBAnimation>
<h3 className="services-main-head">Graphic Designs</h3>
<p class="services-para">Want the Creative Designs for your brands posts banners brochers gifs ,Brand Logos etc?<br/>Status:Available .</p>

</div>

</div>


</div>


 </div>

      </div>


		);
}
}
export default Service;