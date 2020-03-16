import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
export default class Testimonials extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="testimonials"><Fade bottom>
        <div className="text-container">
          <div className="row">
            <div className="twelve columns">
              <blockquote>
                <p className="contactme text-center">
                  Feel free to contact me or review out more of my work at the links below
                            </p>
                {/* <h4 class="text-center">Linked in :
                  {resumeData.linkedinId}
                </h4> */}
              </blockquote>
            </div> {/* div.flex-container ends */}
            <footer>
              <div className="row">
                <div className="twelve columns">
                  <ul className="social-links">
                    {
                      resumeData.socialLinks && resumeData.socialLinks.map((item) => {
                        return (
                          <li>
                            <a href={item.url}>
                              <i className={item.className} />
                            </a>
                          </li>
                        )
                      })
                    }
                  </ul>

                </div>
                {/* <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div> */}
              </div>
            </footer>
          </div> {/* row ends */}
        </div>  {/* text-container ends */}
      </Fade></section>
    );
  }
}