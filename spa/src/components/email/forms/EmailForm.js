import React from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';

import StandardForm from '../../common/forms/StandardForm';
import EmailFormFields from './EmailFormFields';

let EmailForm = props => <StandardForm {...props} FormFields={EmailFormFields}/>;

EmailForm = reduxForm({
    form: 'EmailForm', // a unique identifier for this form
    enableReinitialize: true,
})(EmailForm);

function mapStateToProps(state) {
    if (state.email)
        return {
            initialValues: state.email.data,
        };
    return {};
}

export default connect(mapStateToProps)(EmailForm);
