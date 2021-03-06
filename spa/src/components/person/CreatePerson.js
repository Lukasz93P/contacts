import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';

import PersonForm from './forms/PersonForm';
import * as actions from '../../actions/persons/index';
import {showMessage} from "../../utils/messages/showMessage";

class CreatePerson extends Component {
    onFormSubmit = async values => {
        try {
            const person = await this.props.dispatch(actions.createPerson(values));
            this.props.history.push('/');
            showMessage(`Person ${person.first_name} successfully created`, true);
        } catch (error) {
            showMessage('That person already exists', false);
        }
    };

    render() {
        const {onFormSubmit} = this;
        return (
            <div className="row justify-content-center p-5 m-5">
                <h1 className="col-12">Create new person</h1>
                <div className="col-md-6 mt-3">
                    <PersonForm onFormSubmit={onFormSubmit}/>
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

export default connect()(withRouter(CreatePerson));
