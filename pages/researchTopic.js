import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

export default function AboutUs() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Research Topic</title>
      </Head>
      <Header />
      <div className="researchTopic_header">
        <div className="container">
          <div className="researchTopic-content">Name of research</div>
          <div className="subtext">
            <p>Fedruary 2021</p>
          </div>
        </div>
      </div>

      <div className="row mx-0">
        <div className="col-md-4">
          <div className="container left-box align-text">
            <div className="authorname">Author Name</div>
            <div className="authorposition">Position</div>
            <div className="icons">
              <img src="./images/Facebook.png" alt="facebook" />
              <img
                src="./images/Twitter.png"
                alt="twitter"
                className="twittericon"
              />
              <img src="./images/Googlegra.png" alt="google +" />
            </div>
            <div className="research-button">
              <button className="transparent-button">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="container">
            <div className="researchTopic-second-row ">
              <div className="row mx-0">
                <img src="./images/research01.png" className="research-topic-img" />
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row mx-0 researchTopic-second-row">
              When we launched in 2017, our mission was very clear: to bridge
              that gap of quality, real time and cost-effective availability of
              first-party data to businesses and researchers interested in
              gaining insights about the Africa consumers and business
              landscape. Today, AfriSight is the leading, Africa-focused sample
              panel providers with a growing panelist community across the
              African continent.
              <br />
              <br />
              We are employing technology and a unique market experience to
              provide solutions that aptly meet the needs of clients including
              research agencies, advertising agencies, corporates and SMEs,
              NGOs, government agencies and parastatals, educational
              institutions and even other sample panel providers with little or
              no footprint in Africa.
            </div>
          </div>

          <br />
          <br />
          <div className="container">
            <div className="researchTopic-content-read">Read Full Research</div>
          </div>
          <div className="researchTopic-second-row">
            <div className="container">
              <div className="row mx-0">
                <div className="card-research-topic text-left ">
                  <div className="card-body">
                    <form>
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
                        <div className="form-group  col-md-6 no-padding ">
                          <label className="contact-label">Email *</label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                          />
                        </div>
                      </div>

                      <br />
                      <div className="row mx-0">
                        <div className="form-group col-md-12 no-padding">
                          <input
                            type="checkbox"
                            id="abc"
                            name="abc"
                            value="abc"
                          />
                          <label htmlFor="abc" style={{marginLeft:"5px"}}>
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
                          <label htmlFor="abc" style={{marginLeft:"5px"}}>
                            I would like to receive news, updates and thought
                            leadership once in a while
                          </label>
                          <br />
                        </div>
                      </div>
                      <br />

                      <div className="home---button-div">
                        <button className="home---button">SUBMIT</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="research-button">
            <button className="transparent-button">back to overview</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
