import React from 'react';
import {Field} from "redux-form";

import {ReduxFormInputInput} from "../../common/ReduxFormInputInput";
import {minLength2, required} from "../../common/validators";

export default () =>
    <div>
        <Field
            name="first_name"
            type="text"
            placeholder="First name"
            className="form-control"
            component={ReduxFormInputInput}
            label="First name"
            validate={[required, minLength2]}
        />
        <Field
            name="second_name"
            type="text"
            placeholder="Second username"
            className="form-control"
            component={ReduxFormInputInput}
            label="Second name"
            validate={[minLength2, required
            ]
            }
        />
    </div>
