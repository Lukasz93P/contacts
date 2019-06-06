import React from 'react';

import {BootstrapInput} from "./BootstrapInput";

export const ReduxFormInputInput = ({
                                        input,
                                        label,
                                        type,
                                        className,
                                        symbol,
                                        meta: {touched, error, warning},
                                    }) => (
    <div className="form-group">
        <BootstrapInput input={input} label={label} type={type} className={className} symbol={symbol}/>
        {touched && (error && <div className="alert alert-danger">{error}</div>)}
    </div>
);
