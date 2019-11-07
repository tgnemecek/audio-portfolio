import React from 'react'
import { withMediaProps } from 'react-media-player';

import styles from './index.module.css';
import Icon from 'components/Icon/index';

class Overlay extends React.Component {
  render() {
    return (
      <button
        className={styles.mediaPlayer__playOverlay}
        onClick={this.props.media.playPause}>
        {this.props.media.isPlaying ? null
        :
          <Icon icon="playCircle" className={styles.mediaPlayer__bigPlayIcon}/>
        }
      </button>
    )
  }
}

export default withMediaProps(Overlay);