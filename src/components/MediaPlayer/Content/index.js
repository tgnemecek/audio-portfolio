import React from 'react'
import { withMediaProps } from 'react-media-player';

import Icon from 'components/Icon/index';

class Content extends React.Component {
  style = () => {
    if (!this.props.media.isPlaying) {
      return {opacity: "0.5"}
    } else return {};
  }
  render() {
    return (
      <div style={this.style()} className={this.props.className}>
        {this.props.children}
      </div>
    )
  }
}

export default withMediaProps(Content);