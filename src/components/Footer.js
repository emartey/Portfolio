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
            <div class="content has-text-centered">
              <p>
                <strong>My Portfolio</strong> by <a href="https://github.com/emartey">Edward Martey</a>
              </p>
            </div>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>
    );
  }
}