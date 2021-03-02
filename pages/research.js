import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Research() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Research Collective</title>
      </Head>
      <Header />
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
                What Europeans Want from <br /> the European Union
              </div>
              <div className="Research-second-author">
                Research by: Author Name
              </div>
              <div className="research--second-button-div">
                <Link href="/researchTopic">
                  <button className="research--second-button">
                    GET RESEARCH
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-5 research-icons">
            <div className="photo-01">
              <div className="gradient-content">February 2021</div>
              <img
                src="./images/picture02.png"
                alt="photo"
                className="second-image"
              />
            </div>
            <div className="blue-icons">
              <img src="./images/facebook-blue.png" alt="facebook-icon" />{" "}
              <br />
              <br />
              <img
                src="./images/instagram-blue.png"
                alt="instagram-icon"
              />{" "}
              <br />
              <br />
              <img src="./images/twitter-blue.png" alt="twitter-icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="research-third-header">
        <div className="row mx-0">
          <div className="col-md-5 research-icons-third">
            <div className="blue-icons-right">
              <img src="./images/facebook-blue.png" alt="facebook-icon" />{" "}
              <br />
              <br />
              <img
                src="./images/instagram-blue.png"
                alt="instagram-icon"
              />{" "}
              <br />
              <br />
              <img src="./images/twitter-blue.png" alt="twitter-icon" />
            </div>
            <div className="photo-02">
              <div className="gradient-content gradient-content-02-03">
                February 2021
              </div>
              <img
                src="./images/picture04.png"
                alt="photo"
                className="second-image"
              />
            </div>
          </div>

          <div className="col-md-7">
            <div className="research-second-content">
              <div className="research-second-heading">
                What Europeans Want from <br /> the European Union
              </div>
              <div className="Research-second-author">
                Research by: Author Name
              </div>
              <div className="research--second-button-div">
                <Link href="/researchTopic">
                  <button className="research--second-button">
                    GET RESEARCH
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="research-fourth-header">
        <div className="row mx-0">
          <div className="col-md-7">
            <div className="research-second-content">
              <div className="research-second-heading">
                What Europeans Want from <br /> the European Union
              </div>
              <div className="Research-second-author">
                Research by: Author Name
              </div>
              <div className="research--second-button-div">
                <Link href="/researchTopic">
                  <button className="research--second-button">
                    GET RESEARCH
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-5 research-icons">
            <div className="photo-03">
              <div className="gradient-content gradient-content-02-03">
                February 2021
              </div>
              <img
                src="./images/picture03.png"
                alt="photo"
                className="second-image"
              />
            </div>
            <div className="blue-icons">
              <img src="./images/facebook-blue.png" alt="facebook-icon" />{" "}
              <br />
              <br />
              <img
                src="./images/instagram-blue.png"
                alt="instagram-icon"
              />{" "}
              <br />
              <br />
              <img src="./images/twitter-blue.png" alt="twitter-icon" />
            </div>
          </div>
        </div>
      </div>
      <div style={{height:"130px"}}></div>
      <Footer />
    </>
  );
}
