import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';

import PhoneForm from './forms/PhoneForm';
import * as actions from '../../actions/phones/index';
import {showMessage} from "../../utils/messages/showMessage";

class CreatePhone extends Component {
    onFormSubmit = async values => {
        try {
            console.log(values);
            await this.props.dispatch(actions.createPhone({...values, person: this.props.match.params.personId}));
            this.props.history.push('/');
            showMessage('Phone number successfully added', true);
        } catch (error) {
            showMessage('That phone number already exists', false);
        }
    };

    render() {
        const {onFormSubmit} = this;
        return (
            <div className="row justify-content-center p-5 m-5">
                <h1 className="col-12">Add new phone number</h1>
                <div className="col-md-6 mt-3">
                    <PhoneForm onFormSubmit={onFormSubmit}/>
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

export default connect()(withRouter(CreatePhone));
