import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
// import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        <Testimonials resumeData={resumeData} env={this.props.env} />
        {/* <ContactUs resumeData={resumeData}/> */}
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}

App.propTypes = {
  env: PropTypes.object.isRequired
};

export default App;