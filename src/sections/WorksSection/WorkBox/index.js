import React from 'react';
import ReactGA from 'react-ga';
import { ReCaptcha, loadReCaptcha } from 'react-recaptcha-v3';
import styles from './index.module.css';
import Box from 'components/Box/index';

export default class WorkBox extends React.Component {
  componentDidMount() {
    loadReCaptcha('6LccQsEUAAAAAPPks8UPc8m_mHe6MQm9NvbtR7xM');
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
        console.log(body);
        if (body.success) {
          ReactGA.event({
            category: "Works",
            action: "Opened a Work Box: " + this.props.work.title
          })
        }
      })
    })
  }
  renderExtras = () => {
    if (!this.props.work.extra) return null;
    return this.props.work.extra.map((extra, i) => {
      return (
        <div key={i}>
          <h2>{extra.label}</h2>
          {conditionalExtras(extra)}
        </div>
      )
    })
  }

  renderExternalLink = () => {
    if (!this.props.work.externalLink) return null;
    return (
      <span>
        <a
          target="_blank"
          href={this.props.work.externalLink}>External Link</a>
      </span>
    )
  }

  render() {
    return (
      <Box
        title={this.props.work.title}
        closeBox={this.props.toggleBox}
        className={styles.workbox}>
        <ReCaptcha
          sitekey='6LccQsEUAAAAAPPks8UPc8m_mHe6MQm9NvbtR7xM'
          action='work_box'
          verifyCallback={this.verifyCallback}
        />
        <h3>{this.props.work.title}</h3>
        <div className={styles.workbox__content}>
          <div className={styles.workbox__main}>
            <div className={styles.workbox__info}>
              <div>
                <label>Year: </label>{this.props.work.year}
              </div>
              <div>
                <label>Produced By: </label>{this.props.work.production}
              </div>
              <div>
                <label>Work: </label>{this.props.work.work}
              </div>
              <div>
                <label>Type: </label>{this.props.work.type}
              </div>
            </div>
            <div>
              <p>
                {this.props.work.description} {this.renderExternalLink()}
              </p>
            </div>
          </div>
          {this.renderExtras()}
        </div>
      </Box>
    )
  }
}

function conditionalExtras(extra) {
  switch (extra.type) {
    case "soundcloud":
      return (
        <iframe
          width="100%" height="415"
          scrolling="no" frameBorder="no"
          src={extra.value}>
        </iframe>
      )
    case "youtube":
      return (
        <iframe
          width="100%" height="415"
          scrolling="no" frameBorder="no"
          src={extra.value}>
        </iframe>
      )
    case "vimeo":
      return (
        <iframe
          width="100%" height="415"
          scrolling="no" frameBorder="no"
          src={extra.value}>
        </iframe>
      )
    default:
      return null;
  }
}