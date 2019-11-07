import React from 'react';
import styles from './index.module.css';

export default class Block extends React.Component {

  renderBlocks = () => {
    // Initial return condition
    if (!this.props.children) return null;
    var options = this.props.options;
    var className = styles.block;
    // If there's only one child, React takes it off the array, this is to fix that
    if (!Array.isArray(this.props.children)) {
      var style = {width: "100%"};
      return <div className={className} style={style}>{this.props.children}</div>;
    }
    // If this.props.children's last row is incomplete, adds new empty elements
    var children = this.props.children;
    if (this.props.populateChildren) children = populateChildren(this.props.children, this.props.columns, this.props.options);
    function populateChildren(children, columns, options) {
      if (children.length % columns === 0 && !options) return children;

      var newChildren = [];
      var floor = Math.floor(children / columns);
      var lastRowFilled = children - (floor * columns);
      var spacesToBeFilled = columns - lastRowFilled;

      // This is to consider the case where there are less children than columns
      if (children.length < columns) spacesToBeFilled = columns - children;

      var emptyRow = <div></div>;

      for (var i = 0; i < spacesToBeFilled; i++) {
        newChildren.push(emptyRow);
      }
      return children.concat(newChildren);
    }

    // Main function
    return children.map((child, i, array) => {
      var style = {width: (1 / this.props.columns * 100) + "%"};
      if (options) {
        for (var j = 0; j < options.length; j++) {
          if (options[j].block === i) {
            style = {width: (1 / this.props.columns * 100 * options[j].span) + "%"}
            if (options[j].style) style = {...style, ...options[j].style};
            if (options[j].className) className = className + " " + options[j].className;
          }
        }
      }
      return <div key={i} className={className} style={style}>{child}</div>
    })
  }

  render () {
    return (
      <div className={styles.block__parent} style={this.props.style}>
        {this.props.title ? <h4>{this.props.title}</h4> : null}
        {this.renderBlocks()}
      </div>
    )
  }
}