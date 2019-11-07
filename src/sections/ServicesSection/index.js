import React from 'react';
import { faMusic, faFilm, faCarCrash, faCode } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.css';
import Block from 'components/Block/index';
import Service from './Service/index';

export default class ServicesSection extends React.Component {
  render() {
    return (
      <section id="services" className={styles.services}>
        <h2>Services</h2>
        <Block columns={4}>
          <Service
            title="Original Soundtrack"
            icon={faFilm}
            iconStyle={{}}
            text="We believe music generates emotional engagement and with that in mind we focus on creating functional scores that speak with the media it was made for, whether it’s a rock-driven score or a fully orchestral one."
          />
          <Service
            title="Music Production"
            icon={faMusic}
            iconStyle={{marginLeft: "-1px"}}
            text="We work alongside musicians guiding them into fully constructed projects, from single tracks to full albums. Acting from pre-production to post-production, our job is to extract the best musicality within them."
          />
          <Service
            title="Sound Design"
            icon={faCarCrash}
            iconStyle={{marginLeft: "-2px"}}
            text="A crucial job that is often misunderstood, sound design is what makes films and games believable and works mostly when it’s not noticed. We record, edit and mix soundscapes trying to convey reality or strangeness when required."
          />
          <Service
            title="Audio Programming"
            icon={faCode}
            iconStyle={{marginLeft: "-2px"}}
            text="Required only in interactive media, audio programming is the implementation of sound and music in video games, and we do it understanding that audio doesn’t need to be static like in films, but interactive as the player progresses."
          />
        </Block>
      </section>
    )
  }
}