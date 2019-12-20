import React from 'react';
import Zoom from 'react-reveal/Zoom';
import profilePic from 'images/home/profile-pic.png';
import styles from './index.module.css';

export default class AboutSection extends React.Component {
  render() {
    return (
      <section id="about" className={styles.about}>
        <h2>About</h2>
        <div className={styles.about__content}>
          <div>
            <div className={styles.about__icon}>,,</div>
            <p>
              Thiago (James) Nemecek is a film and game composer, sound designer and audio programmer based in Toronto, Canada, who has worked in the top-grossing brazilian films for consecutive years since 2016. Thiago has also worked as sound designer for video games, VR experiences and other media, including the 2016 Official League of Legends Brazilian Finals Opening Ceremony, acompanying a holographic projection on stage for thousands of spectators. When needed, Thiago works also as a programmer and uses this knowledge to implement audio in video games.
            </p>
          </div>
          <Zoom>
            <div className={styles.about__picture}>
              <img src={profilePic} />
            </div>
          </Zoom>
          </div>
      </section>
    )
  }
}