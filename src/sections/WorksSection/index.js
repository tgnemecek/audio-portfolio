import React from 'react';
import { workList } from 'startup/work-list/index';
import Filter from 'components/Filter/index';
import WorkBox from './WorkBox/index';
import styles from './index.module.css';
import WorkItem from './WorkItem/index';

export default class WorksSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "all",
      openWork: false
    }
    workList.forEach((work, i) => {
      work.index = i;
    })
  }

  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  }

  renderWorks = () => {
    var filtered = workList.filter((work) => {
      return work.visible;
    });
    return filtered.map((work, i, array) => {
      const openWork = () => {
        this.setState({ openWork: work.index });
      }
      return (
        <WorkItem
          key={i}
          filter={this.state.filter}
          index={i}
          length={array.length}
          onClick={openWork}
          {...work}/>
      )
    })
  }

  toggleBox = (value) => {
    var openWork;
    if (this.state.openWork !== false) {
      openWork = false;
    } else openWork = value;
    this.setState({ openWork });
  }

  renderWorkBox = () => {
    if (this.state.openWork === false) return null;
    var i = this.state.openWork;
    return (
      <WorkBox
        toggleBox={this.toggleBox}
        work={workList[i]}/>
    )
  }

  render() {
    return (
      <section id="works" className={styles.works}>
        <h2>Main Works</h2>
        <Filter
          value="all"
          label="All"
          currentFilter={this.state.filter}
          onClick={this.changeFilter}/>
        <Filter
          value="film"
          label="Films"
          currentFilter={this.state.filter}
          onClick={this.changeFilter}/>
        <Filter
          value="game"
          label="Games"
          currentFilter={this.state.filter}
          onClick={this.changeFilter}/>
        <div className={styles.works__grid}>
          {this.renderWorks()}
        </div>
        {this.renderWorkBox()}
      </section>
    )
  }
}