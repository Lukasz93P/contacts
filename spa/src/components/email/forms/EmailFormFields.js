import React from 'react';
import {Field} from "redux-form";

import {ReduxFormInputInput} from "../../common/ReduxFormInputInput";
import {email, minLength5, required} from "../../common/validators";

export default () =>
    <div>
        <Field
            name="address"
            type="text"
            placeholder="Address"
            className="form-control"
            component={ReduxFormInputInput}
            label="Address"
            validate={[email, minLength5, required]}
        />
    </div>
