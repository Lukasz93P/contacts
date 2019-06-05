import React from 'react';

export const input = ({
  input,
  label,
  type,
  className,
  symbol,
  meta: {touched, error, warning},
}) => (
  <div className="form-group">
    <label>{label}</label>
    <div className="input-group">
      {symbol &&
        <div className="input-group-prepend">
          <div className="input-group-text">{symbol}</div>
        </div>}
      <input {...input} className={className} type={type} />
    </div>
    {touched && (error && <div className="alert alert-danger">{error}</div>)}
  </div>
);
