import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    // let resumeData = this.props.resumeData;
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            {/* <ul className="social-links">
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                return(
                  <li>
                    <a href={item.url}>
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
          </ul> */}
            <div className="content has-text-centered">
              <p>
                <strong>My Portfolio</strong> by <a href="https://github.com/emartey">Edward Martey</a>
              </p>
            </div>
            <div>
              <div class="builtWithCont">
                <div class="builtWithWrap">
                  <p>Built With React</p>
                </div>
              </div>
              <div id="reactFooter">
                <div class="footerAnchorIcons">
                  <img src="images/reactICON.png" alt="React Logo" id="reactLogoRotate">
                  </img>
                </div>
              </div>
            </div>
            <div id="go-top">
              <a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}