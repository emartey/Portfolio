import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import AddTripButton from "./ContactUs";
import "./style.css";
import PropTypes from 'prop-types';

export default class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      personName: '',
      personEmail: '',
      isEmptyState: true,
      isAddTripState: false,
      formSubmitted: false
    }
  }

  triggerAddTripState = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isAddTripState: true
    });
  };

  handleCancel = this.handleCancel.bind(this);
  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);

  static sender = 'sender@example.com';

  handleCancel() {
    this.setState({
      ...this.state,
      isEmptyState: true,
      isAddTripState: false,
      message: ''
    });

  }

  handleChange(event) {
    this.setState(
      { message: event.target.value },
      { personName: event.target.value },
      { personEmail: event.target.value }
    );
  }

  handleSubmit(event) {
    event.preventDefault();

    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: template,
      REACT_APP_EMAILJS_USERID: user,
    } = this.props.env;

    this.sendFeedback(
      template,
      this.sender,
      receiverEmail,
      this.refs.message.value,
      this.refs.personName.value,
      this.refs.personEmail.value,
      user
    );

    this.setState({
      formSubmitted: true
    });
  }

  // Note: this is using default_service, which will map to whatever
  // default email provider you've set in your EmailJS account.
  sendFeedback(templateId, senderEmail, receiverEmail, message, personName, personEmail, user) {
    window.emailjs
      .send('default_service', templateId, {
        senderEmail,
        receiverEmail,
        message,
        personName,
        personEmail
      },
        user
      )
      .then(res => {
        console.log('MAIL SENT!')
        alert("Mail Sent")
        this.setState({
          isEmptyState: true,
          isAddTripState: false,
          formEmailSent: true
        });
      })
      // Handle errors here however you like
      .catch(err => console.error('Failed to send message. Error: ', err));
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
                    <form className="text-center" id="contact-form" required onSubmit={this.handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" placeholder="Enter Your Name" id="personName" ref="personName" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" id="personEmail" ref="personEmail" aria-describedby="emailHelp" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" placeholder="Enter Your Message. Don't be shy, be nice!" rows="5" id="message" ref="message" />
                      </div>
                      <div className="btn-group">
                        <button type="submit" className="btn btn-primary" >Submit</button>
                        <button className="btn btn--cancel" onClick={this.handleCancel}>
                          Cancel
                        </button>
                      </div>
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

Testimonials.propTypes = {
  env: PropTypes.object.isRequired
};

// export default Testimonials