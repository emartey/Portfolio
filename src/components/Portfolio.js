import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
// "twelve columns collapsed"
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio"><Fade right>
        <div className="text-container">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1><span>Check Out Some of Work</span></h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  {
                    resumeData.portfolio && resumeData.portfolio.map((item) => {
                      return (
                        <li>
                          <img src={`${item.imgurl}`} className="item-img" alt="" />
                          <p>
                            {item.description}
                          </p>
                          <cite>{item.name}</cite>

                        </li>
                      )
                    })
                  }
                </ul>
              </div> {/* div.flexslider ends */}
            </div> {/* div.flex-container ends */}
          </div> {/* row ends */}
        </div>  {/* text-container ends */}
      </Fade> </section>
    );
  }
}