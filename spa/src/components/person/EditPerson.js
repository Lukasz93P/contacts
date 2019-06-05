import React, {Component} from 'react';
import UserForm from './forms/PersonForm';
import * as actions from '../../actions/persons/index';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class EditPerson extends Component {
    constructor() {
        super();
        this.state = {
            person: null,
        };
    }

    componentDidMount = async () => {
        const id = this.props.match.params.id;
        try {
            this.setState({person: await this.props.dispatch(actions.fetchPerson(id))});
        } catch (error) {
        }
    };

    onFormSubmit = async values => {
        // const {showToast} = this.props;
        const id = this.props.match.params.id;
        try {
            await this.props.dispatch(actions.updatePerson(id, values));
            this.props.history.push('/');
            // showToast(`User ${user.name} successfully edited`, true);
        } catch (error) {
            // showToast(error, false);
        }
    };

    render() {
        const {onFormSubmit} = this;
        return (
            <div className="row justify-content-center p-5 m-5">
                <h1 className="col-12">Edit user</h1>
                <div className="col-md-6 mt-3">
                    <UserForm onFormSubmit={onFormSubmit}/>
                </div>
            </div>
        );
    }
}

export default connect()(withRouter(EditPerson));
