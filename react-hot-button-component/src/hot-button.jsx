import React from 'react';

function HotButton(props) {
  return (<button onClick={props.onClick} className={props.className }>{props.text}</button >);
}

export default HotButton;
