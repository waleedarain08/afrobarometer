import Head from 'next/head';
import Header from '../components/header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Afrobarometer</title>
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="footer.css" />
      </Head>
      <Header />
      <main>
      <div className="home--header ">
        <div className="container">
            <div className="row mx-0">
                <div className="col-md-7">
                    <div className="home--content">
                        <div className='home--heading'>Afrobarometer</div>
                        <div className="home--author">
                            Afrobarometer is a data-collection company dedicated to Africa.
                            The company enables the collection and the delivery of on-demand, real-time, cost-effective,
                            and
                            reliable Africa
                            consumer data and insights.
                        </div>
                        <div className="home---button-div">
                            <button className="home---button">
                                Download
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 home-photo">
                    <img src='./images/picture02.png' alt='photo' className="home-image" />
                </div>
            </div>
        </div>
    </div>
    <div className="home-second-header ">
        <div className="container">
            <div className="row mx-0">
                <div className="col-md-6">
                    <div className="home-second-content">
                        <img src='./images/contactUs.png' alt='photo' />
                    </div>
                </div>
                <div className="col-md-6 ">
                    <div className='home--heading'>About Afrobarometer</div>
                    <div className="home--author">
                        When we launched in 2017, our mission was very clear: to bridge that gap of quality, real time
                        and
                        cost-effective
                        availability of first-party data to businesses and researchers interested in gaining insights
                        about
                        the Africa consumers
                        and business landscape. Today, AfriSight is the leading, Africa-focused sample panel providers
                        with
                        a growing panelist
                        community across the African continent.
                        <br /><br />
                        We are employing technology and a unique market experience to provide solutions that aptly meet
                        the
                        needs of clients
                        including research agencies, advertising agencies, corporates and SMEs, NGOs, government
                        agencies
                        and parastatals,
                        educational institutions and even other sample panel providers with little or no footprint in
                        Africa.
                        <br /><br />
                        AfriSight changing the game in Africa!
                    </div>
                </div>
            </div>
        </div>

        <div className="home-third-header ">
            <div className="row mx-0">
                <div className="col-md-6">
                    <div className="home-third-content">
                        <div className='home--heading'>challenge</div>
                        <div className="home--author">
                            We are employing technology and a unique market experience to provide solutions that aptly
                            meet
                            the needs of clients
                            including research agencies, advertising agencies, corporates and SMEs, NGOs, government
                            agencies and parastatals,
                            educational institutions and even other sample panel providers with little or no footprint
                            in
                            Africa.
                            <br />
                            AfriSight changing the game in Africa!
                        </div>

                    </div>
                </div>
                <div className="col-md-6 ">
                    <img src='./images/aboutus_laptop.png' alt='photo' className="home-image" />
                </div>
            </div>
        </div>

        <div className="home-fourth-header ">
            <div className="row mx-0">
                <div className="col-md-6">
                    <div className="home-fourth-content">
                        <img src='./images/blank_square.png' alt='photo' className="home-image" />
                    </div>
                </div>
                <div className="col-md-6 ">
                    <div className='home--heading'>Solution</div>
                    <div className="home--author">
                        We are employing technology and a unique market experience to provide solutions that aptly meet
                        the
                        needs of clients
                        including research agencies, advertising agencies, corporates and SMEs, NGOs, government
                        agencies
                        and parastatals,
                        educational institutions and even other sample panel providers with little or no footprint in
                        Africa.
                        <br />
                        AfriSight changing the game in Africa!
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div className="footer">
        <div className="footer-logo">
            <img src='./images/logo.png' alt="logo" className="footer-logo-img" />
        </div>
        <div className="footer-row">
            <div>
                <a href="./index.html" className="footer-labels">Home</a>
            </div>
            <div>
                <a href="./Research.html" className="footer-labels">Research</a>
            </div>
            <div>
                <a href="./AboutUs.html" className="footer-labels">About Us</a>
            </div>
            <div>
                <a href="./ContactUs.html" className="footer-labels">Contact Us</a>
            </div>
        </div>
        <div className="footer-privacy row mx-0">
            <div className="col-md-8 footer-color">
                Copyright © 2021 AfriSight B.V. All rights reserved
            </div>
            <div className="col-md-4 footer-color">
                Privacy policy
            </div>
        </div>
    </div>
      </main>
    </>
  )
}
