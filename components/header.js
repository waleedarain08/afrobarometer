import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
const Header = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="footer.css" />
      </Head>
      <nav className="nav-01 ">
        <div className="main-nav row mx-0">
          <div className="col-md-6">
            <img
              src="./images/logo.png"
              alt="Afri Sight"
              className="main-nav-logo"
            />
          </div>

          <div className="right-main-nav col-md-6">
            <div className="main-nav-input">
              <img src="./images/search-dark.png" className="main-nav-search" />
              <input className="main-nav-input-field" style={{marginLeft:"5px"}} />
            </div>
            <div className="main-nav-en">
              <img src="./images/profile.png" className="profile-main-nav" />
              <span className="polygon-main-nav">EN</span>
              <img src="./images/dropdown.png" className="polygon-main-nav" />
            </div>
            <a href="./ContactUs.html">
              <div className="main-nav-contact-div">
                <button className="main-nav-contact">Contact Us</button>
              </div>
            </a>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light home-navbar">
        <a className="navbar-brand" href="#"></a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" style={{justifyContent:"center"}} id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link href="/">
                <a className="nav-link nav-text">
                  HOME<span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/rawdata">
                <a className="nav-link nav-text">RAW DATA</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/aboutus">
                <a className="nav-link nav-text">ABOUT US</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/research">
                <a className="nav-link nav-text">RESEARCH</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/researchTopic">
                <a className="nav-link nav-text">RESEARCH TOPIC</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contactus">
                <a className="nav-link nav-text">CONTACT US</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
