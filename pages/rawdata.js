import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

export default function RawData() {
  return (
    <>
      <Head>
        <title>Afrobarometer</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Raw Data</title>
      </Head>
      <Header />

      <div className="rawData_header">
        <div className="row mx-0">
          <div className="col-md-6">
            <div className="rawData-content">
              <div className="rawData-heading">Raw Data</div>
              <div className="rawData-paragraph">
                Afrobarometer is a data-collection company dedicated to Africa.{" "}
                <br />
                The company enables the collection and the delivery of
                on-demand, <br />
                real-time, cost-effective, and reliable Africa consumer data and
                insights.
              </div>
              <div className="rawData-button-div">
                <button className="rawData-button">Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 image-raw">
            <img
              src="./images/rawdata-header.png"
              alt="raw data"
              className="rawdata-img"
            />
          </div>
        </div>
      </div>

      <div className="rawData-second-portion">Raw Data</div>

      <div className="rawData-third-portion">
        <div className="row mx-0">
          <div className="col-md-5 left-rawdata-div">
            <div className="row mx-0">
              <div className="search-input">
                <img
                  src="./images/search icon.png"
                  alt=""
                  className="search-icon"
                />
                <input
                  placeholder="Search by name"
                  className="input-field-searchbyname"
                />
              </div>
              <div className="show-all-div">
                <span className="checkbox-icon">
                  <img src="./images/Path.png" alt="" />
                </span>
                <span className="show">Show All</span>
              </div>
            </div>
            <div className="row mx-0">
              <span className="text-button">Popular</span>
            </div>
            <div>
              <button className="non-selected-btn rawdata-buttons">
                Democracy
              </button>
              <button className="selected-btn rawdata-buttons">Democracy</button>
              <button className="selected-btn rawdata-buttons">
                External Affairs & Security
              </button>
              <button className="non-selected-btn rawdata-buttons">
                Democracy
              </button>
              <button className="non-selected-btn rawdata-buttons">
                Democracy
              </button>
            </div>
            <div className="row mx-0">
              <span className="text-button">Category Name</span>
            </div>
            <div>
              <button className="non-selected-btn rawdata-buttons">
                Democracy
              </button>
              <button className="non-selected-btn rawdata-buttons">
                Democracy
              </button>
            </div>
          </div>
          <div className="col-md-7">
            <div className="row mx-0">
              <div className="col-md-6">
                <div className="insight">
                  <div className="insight-image">
                    <img
                      src="./images/Rectangle 270.png"
                      alt="insight number 01"
                    />
                  </div>
                  <div className="container">
                    <p className="insight-heading">Insight 1</p>
                    <p className="insight-research-date">
                      Date of research: 1/23/2021
                    </p>
                    <p className="insight-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <br />
                    <div className="insight-footer">
                      <p className="insight-share">SHARE insight:</p>
                      <div className="insight-icons">
                        <img src="./images/Facebook.png" alt="facebook" />
                        <img
                          src="./images/Instagram.png"
                          alt="Instagram"
                          className="insta-icon"
                        />
                        <img src="./images/Twitter.png" alt="twitter" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="insight">
                  <div className="insight-image">
                    <img
                      src="./images/Rectangle 270.png"
                      alt="insight number 01"
                    />
                  </div>
                  <div className="container">
                    <p className="insight-heading">Insight 1</p>
                    <p className="insight-research-date">
                      Date of research: 1/23/2021
                    </p>
                    <p className="insight-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <br />
                    <div className="insight-footer">
                      <p className="insight-share">SHARE insight:</p>
                      <div className="insight-icons">
                        <img src="./images/Facebook.png" alt="facebook" />
                        <img
                          src="./images/Instagram.png"
                          alt="Instagram"
                          className="insta-icon"
                        />
                        <img src="./images/Twitter.png" alt="twitter" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mx-0 insight-cards-second-row">
              <div className="col-md-6">
                <div className="insight">
                  <div className="insight-image">
                    <img
                      src="./images/Rectangle 270.png"
                      alt="insight number 01"
                    />
                  </div>
                  <div className="container">
                    <p className="insight-heading">Insight 1</p>
                    <p className="insight-research-date">
                      Date of research: 1/23/2021
                    </p>
                    <p className="insight-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <br />
                    <div className="insight-footer">
                      <p className="insight-share">SHARE insight:</p>
                      <div className="insight-icons">
                        <img src="./images/Facebook.png" alt="facebook" />
                        <img
                          src="./images/Instagram.png"
                          alt="Instagram"
                          className="insta-icon"
                        />
                        <img src="./images/Twitter.png" alt="twitter" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="insight">
                  <div className="insight-image">
                    <img
                      src="./images/Rectangle 270.png"
                      alt="insight number 01"
                    />
                  </div>
                  <div className="container">
                    <p className="insight-heading">Insight 1</p>
                    <p className="insight-research-date">
                      Date of research: 1/23/2021
                    </p>
                    <p className="insight-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <br />
                    <div className="insight-footer">
                      <p className="insight-share">SHARE insight:</p>
                      <div className="insight-icons">
                        <img src="./images/Facebook.png" alt="facebook" />
                        <img
                          src="./images/Instagram.png"
                          alt="Instagram"
                          className="insta-icon"
                        />
                        <img src="./images/Twitter.png" alt="twitter" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{height:"130px"}}></div>
      <Footer />
    </>
  );
}
