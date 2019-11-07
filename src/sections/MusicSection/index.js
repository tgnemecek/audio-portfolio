import React from 'react';

import Tab from 'components/Tab/index';
import styles from './index.module.css';

export default class MusicSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0
    }
  }

  changeTab = (e) => {
    this.setState({ currentTab: Number(e.target.value) });
  }

  render() {
    return (
      <section id="music" className={styles.music}>
        <h2>Original Music</h2>
        <div className={styles.music__tabContainer}>
          <Tab
            order={0}
            currentTab={this.state.currentTab}
            onClick={this.changeTab} label="Demo Reel"/>
          <Tab
            order={1}
            currentTab={this.state.currentTab}
            onClick={this.changeTab} label="Adventure"/>
          <Tab
            order={2}
            currentTab={this.state.currentTab}
            onClick={this.changeTab} label="Epic"/>
          <Tab
            order={3}
            currentTab={this.state.currentTab}
            onClick={this.changeTab} label="Melancholic"/>
          <Tab
            order={4}
            currentTab={this.state.currentTab}
            onClick={this.changeTab} label="Suspense"/>
        </div>
        <Soundcloud currentTab={this.state.currentTab}/>
      </section>
    )
  }
}

class Soundcloud extends React.Component {

  getSource = () => {
    switch (this.props.currentTab) {
      case 0:
        return "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/317113609%3Fsecret_token%3Ds-EQrj0&color=%23242434&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true";
        break;
      case 1:
        return "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/35201153%3Fsecret_token%3Ds-LHA6H&amp;color=168d81&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false";
        break;
      case 2:
        return "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/35203176%3Fsecret_token%3Ds-vFmsu&amp;color=168d81&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false";
        break;
      case 3:
        return "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/35204113%3Fsecret_token%3Ds-XvMKA&amp;color=168d81&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false";
        break;
      case 4:
        return "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/35498575%3Fsecret_token%3Ds-RhbvV&amp;color=168d81&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false";
        break;
    }
  }

  render() {
    return (
      <iframe
        width="100%" height="415"
        scrolling="no" frameBorder="no"
        src={this.getSource()}>
      </iframe>
    )
  }
}