import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import axios from 'axios';
import AddTripButton from "./ContactUs";
import "./style.css";

export default class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      isEmptyState: true,
      isAddTripState: false
    }
  }

  triggerAddTripState = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isAddTripState: true
    });
  };


  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: this.state
    }).then((response) => {
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm() {

    this.setState({ name: "", email: "", message: "" })
  }
  onNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value })
  }
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
                  {this.state.isEmptyState && (
                    <AddTripButton addTrip={this.triggerAddTripState} />
                  )}

                  {!this.state.isEmptyState && (
                    <form class="text-center" id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                      </div>
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                  )}

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