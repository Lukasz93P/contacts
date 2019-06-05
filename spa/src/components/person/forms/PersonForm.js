import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {required, minLength2} from '../../common/validators';
import {input} from '../../common/input';
import {connect} from 'react-redux';

let PersonForm = props => {
    const {
        onFormSubmit,
        valid,
        handleSubmit,
        pristine,
        reset,
        submitting,
    } = props;
    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>

            <Field
                name="first_name"
                type="text"
                placeholder="First name"
                className="form-control"
                component={input}
                label="First name"
                validate={required}
            />

            <Field
                name="second_name"
                type="text"
                placeholder="Second username"
                className="form-control"
                component={input}
                label="Second name"
                validate={[minLength2, required]}
            />

            <button
                type="submit"
                className="btn btn-primary"
                disabled={!valid || pristine || submitting}
            >
                Submit
            </button>

        </form>
    );
};

PersonForm = reduxForm({
    form: 'PersonForm', // a unique identifier for this form
    enableReinitialize: true,
})(PersonForm);

function mapStateToProps(state) {
    if (state.person.data)
        return {
            initialValues: state.person.data,
        };
    return {};
}

export default connect(mapStateToProps)(PersonForm);
