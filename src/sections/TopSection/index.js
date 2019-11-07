import React from 'react';

import MediaPlayer from 'components/MediaPlayer/index';
import Tab from 'components/Tab/index';
import styles from './index.module.css';

import generalReel from 'videos/general-video-reel.mp4';
import gameAudioDemo from 'videos/game-audio-demo.mp4';

export default class TopSection extends React.Component {
  render() {
    return (
      <section id="top" className={styles.top}>
        <MyName/>
        <VideoContainer/>
      </section>
    )
  }
}

class MyName extends React.Component {
  render() {
    return (
      <div className={styles.top__myName}>
        <h1>Thiago Nemecek</h1>
        <p>Composer | Sound Designer | Audio Programmer</p>
      </div>
    )
  }
}

class VideoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0
    }
    this.myRef = React.createRef();
  }

  renderTabBar = () => {
    const changeTab = (e) => {
      var element = this.myRef.current;
      var style = window.getComputedStyle(element);
      var width = style.width;
      element.style.width = width;
      var currentTab = Number(e.target.value);
      this.setState({ currentTab }, () => {
        setTimeout(() => {
          element.style.width = ""
        }, 2000);
      });
    }
    return (
      <div className={styles.top__tabContainer__tabBar}>
        <Tab
          order={0}
          currentTab={this.state.currentTab}
          onClick={changeTab} label="Main Works Reel"/>
        <Tab
          order={1}
          currentTab={this.state.currentTab}
          onClick={changeTab} label="Game Audio Demo"/>
      </div>
    )
  }

  renderMediaPlayer = () => {
    switch (this.state.currentTab) {
      case 0:
        return <MediaPlayer src={generalReel}/>
      case 1:
        return <MediaPlayer src={gameAudioDemo}/>
      default:
        return null
    }
  }

  render() {
    return (
      <div className={styles.top__tabContainer} ref={this.myRef}>
        {this.renderTabBar()}
        {this.renderMediaPlayer()}
      </div>
    )
  }
}