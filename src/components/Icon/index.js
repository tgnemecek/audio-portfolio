import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlay, faPause, faVolumeUp, faVolumeMute, faPlayCircle, faCompress } from '@fortawesome/free-solid-svg-icons';
import { faSoundcloud, faTwitter } from '@fortawesome/free-brands-svg-icons';

import styles from './index.module.css';

const ICON_SET = {
  "soundcloud": faSoundcloud,
  "twitter": faTwitter,
  "not": faTimes,
  "play": faPlay,
  "pause": faPause,
  "volume": faVolumeUp,
  "mute": faVolumeMute,
  "playCircle": faPlayCircle,
  "fullscreen": faCompress
}

export default class Icon extends React.Component {
  render() {
    if (typeof this.props.onClick === "function") {
      return (
        <button onClick={this.props.onClick} className={styles.icon__button}>
          <FontAwesomeIcon
            icon={ICON_SET[this.props.icon]}
            size={this.props.size || "2x"}/>
        </button>
      )
    } else return (
      <FontAwesomeIcon
        style={this.props.style}
        className={this.props.className}
        icon={ICON_SET[this.props.icon]}
        size={this.props.size || "1x"}/>
    )
  }
}