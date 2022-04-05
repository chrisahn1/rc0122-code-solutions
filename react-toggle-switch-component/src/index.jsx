import React from 'react';
import ReactDOM from 'react-dom';
import { ToggleSwitch, BackColor } from './toggle-switch';

class SwitchButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isOn: !this.state.isOn });
  }

  render() {
    let switchedButton;
    let backClass;
    if (this.state.isOn) {
      switchedButton = <ToggleSwitch onClick={this.handleClick} className="switch off" />;
      backClass = 'back on';
    } else {
      switchedButton = <ToggleSwitch onClick={this.handleClick} className="switch on" />;
      backClass = 'back off';
    }
    return (<BackColor className={backClass} text={switchedButton}/>);
  }
}

ReactDOM.render(<SwitchButton />, document.querySelector('#root'));
