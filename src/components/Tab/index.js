import React from 'react';
import styles from './index.module.css';

export default class Tab extends React.Component {
  className = () => {
    var result = styles.tab + " ";
    if (this.props.order === 0) result += styles.tabFirst + " ";
    if (this.props.order === this.props.currentTab) {
      result += styles.tabActive;
    }
    return result;
  }
  render() {
    return (
      <button
        value={this.props.order}
        onClick={this.props.onClick}
        style={this.props.style || {}}
        className={this.className()}>
          {this.props.label}
      </button>
    )
  }
}