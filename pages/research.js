import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import { BaseUrl, ImageUrl } from "../public/constant";

export default function Research({ data }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Research Collective</title>
      </Head>
      <Header />
      <div className="research_header">
        <div className="container">
          <div className="research-content">
            <div className="container">
              <div className="research-heading">Research Collective</div>
              <div className="research-paragraph">
                Afrobarometer is a data-collection company dedicated to Africa.{" "}
                <br />
                The company enables the collection and the delivery of
                on-demand, <br />
                real-time, cost-effective, and reliable Africa consumer data and
                insights.
              </div>
              <div className="research-button-div">
                <button className="research-research-button">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {data.map((item, index) => {
        if (index % 2 === 0) {
          return (
            <div key={index} className="research-research-second-header ">
              <div className="container">
                <div className="row mx-0">
                  <div className="col-md-7">
                    <div className="">
                      <div className="research-rawdata-heading">
                        {item.title}
                      </div>
                      <div className="Research-second-author">
                        Research by : {item.author}
                      </div>
                      <div className="research--second-button-div">
                        <Link href="/researchTopic">
                          <button className="research--second-button">
                            GET RESEARCH
                          </button>
                        </Link>
                      </div>
                      <div className="web-disabled">
                        <br />
                        <a
                          href="https://facebook.com/sharer.php?display=page&u=https://afrobarometer.vercel.app/"
                          target="_blank"
                        >
                          <img
                            src="./images/facebook-blue.png"
                            alt="facebook-icon"
                          />
                        </a>
                        <img
                          src="./images/instagram-blue.png"
                          alt="instagram-icon"
                          className="insta-research"
                        />
                        <img
                          src="./images/twitter-blue.png"
                          alt="twitter-icon"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 research-icons">
                    <div className="photo-01">
                      <div className="gradient-content">February 2021</div>
                    </div>
                    <div className="blue-icons">
                      <a
                        href="https://facebook.com/sharer.php?display=page&u=https://afrobarometer.vercel.app/"
                        target="_blank"
                      >
                        <img
                          src="./images/facebook-blue.png"
                          alt="facebook-icon"
                        />
                      </a>{" "}
                      <br />
                      <br />
                      <a href="https://www.instagram.com">
                        <img
                          src="./images/instagram-blue.png"
                          alt="instagram-icon"
                        />
                      </a>{" "}
                      <br />
                      <br />
                      <a
                        href="https://twitter.com/intent/tweet"
                        target="_blank"
                        data-size="large"
                        data-text="Afrisight"
                        data-url="https://afrobarometer.vercel.app/"
                        data-hashtags="example,demo"
                        data-via="twitterdev"
                      >
                        <img
                          src="./images/twitter-blue.png"
                          alt="twitter-icon"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div key={index} className="research-third-header">
              <div className="container">
                <div className="row mx-0">
                  <div className="col-md-5 research-icons">
                  <div className="blue-icons-right">
                      <a
                        href="https://facebook.com/sharer.php?display=page&u=https://afrobarometer.vercel.app/"
                        target="_blank"
                      >
                        <img
                          src="./images/facebook-blue.png"
                          alt="facebook-icon"
                        />
                      </a>{" "}
                      <br />
                      <br />
                      <a href="https://www.instagram.com">
                        <img
                          src="./images/instagram-blue.png"
                          alt="instagram-icon"
                        />
                      </a>{" "}
                      <br />
                      <br />
                      <a
                        href="https://twitter.com/intent/tweet"
                        target="_blank"
                        data-size="large"
                        data-text="Afrisight"
                        data-url="https://afrobarometer.vercel.app/"
                        data-hashtags="example,demo"
                        data-via="twitterdev"
                      >
                        <img
                          src="./images/twitter-blue.png"
                          alt="twitter-icon"
                        />
                      </a>
                    </div>
                    <div className="photo-02">
                      <div className="gradient-content">February 2021</div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="right-box-padding">
                      <div className="research-rawdata-heading">
                        {item.title}
                      </div>
                      <div className="Research-second-author">
                        Research by: {item.author}
                      </div>
                      <div className="research--second-button-div">
                        <Link href="/researchTopic">
                          <button className="research--second-button">
                            GET RESEARCH
                          </button>
                        </Link>
                      </div>
                      <div className="web-disabled">
                        <br />
                        <a
                          href="https://facebook.com/sharer.php?display=page&u=https://afrobarometer.vercel.app/"
                          target="_blank"
                        >
                          <img
                            src="./images/facebook-blue.png"
                            alt="facebook-icon"
                          />
                        </a>
                        <img
                          src="./images/instagram-blue.png"
                          alt="instagram-icon"
                          className="insta-research"
                        />
                        <img
                          src="./images/twitter-blue.png"
                          alt="twitter-icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
      {/* <div className="research-fourth-header">
        <div className="container">
          <div className="row mx-0">
            <div className="col-md-7">
              <div className="research-second-content">
                <div className="research-rawdata-heading">
                  What Europeans Want from the European Union
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
                <div className="web-disabled">
                  <br />
                  <img src="./images/facebook-blue.png" alt="facebook-icon" />
                  <img
                    src="./images/instagram-blue.png"
                    alt="instagram-icon"
                    className="insta-research"
                  />
                  <img src="./images/twitter-blue.png" alt="twitter-icon" />
                </div>
              </div>
            </div>
            <div className="col-md-5 research-icons">
              <div className="photo-03">
                <div className="gradient-content">February 2021</div>
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
      </div> */}

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${BaseUrl}/research`)
    .then((response) => response.json())
    .then((jsondata) => jsondata);
  const data = await res.research;
  return {
    props: {
      data,
    },
  };
}
