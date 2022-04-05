import React from 'react';

function ToggleSwitch(props) {
  return (<div onClick={props.onClick} className={props.className}></div>);
}

function BackColor(props) {
  return (<div className={props.className}>{props.text}</div>);
}

export { ToggleSwitch, BackColor };
