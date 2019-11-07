import React from 'react'
import { Media, Player } from 'react-media-player';

import Icon from 'components/Icon/index';

import Content from './Content/index';
import SeekBar from './SeekBar/index';
import Controls from './Controls/index';
import Overlay from './Overlay/index';
import styles from './index.module.css';

export default class MediaPlayer extends React.Component {
  render() {
    return (
      <Media>
        <div>
          <Content className={styles.mediaPlayer}>
            <Overlay/>
            <Player {...this.props}
              autoPlay={true}
              loop={true}
              className={styles.mediaPlayer__player}/>
            <div className={styles.mediaPlayer__lowerOverlay}>
              <SeekBar/>
              <Controls/>
            </div>
          </Content>
        </div>
      </Media>
    )
  }
}
