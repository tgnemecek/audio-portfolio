import React from 'react';
import styles from './index.module.css';

export default class Filter extends React.Component {
  className = () => {
    var result = styles.filter + " ";
    if (this.props.value === this.props.currentFilter) {
      result += styles.filterActive;
    }
    return result;
  }
  render() {
    return (
      <button
        value={this.props.value}
        onClick={this.props.onClick}
        style={this.props.style || {}}
        className={this.className()}>
          {this.props.label}
      </button>
    )
  }
}