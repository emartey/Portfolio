import React, { Component } from 'react';
export default class About extends Component {
   render() {
      let resumeData = this.props.resumeData;
      return (
         <section id="about">
            <div className="row">

               <div className="three columns">

                  <img className="profile-pic" src="images/profilepic.jpg" alt="" />

               </div>

               <div className="nine columns main-col">

                  <h2>About Me</h2>
                  <p>
                     {
                        resumeData.aboutme
                     }
                  </p>

                  <div className="row">

                     <div className="columns contact-details">

                        <h2>Contact Details</h2>
                        <p className="address">
                           <span>{resumeData.name}</span>
                           <br></br>
                           <span>
                              {resumeData.address}
                           </span>
                           <br></br>
                           <span>
                              <a href={resumeData.linkedinId}>LinkedIn Profile</a>
                           </span>
                           <br></br>
                           <span>
                              <a href={resumeData.gitHub}>Github Profile</a>
                           </span>
                           <br></br>
                           <span>
                              <a href="images/EdwardMarteyResume.pdf" target="_blank">Resume</a>
                           </span>
                        </p>
                        {/* <ul className="social-links">
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
                        </ul> */}
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}