import React from 'react';

export const BootstrapInput = ({
                                   input,
                                   label,
                                   type,
                                   className,
                                   symbol,
                                   onChange,
                                   name,
                               }) => (
    <div className="form-group m-3">
        <label>{label}</label>
        <div className="input-group">
            {symbol &&
            <div className="input-group-prepend">
                <div className="input-group-text">{symbol}</div>
            </div>}
            {onChange === undefined ?
                <input {...input} className={className ? className : 'form-control'} type={type} name={name}/>
                :
                <input {...input} className={className ? className : 'form-control'} type={type} onChange={onChange}
                       name={name}/>}
        </div>
    </div>
);