import React from 'react';
import Modal from 'react-modal';
import styles from './index.module.css';
import Icon from 'components/Icon/index';

export default class Box extends React.Component {
  componentDidMount() {
    document.body.style.overflowY = "hidden";
    document.body.style.paddingRight = "15px";
  }
  componentWillUnmount() {
    document.body.style.overflowY = "auto";
    document.body.style.paddingRight = "0";
  }
  className = () => {
    var result = styles.box + " ";
    if (this.props.className) {
      result += this.props.className;
    }
    return result;
  }
  renderCloseButton = () => {
    if (!this.props.closeBox) return null;
    return (
      <div className={styles.box__closeButton}>
        <Icon onClick={this.props.closeBox} icon="not" />
      </div>
    )
  }
  render() {
    return (
      <Modal
        isOpen={true}
        contentLabel={this.props.title || "Box"}
        appElement={document.body}
        onRequestClose={this.props.closeBox}
        overlayClassName={styles.box__overlay}
        className={this.className()}>

        {this.renderCloseButton()}
        {this.props.children}

      </Modal>
    )
  }
}