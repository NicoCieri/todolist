import React from 'react';
import classNames from 'classnames';
import './Field.scss';

function Field({ className, lighter, ...props }) {
  return (
    <input {...props} className={classNames(className, 'field', { lighter })} />
  );
}

export default Field;
