import React from 'react'
import { withMediaProps } from 'react-media-player';

import styles from './index.module.css';
import Icon from 'components/Icon/index';


class Controls extends React.Component {
  playPause = () => {
    this.props.media.playPause();
  }
  render() {
    return (
      <div className={styles.mediaPlayer__controls}>
        <PlayPause isPlaying={this.props.media.isPlaying} onClick={this.playPause} />
        <Volume
          {...this.props.media}
        />
        <FullScreen setFullScreen={this.props.media.fullscreen}/>
      </div>
    )
  }
}

export default withMediaProps(Controls);

class PlayPause extends React.Component {
  render() {
    return (
      <div className={styles.mediaPlayer__controls__playPause}>
        <button
          type="button"
          onClick={this.props.onClick}>
          <Icon icon={this.props.isPlaying ? 'pause' : 'play'}/>
        </button>
      </div>
    )
  }
}

class Volume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastKnownVolume: 0
    }
  }
  componentDidMount() {
    this.mute();
  }
  mute = () => {
    if (this.props.volume !== 0) {
      var lastKnownVolume = this.props.volume;
      this.setState({ lastKnownVolume }, () => {
        this.props.setVolume(0);
      })
    } else {
      this.props.setVolume(this.state.lastKnownVolume);
    }
  }
  setVolume = (e) => {
    var volume = Number(e.target.value)/100;
    this.props.setVolume(volume);
    this.setState({ lastKnownVolume: volume });
  }
  render() {
    return (
      <div className={styles.mediaPlayer__controls__volume}>
        <button onClick={this.mute}>
          <Icon icon={this.props.volume === 0 ? "mute" : "volume"} />
        </button>
        <div>
          <input
            type="range"
            className={styles.mediaPlayer__controls__volumeSlider}
            onChange={this.setVolume}
            value={this.props.volume*100}
            min="0"
            max="100"/>
        </div>
      </div>
    )
  }
}

class FullScreen extends React.Component {
  render() {
    return (
      <div className={styles.mediaPlayer__controls__fullScreen}>
        <button
          type="button"
          onClick={this.props.setFullScreen}>
          <Icon icon="fullscreen"/>
        </button>
      </div>
    )
  }
}