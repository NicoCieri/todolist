import React from 'react';
import classNames from 'classnames';
import './Button.scss';

function Button({ className, lighter, text, ...props }) {
  return (
    <button {...props} className={classNames(className, 'button', { lighter })}>
      {text}
    </button>
  );
}

export default Button;
