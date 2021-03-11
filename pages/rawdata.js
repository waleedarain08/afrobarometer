import Head from "next/head";
import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { BaseUrl, ImageUrl } from "../public/constant";

export default function RawData({ data }) {
  const [rawData, setRawData] = useState(data.raw_data);
  const [search, setSearch] = useState("");
  const [dataSource, setDataSource] = useState([]);

  const filterRawData = (id) => {
    fetch(`${BaseUrl}/raw-data/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((jsondata) => setRawData(jsondata.raw_data))
      .catch((e) => e);
  };

  const SearchFilterFunction = (text) => {
    const newData = data.categories.filter(function (item) {
      const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    setDataSource(newData);
    setSearch(text);
  };

  return (
    <>
      <Head>
        <title>Afrobarometer</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <title>Raw Data</title>
      </Head>
      <Header />
      <div className="rawData_header">
        <div className="container">
          <div className="row mx-0">
            <div className="col-md-7 col-12">
              <div className="rawData-content">
                <div className="rawData-heading">Afrobarometer</div>
                <div className="rawData-paragraph">
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
                src="./images/rawdata-header.png"
                alt="photo"
                className="home-image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="rawData-second-portion">Raw Data</div>
      </div>

      <div className="rawData-third-portion">
        <div className="row mx-0">
          <div className="col-md-5 left-rawdata-div">
            <div className="container">
              <div className="row mx-0">
                <div className="search-input">
                  <img
                    src="./images/search icon.png"
                    alt=""
                    className="search-icon"
                  />
                  <input
                    placeholder="Search by name"
                    value={search}
                    onChange={(e) => SearchFilterFunction(e.target.value)}
                    //onClear={() => SearchFilterFunction("")}
                    className="input-field-searchbyname"
                  />
                </div>
                {/* <div className="show-all-div">
                  <span className="checkbox-icon">
                    <img src="./images/Path.png" alt="" />
                  </span>
                  <span className="show">Show All</span>
                </div> */}
              </div>
              <div className="row mx-0">
                <span className="text-button">Category</span>
              </div>
              <div>
                {dataSource && dataSource.length > 0
                  ? dataSource.map((item, index) => {
                      return (
                        <button
                          key={index}
                          onClick={() => filterRawData(item.id)}
                          className="non-selected-btn rawdata-buttons"
                        >
                          {item.name}
                        </button>
                      );
                    })
                  : data.categories.map((item, index) => {
                      return (
                        <button
                          key={index}
                          onClick={() => filterRawData(item.id)}
                          className="non-selected-btn rawdata-buttons"
                        >
                          {item.name}
                        </button>
                      );
                    })}
                {/* <button className="selected-btn rawdata-buttons">
                  Democracy
                </button>
                <button className="selected-btn rawdata-buttons">
                  External Affairs & Security
                </button>
                <button className="non-selected-btn rawdata-buttons">
                  Democracy
                </button>
                <button className="non-selected-btn rawdata-buttons">
                  Democracy
                </button> */}
              </div>
              {/* <div className="row mx-0">
                <span className="text-button">Category Name</span>
              </div>
              <div>
                <button className="non-selected-btn rawdata-buttons">
                  Democracy
                </button>
                <button className="non-selected-btn rawdata-buttons">
                  Democracy
                </button>
              </div> */}
            </div>
          </div>
          <div className="col-md-7">
            <div className="row mx-0">
              {rawData.map((item, index) => {
                return (
                  <div key={index} className="col-md-6">
                    <div className="insight">
                      <div className="insight-image">
                        <img
                          src={`${ImageUrl}/${item.graph}`}
                          alt="insight number 01"
                          className="raw-data-pic"
                        />
                      </div>
                      <div className="container">
                        <p className="insight-heading">{item.title}</p>
                        <p className="insight-research-date">
                          Date of research: {item.date}
                        </p>
                        <p className="insight-text">{item.description}</p>
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
                );
              })}
            </div>
            {/* <div className="row mx-0 insight-cards-second-row">
              <div className="col-md-6">
                <div className="insight">
                  <div className="insight-image">
                    <img
                      src="./images/Rectangle 270.png"
                      alt="insight number 01"
                      className="raw-data-pic"
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
                      className="raw-data-pic"
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
            </div> */}

            <div className="research-button">
              <button className="transparent-button">back to overview</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${BaseUrl}/raw-data`)
    .then((response) => response.json())
    .then((jsondata) => jsondata);
  const data = await res;
  return {
    props: {
      data,
    },
  };
}
