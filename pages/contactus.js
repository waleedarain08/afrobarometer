import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

export default function ContactUs() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact Us</title>
      </Head>
      <Header />
      <div className="contactUs_header">
        <div className="contactUs-content">Contact Us</div>
        <div className="curved-line">
          <img src="./images/curveunderline.png" alt="" />
        </div>
      </div>

      <div className="contact-vector">
        <div className="contactUs-second-row ">
          <div className="row mx-0">
            <div className="col-md-6 contactUs-photo">
              <img src="./images/photo.png" alt="photo" className="laptop-image" />
            </div>
            <div className="col-md-6 photo">
              <div className="container">
                <div className="contactUs-subheading">Contact us:</div>
                <br />
                <br />
                <div className="d-flex">
                  <img src="./images/mapicon.png" className="map-icon" />
                  <div className="contactUs-subheading-content">
                    AfriSight B.V. Marconistraat 16 3029 AK, Rotterdam The
                    Netherlands
                    <br />
                    <br />
                    <span className="bold-text">CoC:</span> 71698515 <br />
                    <span className="bold-text">VAT:</span> NL858814791B01
                    <br />
                    <br />
                    Use our contact form to contact AfriSight with general
                    questions, press inquiries, or to get a quote for your
                    upcoming project. If you have questions about specific
                    services or availability, please be as descriptive as
                    possible.
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contactUs-third">
          <div className="container">
            <div className="container">
              <div className="card text-left">
                <div className="card-body contactUs-third-row">
                  <form className="container">
                    <div className="row mx-0">
                      <div className="col-md-6 mx-0 no-padding">
                        <div className="form-group">
                          <label className="contact-label"> Name</label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 no-padding">
                        <div className="form-group">
                          <label className="contact-label">Company</label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mx-0">
                      <div className="form-group  col-md-12 no-padding ">
                        <label className="contact-label">Email *</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                        />
                      </div>
                    </div>
                    <div className="row mx-0">
                      <div className="form-group col-md-12 no-padding">
                        <label className="contact-label">Message *</label>
                        <br />
                        <textarea
                          type="text"
                          className="textarea"
                          rows="4"
                        ></textarea>
                      </div>
                    </div>
                    <div className="home---button-div">
                      <button className="home---button">SUBMIT</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

      <Footer />
      </div>

    </>
  );
}
