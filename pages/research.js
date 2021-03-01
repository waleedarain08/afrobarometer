import Head from "next/head";
import Header from '../components/header';
export default function Research() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Research Collective</title>
        <link rel="stylesheet" href="Research.css" />
        <link rel="stylesheet" href="footer.css" />
      </Head>
      <Header/>
      <div className="research_header">
        <div className="research-content">
          <div className="research-heading">Research Collective</div>
          <div className="research-paragraph">
            Afrobarometer is a data-collection company dedicated to Africa.{" "}
            <br />
            The company enables the collection and the delivery of on-demand,{" "}
            <br />
            real-time, cost-effective, and reliable Africa consumer data and
            insights.
          </div>
          <div className="research-button-div">
            <button className="research-button">Learn More</button>
          </div>
        </div>
      </div>

      <div className="research-second-header ">
        <div className="row mx-0">
          <div className="col-md-7">
            <div className="research-second-content">
              <div className="research-second-heading">
                What Europeans Want <br />
                from the European Union
              </div>
              <div className="Research-second-author">Research by: Author Name</div>
              <div className="research--second-button-div">
                <button className="research--second-button">Download</button>
              </div>
              <div className="Research-second-author">SHARE RESEARCH</div>
              <div className="blue-icons">
                <img src="./images/facebook-blue.png" alt="facebook-icon" />
                <img
                  src="./images/instagram-blue.png"
                  alt="instagram-icon"
                  className="instagram-icon"
                />
                <img src="./images/twitter-blue.png" alt="twitter-icon" />
              </div>
            </div>
          </div>
          <div className="col-md-5 photo">
            <img
              src="./images/blank_square.png"
              alt="photo"
              className="second-image"
            />
          </div>
        </div>
      </div>
      <div className="research-third-header">
        <div className="research-second-content">
          <div className="research-second-heading">
            What Europeans Want <br />
            from the European Union
          </div>
          <div className="Research-second-author">Research by: Author Name</div>
          <div className="research--second-button-div">
            <button className="research--second-button">Download</button>
          </div>
          <div className="Research-second-author">SHARE RESEARCH</div>
          <div className="blue-icons">
            <img src="./images/facebook-blue.png" alt="facebook-icon" />
            <img
              src="./images/instagram-blue.png"
              alt="instagram-icon"
              className="instagram-icon"
            />
            <img src="./images/twitter-blue.png" alt="twitter-icon" />
          </div>
        </div>
      </div>
      <div className="research-fourth-header">
        <div className="research-second-content">
          <div className="research-second-heading">
            What Europeans Want <br />
            from the European Union
          </div>
          <div className="Research-second-author">Research by: Author Name</div>
          <div className="research--second-button-div">
            <button className="research--second-button">Download</button>
          </div>
          <div className="Research-second-author">SHARE RESEARCH</div>
          <div className="blue-icons">
            <img src="./images/facebook-blue.png" alt="facebook-icon" />
            <img
              src="./images/instagram-blue.png"
              alt="instagram-icon"
              className="instagram-icon"
            />
            <img src="./images/twitter-blue.png" alt="twitter-icon" />
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
