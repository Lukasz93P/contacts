import React, {Component} from 'react';
import PersonForm from './forms/PersonForm';
import * as actions from '../../actions/persons/index';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class CreatePerson extends Component {
    componentDidMount() {
        this.props.dispatch(actions.fetchPerson());
    }

    onFormSubmit = async values => {
        // const {showToast} = this.props;
        try {
            const person = await this.props.dispatch(actions.createPerson(values));
            console.log(person);
            this.props.history.push('/');
            // showToast(`User ${user.name} successfully created`, true);
        } catch (error) {
            // showToast(error, false);
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
            </div>
        );
    }
}

export default connect()(withRouter(CreatePerson));
