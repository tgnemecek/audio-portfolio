import React from 'react';
import ReactGA from 'react-ga';

import Icon from 'components/Icon/index';
import styles from './index.module.css';
import TextArea from './TextArea/index';

import Loading from './Loading/index';

export default class ContactSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      honeypot: "",

      loading: false
    }
  }

  onChange = (e) => {
    if (e) this.setState({
      [e.target.name]: e.target.value
    });
  }

  honeypot = () => {
    return (
      <div className={styles.honeypot}>
        <label>Leave This Empty:</label>
        <input
          type="text"
          name="honeypot"
          value={this.state.honeypot}
          className={styles.honeypot}
          onChange={this.onChange}/>
      </div>
    )
  }

  redirectSoundcloud = (e) => {
    e.preventDefault();
    ReactGA.event({
      category: "Contact Form",
      action: "Soundcloud Icon"
    })
    window.open('https://soundcloud.com/audioheadcx', '_blank');
  }

  redirectTwitter = (e) => {
    e.preventDefault();
    ReactGA.event({
      category: "Contact Form",
      action: "Twitter Icon"
    })
    window.open('https://twitter.com/nemecek_', '_blank');
  }

  openLoading = (e) => {
    e.preventDefault();
    if (!this.state.honeypot) {
      this.setState({ loading: true });
    }
  }

  closeLoading = () => {
    this.setState({ loading: false });
  }

  render() {
    return (
      <section id="contact" className={styles.contact}>
        <h2>Contact</h2>
        <form>
          {this.honeypot()}
          <div className={styles.contact__input}>
            <label>Your Name</label>
            <input onChange={this.onChange} name="name" value={this.state.name}/>
          </div>
          <div className={styles.contact__input}>
            <label>Your E-mail</label>
            <input onChange={this.onChange} name="email" value={this.state.email} type="email"/>
          </div>
          <div className={styles.contact__input}>
            <label>Your Message</label>
            <TextArea
              name="message"
              value={this.state.message}
              onChange={this.onChange}
            />
          </div>
          <div>
            <button onClick={this.openLoading}>SEND</button>
            <div className={styles.contact__social}>
              <span><Icon icon="soundcloud" onClick={this.redirectSoundcloud}/></span>
              <span><Icon icon="twitter" onClick={this.redirectTwitter}/></span>
            </div>
          </div>
          <h4>{this.state.thankYouMessage}</h4>
        </form>
        {this.state.loading ?
          <Loading
            closeBox={this.closeLoading}
            name={this.state.name}
            email={this.state.email}
            message={this.state.message}
            honeypot={this.state.honeypot}
          />
        : null}
      </section>
    )
  }
}