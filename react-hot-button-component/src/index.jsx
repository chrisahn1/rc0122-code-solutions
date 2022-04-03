import React from 'react';
import ReactDOM from 'react-dom';
import HotButton from './hot-button';

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
    let button;
    if (clickCount < 3) {
      button = <HotButton onClick={this.handleClick} className="hot-button freeze" text="Hot Button" />;
    } else if (clickCount < 6) {
      button = <HotButton onClick={this.handleClick} className="hot-button cold" text="Hot Button" />;
    } else if (clickCount < 9) {
      button = <HotButton onClick={this.handleClick} className="hot-button cool" text="Hot Button" />;
    } else if (clickCount < 12) {
      button = <HotButton onClick={this.handleClick} className="hot-button tepid" text="Hot Button" />;
    } else if (clickCount < 15) {
      button = <HotButton onClick={this.handleClick} className="hot-button warm" text="Hot Button" />;
    } else if (clickCount < 18) {
      button = <HotButton onClick={this.handleClick} className="hot-button hot" text="Hot Button" />;
    } else {
      button = <HotButton onClick={this.handleClick} className="hot-button nuclear" text="Hot Button" />;
    }
    return button;
  }
}

ReactDOM.render(<ColorButton />, document.querySelector('#root'));
