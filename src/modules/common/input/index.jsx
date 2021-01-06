import React from 'react';
import './input.styles.scss';
import PropTypes from 'prop-types';
import { ngIf } from '../../../utils';

export const Input = (props) => {
  return (
    <span className="input-box">
      {ngIf(props.label, <label className="mb-2">{props.label}</label>)}
      <input
        type={props.type}
        placeholder={props.placeholder}
        onInput={props.onInput}
        defaultValue={props.value}
        className="mb-2"
      />
    </span>
  )
};

Input.propTypes = {
  label: PropTypes.label,
  value: PropTypes.value,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onInput: PropTypes.func
};

Input.defaultProps = {
  value: null,
  type: 'text',
  placeholder: '',
  onInput: () => {}
};
