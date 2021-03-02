import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
const Footer = () => {
  return (
    <>
      <div className="footer no-margin">
        <div className="footer-logo">
          <img src="./images/logo.png" alt="logo" className="footer-logo-img" />
        </div>
        <div className="footer-row">
          <div>
            <Link href="/">
              <a href="" className="footer-labels">
                Home
              </a>
            </Link>
          </div>
          <div>
            <Link href="/research">
              <a className="footer-labels">Research</a>
            </Link>
          </div>
          <div>
            <Link href="/aboutus">
              <a className="footer-labels">About Us</a>
            </Link>
          </div>
          <div>
            <Link href="/contactus">
              <a className="footer-labels">Contact Us</a>
            </Link>
          </div>
        </div>
        <div className="footer-privacy row mx-0">
          <div className="col-md-8 pr-0">
            Copyright © 2021 AfriSight B.V. All rights reserved
          </div>
          <div className="col-md-4 privacypolicy">Privacy policy</div>
        </div>
      </div>
    </>
  );
};
export default Footer;
