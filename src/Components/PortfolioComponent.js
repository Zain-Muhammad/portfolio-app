import React from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBAnimation } from "mdbreact";
import { MDBBtn, MDBIcon } from "mdbreact";
import './style.css';


function Portfolio() {
  return (
    <div className="portfolio">
    <div className="container">
    <MDBAnimation type="pulse" delay=".5s" infinite className="">
    <h1 className="portfolio-main"><b>Port<span className="portfolio-colorfull">folio</span></b></h1>
    <img
                      src={process.env.PUBLIC_URL + '/assets/images/head-underlined-01.png'}
                      alt=""
                      className="img-fluid head-underlined center pt-4"
                    />
    </MDBAnimation>

    <div className="row">


          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
    <div class="flip-card">
  <div class="flip-card-inner" id="flip-inner">
    <div class="flip-card-front">
       <img
                        src={process.env.PUBLIC_URL + '/assets/images/Logo-66-01.png'}
                        alt=""
                        className="portfolio-img rounded-circle"
                      />
    </div>
    <div class="flip-card-back">
      <h1>Wordpress</h1> 
      <p className="text-white">Woocomerce <span className="portfolio-colorfull"> Site</span></p> 
      <p className="text-white">Front-End/Backend<span className="portfolio-colorfull"> Store Development & Design</span></p>
      <a  href="https://desimandee.com"><MDBBtn gradient="aqua">
        visit
      </MDBBtn></a>
    </div>
  </div>
</div>
    </div>


               <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
    <div class="flip-card">
  <div class="flip-card-inner" id="flip-inner">
    <div class="flip-card-front">
       <img
                        src={process.env.PUBLIC_URL + '/assets/images/head-underlined-01.png'}
                        alt=""
                        className="portfolio-img rounded-circle"
                      />
    </div>
    <div class="flip-card-back">
      <h1>React.js</h1> 
      <p className="text-white">Personal-Portfolio <span className="portfolio-colorfull">Template</span></p> 
      <p className="text-white">Front-End <span className="portfolio-colorfull">Development</span></p>
      <a  href="https://www.behance.net/gallery/99700547/Reactjs-SPA-Profile-App-Front-End-Development"><MDBBtn gradient="aqua">
        visit
      </MDBBtn></a>
    </div>
  </div>
</div>
    </div>



    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
    <div class="flip-card">
  <div class="flip-card-inner" id="flip-inner">
    <div class="flip-card-front">
       <img
                        src={process.env.PUBLIC_URL + '/assets/images/logo.svg'}
                        alt=""
                        className="portfolio-img rounded-circle"
                      />
    </div>
    <div class="flip-card-back">
      <h1>HTML5/CSS3</h1> 
      <p className="text-white">Motors & Property<span className="portfolio-colorfull"> Website</span></p> 
      <p className="text-white">Front-End <span className="portfolio-colorfull">Development</span></p>
      <a  href="https://aamtr.com"><MDBBtn gradient="aqua">
        visit
      </MDBBtn></a>
     
    </div>
  </div>
</div>
    </div>


           <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
    <div class="flip-card">
  <div class="flip-card-inner" id="flip-inner">
    <div class="flip-card-front">
       <img
                        src={process.env.PUBLIC_URL + '/assets/images/loading (2).gif'}
                        alt=""
                        className="portfolio-img rounded-circle"
                      />
    </div>
    <div class="flip-card-back">
      <h1>React.js</h1> 
      <p className="text-white">Barber-Shop <span className="portfolio-colorfull">Template</span></p> 
      <p className="text-white">Front-End <span className="portfolio-colorfull">Development</span></p>
      <a  href="https://www.behance.net/gallery/96518697/Reactjs-%28SPA%29-Template-Development-Barber-Shop"><MDBBtn gradient="aqua">
        visit
      </MDBBtn></a>
    </div>
  </div>
</div>
    </div>


        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
    <div class="flip-card">
  <div class="flip-card-inner" id="flip-inner">
    <div class="flip-card-front">
       <img
                        src={process.env.PUBLIC_URL + '/assets/images/logo.png'}
                        alt=""
                        className="portfolio-img rounded-circle"
                      />
    </div>
    <div class="flip-card-back">
        <h1>Vue.js</h1> 
      <p className="text-white">Software House <span className="portfolio-colorfull">Website</span></p> 
      <p className="text-white">Front-End <span className="portfolio-colorfull">Development</span></p>
      <p className="text-white">Frame_Work: <span className="portfolio-colorfull">Vuejs_Laravel</span></p>
      <a  href="https://aamtr.com"><MDBBtn gradient="aqua">
        visit
      </MDBBtn></a>
    </div>
  </div>
</div>
    </div>


        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 text-center">
    <div class="flip-card">
  <div class="flip-card-inner" id="flip-inner">
    <div class="flip-card-front">
       <img
                        src={process.env.PUBLIC_URL + '/assets/images/battle.png'}
                        alt=""
                        className="portfolio-img rounded-circle"
                      />
    </div>
    <div class="flip-card-back">
        <h1>React.js</h1> 
      <p className="text-white">Band <span className="portfolio-colorfull">Template</span></p> 
      <p className="text-white">Front-End <span className="portfolio-colorfull">Development</span></p>
      <a  href="https://www.behance.net/gallery/96066345/Reactjs-Fully-Responsive-Front-End-Development"><MDBBtn gradient="aqua">
        visit
      </MDBBtn></a>
    </div>
  </div>
</div>
    </div>



            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
    <div class="flip-card">
  <div class="flip-card-inner" id="flip-inner">
    <div class="flip-card-front">
       <img
                        src={process.env.PUBLIC_URL + '/assets/images/imperial-logo-4-png.png'}
                        alt=""
                        className="portfolio-img rounded-circle"
                      />
    </div>
    <div class="flip-card-back">
      <h1>HTML5/CSS3</h1> 
      <p className="text-white">Falleti's Hotel <span className="portfolio-colorfull">Website</span></p> 
      <p className="text-white">Front-End <span className="portfolio-colorfull">Development</span></p>
      <p className="text-white">Frame_Work: <span className="portfolio-colorfull">php_Laravel</span></p>
      <a  href="https://aamtr.com"><MDBBtn gradient="aqua">
        visit
      </MDBBtn></a>
    </div>
  </div>
</div>
    </div>


            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
    <div class="flip-card">
  <div class="flip-card-inner" id="flip-inner">
    <div class="flip-card-front">
       <img
                        src={process.env.PUBLIC_URL + '/assets/images/happi.jpg'}
                        alt=""
                        className="portfolio-img rounded-circle"
                      />
    </div>
    <div class="flip-card-back">
      <h1>Woocomerce Store</h1> 
      <p className="text-white">Shoping <span className="portfolio-colorfull">Website</span></p> 
      <p className="text-white">Store <span className="portfolio-colorfull">Development</span></p>
      <p className="text-white">Frame_Work: <span className="portfolio-colorfull">Shopify</span></p>
      <a  href="https://www.behance.net/gallery/97188327/Shopify-Store-Development"><MDBBtn gradient="aqua">
        visit
      </MDBBtn></a>
    </div>
  </div>
</div>
    </div>


            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
    <div class="flip-card">
  <div class="flip-card-inner" id="flip-inner">
    <div class="flip-card-front">
       <img
                        src={process.env.PUBLIC_URL + '/assets/images/logo (2).png'}
                        alt=""
                        className="portfolio-img rounded-circle"
                      />
    </div>
    <div class="flip-card-back">
      <h1>Vue.js</h1> 
      <p className="text-white">Dashboard <span className="portfolio-colorfull">SPA Development</span></p> 
      <p className="text-white">Front-End <span className="portfolio-colorfull">Development</span></p>
      <p className="text-white">Frame_Work: <span className="portfolio-colorfull">Vuejs_Laravel</span></p>
      <a  href="https://www.behance.net/gallery/95717027/Vuejs_laravel-HMS-Responsive-Dashboard-Development"><MDBBtn gradient="aqua">
        visit
      </MDBBtn></a>
    </div>
  </div>
</div>
    </div>


            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
    <div class="flip-card">
  <div class="flip-card-inner" id="flip-inner">
    <div class="flip-card-front">
       <img
                        src={process.env.PUBLIC_URL + '/assets/images/aerosoft-studio-logo-removebg-preview.png'}
                        alt=""
                        className="portfolio-img rounded-circle"
                      />
    </div>
    <div class="flip-card-back">
      <h1>Woocomerce Store</h1> 
      <p className="text-white">Shoping <span className="portfolio-colorfull">Website</span></p> 
      <p className="text-white">Store <span className="portfolio-colorfull">Development</span></p>
      <p className="text-white">Frame_Work: <span className="portfolio-colorfull">WordPress</span></p>
      <a  href="https://www.behance.net/gallery/95987893/WordPress-WooCommerce-Theme-Customization"><MDBBtn gradient="aqua">
        visit
      </MDBBtn></a>
    </div>
  </div>
</div>
    </div>
    

  
    </div>
    </div>
    </div>
  );
}

export default Portfolio;