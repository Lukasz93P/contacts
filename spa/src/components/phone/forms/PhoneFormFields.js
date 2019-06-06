import React from 'react';
import {Field} from "redux-form";

import {ReduxFormInputInput} from "../../common/ReduxFormInputInput";
import {minimumDigits7, required} from "../../common/validators";

export default () =>
    <div>
        <Field
            name="number"
            type="number"
            placeholder="Number"
            className="form-control"
            component={ReduxFormInputInput}
            label="Number"
            validate={[required, minimumDigits7]}
        />
    </div>
