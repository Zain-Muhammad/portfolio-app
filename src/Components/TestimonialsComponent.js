


import React  from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBIcon,MDBAnimation } from "mdbreact";
import './style.css';
const Testimonials = () => {
  return (
    <MDBContainer className="testimonials-slide">
      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5 mainslide-test-head">
        <MDBAnimation type="pulse" delay=".5s" infinite className="">
          Testim<span className="skill-half">onials</span>
          </MDBAnimation>
          <img
                      src={process.env.PUBLIC_URL + '/assets/images/head-underlined-01.png'}
                      alt=""
                      className="img-fluid head-underlined center pt-4"
                    />
        </h2>
        <MDBCarousel
          activeItem={1}
          length={3}
          slide={true}
          showControls={false}
          multiItem
          testimonial
        >
          <MDBCarouselInner>
            <MDBRow>

              <MDBCarouselItem itemId="1">
               <MDBRow>
                <MDBCol md="4">
                  <div>
                    <div className="mx-auto">
                      <img
                        src={process.env.PUBLIC_URL + '/assets/images/pp.png'}
                        alt=""
                        className="rounded-circle img-fluid slide-image"
                      />
                    </div>
                    <h4 className="font-weight-bold mt-4">Bobby Haley</h4>
                    <h6 className="blue-text font-weight-bold my-3">
                      Expert Dyer
                    </h6>
                    <p className="font-weight-normal text-white">
                      <MDBIcon icon="quote-left" className="pr-2 text-white"  />
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Quod eos id officiis hic tenetur quae.
                    </p>
                    <div className="yellow-text" >
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                    </div>
                  </div>
                </MDBCol>
                <MDBCol md="4" className="clearfix d-none d-md-block">
                  <div>
                    <div className="mx-auto">
                      <img
                        src={process.env.PUBLIC_URL + '/assets/images/pp.png'}
                        alt=""
                        className="rounded-circle img-fluid slide-image"
                      />
                    </div>
                    <h4 className="font-weight-bold mt-4">Elisa Janson</h4>
                    <h6 className="blue-text font-weight-bold my-3">
                      Expert Beared Trimmer
                    </h6>
                    <p className="font-weight-normal text-white">
                      <MDBIcon icon="quote-left" className="pr-2" />
                      At vero eos et accusamus et iusto odio dignissimos
                      ducimus qui blanditiis praesentium.
                    </p>
                    <div className="yellow-text">
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon far icon="star-half" />
                    </div>
                  </div>
                </MDBCol>
                <MDBCol md="4" className="clearfix d-none d-md-block">
                  <div>
                    <div className="mx-auto">
                      <img
                        src={process.env.PUBLIC_URL + '/assets/images/pp.png'}
                        alt=""
                        className="rounded-circle img-fluid slide-image"
                      />
                    </div>
                    <h4 className="font-weight-bold mt-4">Rob Jacobs</h4>
                    <h6 className="blue-text font-weight-bold my-3">
                      Expert Mustaches Trimmer
                    </h6>
                    <p className="font-weight-normal text-white">
                      <MDBIcon icon="quote-left" className="pr-2" />
                      Ut enim ad minima veniam, quis nostrum exercitationem
                      ullam corporis laboriosam.
                    </p>
                    <div className="blue-text">
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon far icon="star" />
                    </div>
                  </div>

                </MDBCol>
               </MDBRow>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
              <MDBRow>
                <MDBCol md="4">
                  <div>
                    <div className="mx-auto">
                      <img
                        src={process.env.PUBLIC_URL + '/assets/images/pp.png'}
                        alt=""
                        className="rounded-circle img-fluid slide-image"
                      />
                    </div>
                    <h4 className="font-weight-bold mt-4">Blake Dabney</h4>
                    <h6 className="blue-text font-weight-bold my-3">
                      Expert Mustaches Trimmer
                    </h6>
                    <p className="font-weight-normal text-white">
                      <MDBIcon icon="quote-left" className="pr-2" />
                      Ut enim ad minima veniam, quis nostrum exercitationem
                      ullam corporis laboriosam.
                    </p>
                    <div className="yellow-text">
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon far icon="star-half" />
                    </div>
                  </div>
                </MDBCol>
                <MDBCol md="4" className="clearfix d-none d-md-block">
                  <div>
                    <div className="mx-auto">
                      <img
                        src={process.env.PUBLIC_URL + '/assets/images/4.png'}
                        alt=""
                        className="rounded-circle img-fluid slide-image"
                      />
                    </div>
                    <h4 className="font-weight-bold mt-4">Andrea Clay</h4>
                    <h6 className="blue-text font-weight-bold my-3">
                     Expert Mustaches Trimmer
                    </h6>
                    <p className="font-weight-normal text-white">
                      <MDBIcon icon="quote-left" className="pr-2" />
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Quod eos id officiis hic tenetur quae.
                    </p>
                    <div className="yellow-text">
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                    </div>
                  </div>
                </MDBCol>
                <MDBCol md="4" className="clearfix d-none d-md-block">
                  <div>
                    <div className="mx-auto">
                      <img
                        src={process.env.PUBLIC_URL + '/assets/images/pp.png'}
                        alt=""
                        className="rounded-circle img-fluid slide-image"
                      />
                    </div>
                    <h4 className="font-weight-bold mt-4">Cami Gosse</h4>
                    <h6 className="blue-text font-weight-bold my-3">
                      Expert Mustaches Trimmer
                    </h6>
                    <p className="font-weight-normal text-white">
                      <MDBIcon icon="quote-left" className="pr-2" />
                      At vero eos et accusamus et iusto odio dignissimos
                      ducimus qui blanditiis praesentium.
                    </p>
                    <div className="yellow-text">
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon far icon="star" />
                    </div>
                  </div>
                </MDBCol>
                </MDBRow>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="3">
              <MDBRow>
                <MDBCol md="4">
                  <div>
                    <div className="mx-auto">
                      <img
                        src={process.env.PUBLIC_URL + '/assets/images/2.png'}
                        alt=""
                        className="rounded-circle img-fluid slide-image"
                      />
                    </div>
                    <h4 className="font-weight-bold mt-4">Bobby Haley</h4>
                    <h6 className="blue-text font-weight-bold my-3">
                      Expert Mustaches Trimmer
                    </h6>
                    <p className="font-weight-normal text-white">
                      <MDBIcon icon="quote-left" className="pr-2" />
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Quod eos id officiis hic tenetur quae.
                    </p>
                    <div className="yellow-text">
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                    </div>
                  </div>
                </MDBCol>
                <MDBCol md="4" className="clearfix d-none d-md-block">
                  <div>
                    <div className="mx-auto">
                      <img
                        src={process.env.PUBLIC_URL + '/assets/images/pp.png'}
                        alt=""
                        className="rounded-circle img-fluid slide-image"
                      />
                    </div>
                    <h4 className="font-weight-bold mt-4">Elisa Janson</h4>
                    <h6 className="blue-text font-weight-bold my-3">
                      Expert Mustaches Trimmer
                    </h6>
                    <p className="font-weight-normal text-white">
                      <MDBIcon icon="quote-left" className="pr-2" />
                      At vero eos et accusamus et iusto odio dignissimos
                      ducimus qui blanditiis praesentium.
                    </p>
                    <div className="blue-text">
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon far icon="star-half" />
                    </div>
                  </div>
                </MDBCol>
                <MDBCol md="4" className="clearfix d-none d-md-block">
                  <div>
                    <div className="mx-auto">
                      <img
                        src={process.env.PUBLIC_URL + '/assets/images/3.png'}
                        alt=""
                        className="rounded-circle img-fluid slide-image"
                      />
                    </div>
                    <h4 className="font-weight-bold mt-4">Rob Jacobs</h4>
                    <h6 className="blue-text font-weight-bold my-3">
                      Expert Mustaches Trimmer
                    </h6>
                    <p className="font-weight-normal text-white">
                      <MDBIcon icon="quote-left" className="pr-2" />
                      Ut enim ad minima veniam, quis nostrum exercitationem
                      ullam corporis laboriosam.
                    </p>
                    <div className="primary-text">
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon icon="star" />
                      <MDBIcon far icon="star" />
                    </div>
                  </div>

                </MDBCol>
               </MDBRow>
              </MDBCarouselItem>
            </MDBRow>
          </MDBCarouselInner>
        </MDBCarousel>
      </section>
    </MDBContainer>
  );
}

export default Testimonials;