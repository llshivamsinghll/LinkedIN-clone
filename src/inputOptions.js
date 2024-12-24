import React from 'react';
import './inputOptions.css'

function InputOptions({ Icon, title, Color }) {
  return (
    <div className="inputOption">
      
      <Icon style={{ color: Color }} />
      
      <h4>{title}</h4>
    </div>
  );
}

export default InputOptions;
