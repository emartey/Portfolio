import React, { Component } from "react";
import Fade from "react-reveal/Fade";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <Fade right>
          <div className="text-container">
            <div className="row">
              <div className="twelve columns collapsed">
                <h1>
                  <span>Scroll Thru to Check Out Some of My Work</span>
                </h1>
              </div>
              <div className="ten columns flex-container">
                <div className="flexslider">
                  <ul className="slides">
                    {resumeData.portfolio &&
                      resumeData.portfolio.map((item) => {
                        return (
                          <li className={`${item.name}`}>
                            <div className="columns portfolio-item">
                              <div className="item-wrap text-center">
                                <img
                                  src={`${item.imgurl}`}
                                  className="item-img"
                                  alt=""
                                />
                                <p>
                                  <cite className={`${item.name}`}>
                                    {item.name}
                                  </cite>
                                </p>
                                {item.description}
                                <br></br>
                                <br></br>
                                Take a closer look at this app by clicking the
                                link below
                                <a
                                  className={item.name}
                                  href={item.url}
                                  onClick={() =>
                                    (window.location.href = `${item.url}`)
                                  }
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <i
                                    className={item.className}
                                    id={item.name}
                                  />
                                </a>
                                {/* <div className="overlay">
                                <div className="portfolio-item-meta">
                                  <h5>{item.name}</h5>
                                  <p>{item.description}</p>
                                </div>
                              </div> */}
                              </div>
                            </div>
                          </li>
                        );
                      })}
                  </ul>
                </div>{" "}
                {/* div.flexslider ends */}
              </div>{" "}
              {/* div.flex-container ends */}
            </div>{" "}
            {/* row ends */}
          </div>{" "}
          {/* text-container ends */}
        </Fade>{" "}
      </section>
    );
  }
}
