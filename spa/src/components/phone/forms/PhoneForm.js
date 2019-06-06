import React from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';

import StandardForm from '../../common/forms/StandardForm';
import PhoneFormFields from './PhoneFormFields';

let PhoneForm = props => <StandardForm {...props} FormFields={PhoneFormFields}/>;

PhoneForm = reduxForm({
    form: 'PhoneForm', // a unique identifier for this form
    enableReinitialize: true,
})(PhoneForm);

function mapStateToProps(state) {
    if (state.phone)
        return {
            initialValues: state.phone.data,
        };
    return {};
}

export default connect(mapStateToProps)(PhoneForm);
