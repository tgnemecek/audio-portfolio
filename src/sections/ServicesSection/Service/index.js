import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './index.module.css';
import Block from 'components/Block/index';

export default class Service extends React.Component {
  render() {
    return (
      <div className={styles.services__container} onMouseOver={this.showText}>
        <h3>{this.props.title}</h3>
        <div className={styles.icon__container}>
          <FontAwesomeIcon icon={this.props.icon} size="2x" className={styles.icon} style={this.props.iconStyle} />
        </div>
        <div className={styles.services__dropbox}>
          {this.props.text}
        </div>
      </div>
    )
  }
}