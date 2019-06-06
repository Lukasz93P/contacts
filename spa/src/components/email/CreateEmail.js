import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';

import EmailForm from './forms/EmailForm';
import * as actions from '../../actions/emails/index';
import {showMessage} from "../../utils/messages/showMessage";

class CreateEmail extends Component {
    onFormSubmit = async values => {
        try {
            await this.props.dispatch(actions.createEmail({...values, person: this.props.match.params.personId}));
            this.props.history.push('/');
            showMessage('Email successfully added', true);
        } catch (error) {
            showMessage('That email already exists', false);
        }
    };

    render() {
        const {onFormSubmit} = this;
        return (
            <div className="row justify-content-center p-5 m-5">
                <h1 className="col-12">Add new email address</h1>
                <div className="col-md-6 mt-3">
                    <EmailForm onFormSubmit={onFormSubmit}/>
                </div>
                <div className="w-100 text-center m-2 p-2">
                    <Link to="/">
                        <button className="btn btn-sm btn-secondary">Go back</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default connect()(withRouter(CreateEmail));
