
import React, { Component } from 'react';
import './style.css';

import { Doughnut } from "react-chartjs-2";
import { MDBContainer,MDBAnimation } from "mdbreact";
class Chart extends Component
 {
 	state = {
  dataDoughnut: {
   
    datasets: [
      {
        data: [500, 0, 0, 0, 120],
        backgroundColor: ["#00FF00", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
        hoverBackgroundColor: [
          "#00FF00",
          "#5AD3D1",
          "#FFC870",
          "#A8B3C5",
          "#616774"
        ]
      }
    ]
  }
}

render()
{
 return(
   <div className="languages">
   <MDBAnimation type="pulse" delay=".5s" infinite className="">
   <h4 className="laguage-main">LANGUAGE SKILLS & <span className="skill-half">KNOWLEDGE</span></h4>
   </MDBAnimation>
    <MDBContainer>
      <div className="row">
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }} />
      <MDBAnimation type="pulse" delay=".5s" infinite className="">
      <h4 className="lang-percent">English 80%</h4>
      </MDBAnimation>
      </div>

      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }} />
      <MDBAnimation type="pulse" delay=".5s" infinite className="">
      <h4 className="lang-percent">Urdu 99%</h4>
      </MDBAnimation>
      </div>

       </div>
    </MDBContainer>

   </div>


 	);
}}
export default Chart;