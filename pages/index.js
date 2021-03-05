import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Afrobarometer</title>
      </Head>
      <Header />

      <div className="home--header ">
        <div className="container">
          <div className="row mx-0">
            <div className="col-md-7 col-12">
              <div className="home--content">
                <div className="home--heading">Afrobarometer</div>
                <div className="home--author">
                  Afrobarometer is a data-collection company dedicated to
                  Africa. The company enables the collection and the delivery of
                  on-demand, real-time, cost-effective, and reliable Africa
                  consumer data and insights.
                </div>
                <div className="home---button-div">
                  <button className="home---button">Download</button>
                </div>
              </div>
            </div>
            <div className="col-md-5 home-photo col-12">
              <img
                src="./images/picture02.png"
                alt="photo"
                className="home-image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="background-vector">
        <div className="home-second-header ">
          <div className="main-div ">
            <div className="row mx-0">
              <div className="col-md-5 col-12">
                <div className="home-second-content">
                  <img
                    src="./images/contactUs.png"
                    alt="photo"
                    className="second-home-photo"
                  />
                </div>
              </div>
              <div className="col-md-7 col-12 second-div-home-right">
                <div className="home--heading">About Afrobarometer</div>
                <div className="home-second-author">
                  When we launched in 2017, our mission was very clear: to
                  bridge that gap of quality, real time and cost-effective
                  availability of first-party data to businesses and researchers
                  interested in gaining insights about the Africa consumers and
                  business landscape. Today, AfriSight is the leading,
                  Africa-focused sample panel providers with a growing panelist
                  community across the African continent.
                  <br />
                  <br />
                  We are employing technology and a unique market experience to
                  provide solutions that aptly meet the needs of clients
                  including research agencies, advertising agencies, corporates
                  and SMEs, NGOs, government agencies and parastatals,
                  educational institutions and even other sample panel providers
                  with little or no footprint in Africa.
                  <br />
                  <br />
                  AfriSight changing the game in Africa!
                </div>
              </div>
            </div>
          </div>

          <div className="home-third-header ">
            <div className="main-div">
              <div className="row mx-0">
                <div className="col-md-6 col-12">
                  <div className="home-third-content">
                    <div className="home--heading">Challenge</div>
                    <div className="home-third-author">
                      We are employing technology and a unique market experience
                      to provide solutions that aptly meet the needs of clients
                      including research agencies, advertising agencies,
                      corporates and SMEs, NGOs, government agencies and
                      parastatals, educational institutions and even other
                      sample panel providers with little or no footprint in
                      Africa.
                      <br />
                      <br />
                      AfriSight changing the game in Africa!
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12 home-third-image ">
                  <img
                    src="./images/aboutus_laptop.png"
                    alt="photo"
                    className="laptop-image"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="home-fourth-header ">
            <div className="main-div">
              <div className="row mx-0">
                <div className="col-md-6 col-12">
                  <div className="home-fourth-image">
                    <img
                      src="./images/picture01.png"
                      alt="photo"
                      className="solution-image"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="home-third-content">
                    <div className="home--heading">Solution</div>
                    <div className="home-third-author">
                      We are employing technology and a unique market experience
                      to provide solutions that aptly meet the needs of clients
                      including research agencies, advertising agencies,
                      corporates and SMEs, NGOs, government agencies and
                      parastatals, educational institutions and even other
                      sample panel providers with little or no footprint in
                      Africa.
                      <br />
                      <br />
                      AfriSight changing the game in Africa!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-fifth-row">
        <div className="main-div">
          <div className="row">
            <div className="col-md-3 col-12 blue-box">
              <div className="blue-div">
                <div className="blue-div-content">
                  <div className="blue-div-heading">91%</div>
                  <div className="blue-div-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Faucibus quam feugiat eget.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-12 blue-box">
              <div className="blue-div">
                <div className="blue-div-content">
                  <div className="blue-mid-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Faucibus quam feugiat eget.Faucibus quam feugiat eget.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-12 blue-box">
              <div className="blue-div">
                <div className="blue-div-content">
                  <div className="blue-mid-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Faucibus quam feugiat eget.Faucibus quam feugiat eget.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-12 blue-box">
              <div className="blue-div">
                <div className="blue-div-content">
                  <div className="blue-div-heading Important-heading">
                    Important
                  </div>
                  <div className="blue-div-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Faucibus quam feugiat eget.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="charts-div">
        <div>
          <div className="row mx-0 charts ">
            <p>Raw Data</p>
          </div>
          <div className="charts-row">
            <img src="./images/homechart4.png" alt="raw data graph" />
            <img src="./images/homechart1.png" alt="raw data graph" />
            <img src="./images/homechart2.png" alt="raw data graph" />
          </div>
          <div className="charts-row">
            <img src="./images/homechart3.png" alt="raw data graph" />
            <img src="./images/homechart4.png" alt="raw data graph" />
            <img src="./images/homechart5.png" alt="raw data graph" />
          </div>
        </div>
      </div>

      <div className="main-div">
        <div>
          <div className="row mx-0 charts ">
            <p>Graphs and statistics</p>
          </div>
          <div className="charts-graph">
            <img src="./images/homechart7.png" alt="raw data graph" />
          </div>
        </div>
      </div>

      <div className="research-second-header ">
        <div className="row mx-0">
          <div className="col-md-7 col-12">
            <div className="research-second-content">
              <div className="research-second-heading">
                Some title of research
              </div>
              <div className="Research-second-author">
                Research by: Author Name
              </div>
              <div className="research--second-button-div">
                <button className="research--second-button">
                  GET RESEARCH
                </button>
              </div>
              <div className="Research-second-author  padding-top">
                SHARE RESEARCH
              </div>
              <div className="blue-icons-style">
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
          <div className="col-md-5 col-12 photo">
            <img
              src="./images/picture01.png"
              alt="photo"
              className="second-image"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
