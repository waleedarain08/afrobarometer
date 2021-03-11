import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
export default function AboutUs() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About Us</title>
      </Head>
      <Header />
      <div className="aboutUs_header">
        <div className="aboutUs-content">About Us</div>
        <div className="curved-line">
          <img src="./images/curveunderline.png" alt="" />
        </div>
      </div>

      <div className="aboutUs-second-row ">
        <div className="row mx-0">
          <div className="col-md-7">
            <div className="container padding-left">
              <div className="aboutUs-subheading">About us:</div>
              <div className="aboutUs-subheading-content">
                When we launched in 2017, our mission was very clear: to bridge
                that gap of quality, real time and cost-effective availability
                of first-party data to businesses and researchers interested in
                gaining insights about the Africa consumers and business
                landscape. Today, AfriSight is the leading, Africa-focused
                sample panel providers with a growing panelist community across
                the African continent.
                <br />
                <br />
                We are employing technology and a unique market experience to
                provide solutions that aptly meet the needs of clients including
                research agencies, advertising agencies, corporates and SMEs,
                NGOs, government agencies and parastatals, educational
                institutions and even other sample panel providers with little
                or no footprint in Africa.
                <br />
                <br />
                AfriSight changing the game in Africa!
              </div>
            </div>
          </div>
          <div className="col-md-5 photo">
            <img
              src="./images/aboutus_laptop.png"
              alt="photo"
              className="about-laptop-image"
            />
          </div>
        </div>
      </div>

      <div className="aboutUs-third-row ">
        <div className="aboutUs-our_partners">Our Partners</div>
        <div className="partners-logo">
          <img
            src="./images/blank_square.png"
            alt="photo"
            className="partners-logo"
          />
          <img
            src="./images/blank_square.png"
            alt="photo"
            className="partners-logo"
          />
          <img
            src="./images/blank_square.png"
            alt="photo"
            className="partners-logo"
          />
          <img
            src="./images/blank_square.png"
            alt="photo"
            className="partners-logo"
          />
          <img
            src="./images/blank_square.png"
            alt="photo"
            className="partners-logo"
          />
        </div>
      </div>
      <div style={{ marginTop: "3%" }}></div>
      <Footer />
    </>
  );
}
