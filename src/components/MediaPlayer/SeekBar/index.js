import React from 'react'
import { withMediaProps } from 'react-media-player';

import styles from './index.module.css';
import Icon from 'components/Icon/index';

class SeekBar extends React.Component {
  constructor(props) {
    super(props);
    this.getProgress = this.getProgress.bind(this);
  }
  getProgress = () => {
    var percent = this.props.media.currentTime / this.props.media.duration * 100;
    return Math.round(percent * 100) / 100;
  }
  seekTo = (e) => {
    var position = e.target.value;
    this.props.media.seekTo(position);
  }
  render() {
    return (
      <div>
        <input
          type="range"
          className={styles.mediaPlayer__seekBar}
          value={this.props.media.currentTime}
          onChange={this.seekTo}
          min="0"
          max={this.props.media.duration}/>
      </div>
    )
  }
}

export default withMediaProps(SeekBar);