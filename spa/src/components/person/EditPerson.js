import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';

import PersonForm from './forms/PersonForm';
import * as actions from '../../actions/persons/index';
import {showMessage} from "../../utils/messages/showMessage";

class EditPerson extends Component {
    constructor() {
        super();
        this.state = {
            person: null,
        };
    }

    componentDidMount = async () => {
        try {
            this.setState({person: await this.props.dispatch(actions.fetchPerson(this.props.match.params.id))});
        } catch (error) {
            showMessage('Requested persons doesn\'t seem to be existing')
        }
    };

    onFormSubmit = async values => {
        try {
            await this.props.dispatch(actions.updatePerson(this.props.match.params.id, values));
            this.props.history.push('/');
            showMessage(`Person successfully updated`);
        } catch (error) {
            showMessage('Person with that first and second name already exists', false);
        }
    };

    render() {
        const {onFormSubmit} = this;
        return (
            <div className="row justify-content-center p-5 m-5">
                <h1 className="col-12">Edit person</h1>
                <div className="col-md-6 mt-2">
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

export default connect()(withRouter(EditPerson));
