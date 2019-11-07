import React from 'react';
import { version } from '../../../package.json';
import styles from './index.module.css';

export default class Footer extends React.Component {

  getFullYear = () => {
    var date = new Date();
    return date.getFullYear();
  }

  render() {
    return (
      <div className={styles.footer} style={this.props.style || {}}>
        <div>© {this.getFullYear()} Thiago Nemecek. All Rights Reserved. Version {version}</div>
      </div>
    )
  }
}