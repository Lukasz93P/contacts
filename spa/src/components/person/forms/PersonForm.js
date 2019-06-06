import React from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';

import StandardForm from '../../common/forms/StandardForm';
import PersonFormFields from './PersonFormFields';

let PersonForm = props => <StandardForm {...props} FormFields={PersonFormFields}/>;

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
