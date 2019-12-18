import React from "react";
import { Helmet } from "react-helmet";
import ReactGA from 'react-ga';
import { ReCaptcha, loadReCaptcha } from 'react-recaptcha-v3';
import 'styles/global.css';

import Header from 'components/Header/index';
import TopSection from 'sections/TopSection/index';
import ServicesSection from 'sections/ServicesSection/index';
import AboutSection from 'sections/AboutSection/index';
import WorksSection from 'sections/WorksSection/index';
import MusicSection from 'sections/MusicSection/index';
import ContactSection from 'sections/ContactSection/index';
import Footer from 'components/Footer/index';

export default class HomePage extends React.Component {
  componentDidMount() {
    loadReCaptcha('6LccQsEUAAAAAPPks8UPc8m_mHe6MQm9NvbtR7xM');
    ReactGA.initialize('UA-150859579-1');
  }
  verifyCallback = (recaptchaToken) => {
    fetch('https://i35yb6qeh8.execute-api.us-east-1.amazonaws.com/default/thiagonemecek', {
      method: 'POST',
      body: JSON.stringify({
        functionName: 'recaptcha',
        params: {
          token: recaptchaToken,
          isDevelopment: !!process.env.isDevelopment
        }
      })
    })
    .then((res) => {
      res.json().then((body) => {
        if (body.success) {
          ReactGA.pageview('/');
        }
      })
    })
  }
  render() {
    return (
      <div>
        <Helmet>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1f9ba6"/>
          <meta name="msapplication-TileColor" content="#1f9ba6"/>
          <meta name="theme-color" content="#1f9ba6"/>
          <title>Thiago Nemecek: Audio Portfolio</title>
        </Helmet>
        <ReCaptcha
          sitekey='6LccQsEUAAAAAPPks8UPc8m_mHe6MQm9NvbtR7xM'
          action='page_view'
          verifyCallback={this.verifyCallback}
        />
        <div className="page-content">
          <Header/>
          <TopSection/>
          <AboutSection/>
          <MusicSection/>
          <WorksSection/>
          <ContactSection/>
          <Footer/>
        </div>
      </div>
    )
  }
}