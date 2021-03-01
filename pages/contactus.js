import Head from "next/head";
import Header from '../components/header';
export default function ContactUs() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact Us</title>
        <link rel="stylesheet" href="ContactUs.css" />
        <link rel="stylesheet" href="footer.css" />
      </Head>
      <Header/>
      <div className="contactUs_header">
        <div className="contactUs-content">Contact Us</div>
      </div>
      <div className="contactUs-second-row ">
        <div className="row mx-0">
          <div className="col-md-6 contactUs-photo">
            <img
              src="./images/contactUs.png"
              alt="photo"
              className="laptop-image"
            />
          </div>
          <div className="col-md-6 photo">
            <div className="container">
              <div className="contactUs-subheading">Contact us:</div>
              <br />
              <br />
              <div className="contactUs-subheading-content">
                AfriSight B.V. Marconistraat 16 3029 AK, Rotterdam The
                Netherlands
                <br />
                <br />
                CoC: 71698515
                <br />
                <br />
                VAT: NL858814791B01
                <br />
                <br />
                Use our contact form to contact AfriSight with general
                questions, press inquiries, or to get a quote for your upcoming
                project. If you have questions about specific services or
                availability, please be as descriptive as possible.
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contactUs-third">
        <div className="container">
          <div className="row mx-0 contactUs-third-row ">
            <div className="col-md-4"></div>
            <div className="col-md-1">
              <img src="./images/line.png" alt="" />
            </div>
            <div className="col-md-7 ">
              <div className="card text-left ">
                <div className="card-body contactUs-third-row">
                  <form>
                    <div className="row mx-0">
                      <div className="form-group">
                        <label className="contact-label">Full Name *</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                        />
                      </div>
                    </div>
                    <div className="row mx-0">
                      <div className="col-md-6 mx-0 no-padding">
                        <div className="form-group">
                          <label className="contact-label">Email *</label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 no-padding">
                        <div className="form-group">
                          <label className="contact-label">Phone *</label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mx-0">
                      <div className="form-group col-md-12 no-padding">
                        <label className="contact-label">Message *</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                        />
                      </div>
                    </div>
                    <br />
                    <br />
                    <div className="row mx-0">
                      <div className="form-group col-md-12 no-padding">
                        <input
                          type="checkbox"
                          id="abc"
                          name="abc"
                          value="abc"
                        />
                        <label htmlFor="abc">
                          I have read and accepted the Privacy Policy*
                        </label>
                      </div>
                    </div>
                    <div className="row mx-0">
                      <div className="form-group col-md-12 no-padding">
                        <input
                          type="checkbox"
                          id="abc"
                          name="abc"
                          value="abc"
                        />
                        <label htmlFor="abc">
                          I would like to receive news, updates and thought
                          leadership once in a while
                        </label>
                        <br />
                      </div>
                    </div>
                    <br />
                    <br />

                    <input
                      type="submit"
                      value="Submit"
                      className="btn-block submit-btn"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-logo">
          <img src="./images/logo.png" alt="logo" className="footer-logo-img" />
        </div>
        <div className="footer-row">
          <div>
            <a href="./index.html" className="footer-labels">
              Home
            </a>
          </div>
          <div>
            <a href="./Research.html" className="footer-labels">
              Research
            </a>
          </div>
          <div>
            <a href="./AboutUs.html" className="footer-labels">
              About Us
            </a>
          </div>
          <div>
            <a href="./ContactUs.html" className="footer-labels">
              Contact Us
            </a>
          </div>
        </div>
        <div className="footer-privacy row mx-0">
          <div className="col-md-8 footer-color">
            Copyright © 2021 AfriSight B.V. All rights reserved
          </div>
          <div className="col-md-4 footer-color">Privacy policy</div>
        </div>
      </div>
    </>
  );
}
