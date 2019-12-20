import React from 'react';
// import { Link } from "gatsby";
import scrollTo from 'gatsby-plugin-smoothscroll';
import styles from './index.module.css';

import Icon from 'components/Icon/index';
import logoHeader from 'images/home/logo-header.png';
import { sectionsList } from 'startup/sections-list/index';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnTop: true
    }
  }
  componentDidMount() {
    const checkScroll = () => {
      var y = window.scrollY;
      if (y !== 0 && this.state.isOnTop) {
        this.setState({ isOnTop: false })
      } else if (y === 0 && !this.state.isOnTop) {
        this.setState({ isOnTop: true })
      }
    }
    window.addEventListener("scroll", checkScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll");
  }
  renderMenu = () => {
    return sectionsList.map((section, i) => {
      return (
        <button className={styles.header__button} onClick={() => scrollTo("#"+section.value)}>
          {section.title}
        </button>
      )
    })
  }
  style = () => {
    if (this.state.isOnTop) {
      return {
        backgroundColor: "rgba(0, 0, 0, 0)"
      }
    } else {
      return {
        backgroundColor: "rgba(0, 0, 0, 0.8)"
      }
    }
  }

  render() {
    return (
      <>
        <div className={styles.header__container} style={this.style()}>
          <div className={styles.header}>
            <div className={styles.header__logo}>
              <img src={logoHeader}/>
            </div>
            <div className={styles.header__menuWrapper}>
              <div className={styles.header__bars}>
                <Icon icon="bars"/>
              </div>
              <nav className={styles.header__menu}>
                {this.renderMenu()}
              </nav>
            </div>
            <div className={styles.header__name}>
              <h4>Thiago Nemecek</h4>
            </div>
          </div>
        </div>
      </>
    )
  }
}