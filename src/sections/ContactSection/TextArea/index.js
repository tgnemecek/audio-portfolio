import React from 'react';

export default class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  componentDidMount() {
    this.setHeight(this.ref.current);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setHeight(this.ref.current);
    }
  }
  setHeight = (node) => {
    if (!this.props.manualHeight) {
      node.style.height = "5px";
      node.style.height = (node.scrollHeight)+"px";
    }
  }
  onChange = (e) => {
    if (e) {
      var value = e.target.value;
      var name = this.props.name;
      this.props.onChange({target: {value, name} });
    }
  }
  render() {
    return (
      <textarea
        name={this.props.name}
        ref={this.ref}
        value={this.props.value}
        onChange={this.onChange}/>
    )
  }
}