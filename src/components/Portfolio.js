import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio"><Fade right>
        <div className="text-container">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1><span>Check out some of my work</span></h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  {
                    resumeData.portfolio && resumeData.portfolio.map((item) => {
                      return (
                        <div className="columns portfolio-item">
                          <div className="item-wrap">
                            <a href="#modal-01">
                              <img src={`${item.imgurl}`} className="item-img" />
                              <div className="overlay">
                                <div className="portfolio-item-meta">
                                  <h5>{item.name}</h5>
                                  <p>{item.description}</p>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      )
                    })
                  }
                </ul>
              </div> {/* div.flexslider ends */}
            </div> {/* div.flex-container ends */}
          </div> {/* row ends */}
        </div>
      </Fade></section>
    );
  }
}