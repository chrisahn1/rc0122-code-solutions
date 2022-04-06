import React from 'react';
import ReactDOM from 'react-dom';
import HotButton from './index';

class ColorButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    const clickCount = this.state.count;
    let btnClass;
    if (clickCount < 3) {
      btnClass = 'freeze';
    } else if (clickCount < 6) {
      btnClass = 'cold';
    } else if (clickCount < 9) {
      btnClass = 'cool';
    } else if (clickCount < 12) {
      btnClass = 'tepid';
    } else if (clickCount < 15) {
      btnClass = 'warm';
    } else if (clickCount < 18) {
      btnClass = 'hot';
    } else {
      btnClass = 'nuclear';
    }
    return <HotButton onClick={this.handleClick} className={`hot-button ${btnClass}`} text="Hot Button" />;
  }
}

ReactDOM.render(<ColorButton />, document.querySelector('#root'));
