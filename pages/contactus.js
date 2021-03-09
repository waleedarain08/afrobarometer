import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import { validateAll } from "indicative/validator";
import {BaseUrl} from "../public/constant";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [SignUpErrors, setSignUpErrors] = useState({});
  const [isLoading, setLoading] = useState(false);

  
  const handleSignUp = async (event) => {
    event.preventDefault();
    const rules = {
      name: "required",
      email: "required",
      message: "required",
    };

    const data = {
      name: name,
      email: email,
      company: company,
      message: message,
    };

    const messages = {
      required: (field) => `${field} is required`,
    };

    validateAll(data, rules, messages)
      .then(() => {
        callApi();
      })
      .catch((err) => {
        const formatError = {};
        err.forEach((err) => {
          formatError[err.field] = err.message;
        });
        setSignUpErrors(formatError);
      });
  };

  const callApi = async () => {
    setSignUpErrors({});
    setLoading(true);
    const res = await fetch(`${BaseUrl}/public/api/query`, {
      body: JSON.stringify({
        name: name,
        email: email,
        company : company,
        message : message
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const result = await res.json();
  };

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact Us</title>
      </Head>
      <Header />
      <div className="contactUs_header">
        <div className="contactUs-content">Contact Us</div>
        <div className="curved-line">
          <img src="./images/curveunderline.png" alt="" />
        </div>
      </div>

      <div className="contact-vector">
        <div className="contactUs-second-row ">
          <div className="row mx-0">
            <div className="col-md-6 contactUs-photo">
              <img
                src="./images/photo.png"
                alt="photo"
                className="laptop-image"
              />
            </div>
            <div className="col-md-6 photo">
              <div className="container">
                <div className="contactUs-subheading">Contact us:</div>
                <br />
                <br />
                <div className="d-flex">
                  <img src="./images/mapicon.png" className="map-icon" />
                  <div className="contactUs-subheading-content">
                    AfriSight B.V. Marconistraat 16 3029 AK, Rotterdam The
                    Netherlands
                    <br />
                    <br />
                    <span className="bold-text">CoC:</span> 71698515 <br />
                    <span className="bold-text">VAT:</span> NL858814791B01
                    <br />
                    <br />
                    Use our contact form to contact AfriSight with general
                    questions, press inquiries, or to get a quote for your
                    upcoming project. If you have questions about specific
                    services or availability, please be as descriptive as
                    possible.
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contactUs-third">
          <div className="container">
            <div className="container">
              <div className="card text-left">
                <div className="card-body contactUs-third-row">
                  <form className="container" onSubmit={handleSignUp}>
                    <div className="row mx-0">
                      <div className="col-md-6 mx-0 no-padding">
                        <div className="form-group">
                          <label className="contact-label"> Name *</label>
                          <input
                            type="text"
                            id="name"
                            required
                            onChange={setName}
                            style={SignUpErrors.name?{borderColor: "red" }:{borderColor:"#ced4da"}}
                            className="form-control form-control-lg"
                          />
                          <span className="contact-error">{SignUpErrors ? SignUpErrors.name : null}</span>
                        </div>
                      </div>
                      <div className="col-md-6 no-padding">
                        <div className="form-group">
                          <label className="contact-label">Company</label>
                          <input
                            type="text"
                            id="company"
                            onChange={setCompany}
                            style={SignUpErrors.company?{borderColor: "red" }:{borderColor:"#ced4da"}}
                            className="form-control form-control-lg"
                          />
                          <span className="contact-error">{SignUpErrors ? SignUpErrors.company : null}</span>
                        </div>
                      </div>
                    </div>
                    <div className="row mx-0">
                      <div className="form-group  col-md-12 no-padding ">
                        <label className="contact-label">Email *</label>
                        <input
                          type="email"
                          id="email"
                          required
                          onChange={setEmail}
                          style={SignUpErrors.email?{borderColor: "red" }:{borderColor:"#ced4da"}}
                          className="form-control form-control-lg"
                        />
                      <span className="contact-error">{SignUpErrors ? SignUpErrors.email : null}</span>
                      </div>
                    </div>
                    <div className="row mx-0">
                      <div className="form-group col-md-12 no-padding">
                        <label className="contact-label">Message *</label>
                        <br />
                        <textarea
                          type="text"
                          id="message"
                          required
                          style={SignUpErrors.message?{borderColor: "red" }:{borderColor:"#ced4da"}}
                          onChange={setMessage}
                          className="textarea"
                          rows="4"
                        ></textarea>
                        <span className="contact-error">{SignUpErrors ? SignUpErrors.message : null}</span>
                      </div>
                    </div>
                    <div className="home---button-div">
                      <button className="home---button">SUBMIT</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
