import React from 'react';
import ReactGA from 'react-ga';
import { ReCaptcha, loadReCaptcha } from 'react-recaptcha-v3';
import styles from './index.module.css';
import Box from 'components/Box/index';

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMessage: false
    }
  }
  componentDidMount() {
    loadReCaptcha('6LccQsEUAAAAAPPks8UPc8m_mHe6MQm9NvbtR7xM');
  }
  verifyCallback = (recaptchaToken) => {
    fetch('https://dnnq0poewb.execute-api.us-east-1.amazonaws.com/default/recaptcha', {
      method: 'POST',
      body: JSON.stringify({
        token: recaptchaToken,
        isDevelopment: !!process.env.isDevelopment,
        name: this.props.name,
        email: this.props.email,
        message: this.props.message,
        honeypot: this.props.honeypot
      })
    })
    .then((res) => {
      res.json().then((body) => {
        console.log(body);
        if (body.mailSent) {
          ReactGA.event({
            category: "Contact Form",
            action: "Form Sent"
          })
          this.setState({ showMessage: true }, () => {
            setTimeout(() => {
              this.props.closeBox();
            }, 5000)
          });
        }
      })
    })
  }
  render() {
    return (
      <Box
        className={styles.loading}>
        <ReCaptcha
          sitekey='6LccQsEUAAAAAPPks8UPc8m_mHe6MQm9NvbtR7xM'
          action='form_submission'
          verifyCallback={this.verifyCallback}
        />
        {!this.state.showMessage ?
          <div className={styles.loading__loader}>
            <div></div><div></div><div></div>
          </div>
        : null}
        {this.state.showMessage ?
          <h3>
            Thanks for contacting us!<br/>
            We will get back to you soon.
          </h3>
        : null}
      </Box>
    )
  }
}