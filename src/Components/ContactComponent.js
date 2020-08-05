
import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput,MDBAnimation } from "mdbreact";
import './style.css';
const Contact = () => {
  return (
    <div className="contact-form">
    <div className="container ">
    <section className="my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
      <MDBAnimation type="pulse" delay=".5s" infinite className="">
        Contact <span className="skill-half">me</span>

        </MDBAnimation>
        <img
                      src={process.env.PUBLIC_URL + '/assets/images/head-underlined-01.png'}
                      alt=""
                      className="img-fluid head-underlined center pt-4"
                    />
      </h2>
      <p className="text-center w-responsive mx-auto pb-5 text-white contact-to-heading">
        Want to Connect with me ?<br/>Don't Worry I am Available for service.
      </p>
      <MDBRow>
      
        <MDBCol lg="5" className="lg-0 mb-4">
        <MDBAnimation type="fadeInLeft" delay=".5s" className="slow">
          <MDBCard>
            <MDBCardBody>
              <div className="form-header text-center accent-1 pt-5 pb-5 text-dark">
                <h3 className="mt-2">
                  <MDBIcon icon="envelope" /> LET’S CONNECT :
                </h3>
              </div>
              <p className="dark-grey-text">
                Compose Message to Connect with me.
              </p>
              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="Your name"
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="Your email"
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="tag"
                  label="Subject"
                  iconClass="grey-text"
                  type="text"
                  id="form-subject"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="pencil-alt"
                  label="Icon Prefix"
                  iconClass="grey-text"
                  type="textarea"
                  id="form-text"
                />
              </div>
              <div className="text-center">
                <MDBBtn color="light-blue">Submit</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
          </MDBAnimation>
        </MDBCol>

        <MDBCol lg="7">
        <MDBAnimation type="fadeInRight" delay=".5s" className="slow">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://maps.google.com/maps?q=Lahore%20cantt&t=&z=13&ie=UTF8&iwloc=&output=embed"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
          <MDBRow className="text-center text-white ">
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="map-marker-alt" />
              </MDBBtn>
              <p className="text-white contact-to-heading">Cantt</p>
              <p className="mb-md-0" className="text-white contact-to-heading"> Baghbanpura Lahore Cantt</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="phone" />
              </MDBBtn>
              <p className="text-white contact-to-heading">+92 322 5034501</p>
              <p className="mb-md-0" className="text-white contact-to-heading">Whatsapp:+92 322 5034501</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="envelope" />
              </MDBBtn>
              <p className="text-white contact-to-heading"> zainsher5@gmail.com</p>
              <p className="mb-md-0" className="text-white contact-to-heading"> zainsher88@gmail.com</p>
            </MDBCol>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="social-icons text-center mt-5">
   
 

      <a href="https://www.linkedin.com/in/zain-sher/"> <i className="fab fa-linkedin social-icon"></i></a>
     <a href="https://www.behance.net/zainsher"><i className="fab fa-behance social-icon"></i></a>
     <a><i className="fab fa-facebook social-icon"></i></a>
     
    <a> <i className="fab fa-pinterest-p social-icon"></i></a>
     <a><i className="fab fa-twitter social-icon"></i></a>
    
    </div>
    </div>
          </MDBRow>
          </MDBAnimation>
        </MDBCol>
      </MDBRow>
    </section>

    </div>




    </div>
  );
}

export default Contact;



