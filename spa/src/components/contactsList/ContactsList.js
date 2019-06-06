import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import ContactCard from '../contactDetails/ContactCard'
import {getContactsList} from "../../actions/contactsListActions";
import {BootstrapInput} from '../common/BootstrapInput';

class ContactsList extends Component {
    constructor() {
        super();
        this.state = {
            searchParams: {
                first_name: null,
                second_name: null,
                address: null,
                number: null,
            }
        }
    }

    componentDidMount = () => {
        this.props.dispatch(getContactsList())
    };

    search = event => {
        this.changeSearchParamValue(event);
        this.props.dispatch(getContactsList(this.state.searchParams));
    };

    changeSearchParamValue = event => {
        const searchParams = this.state.searchParams;
        searchParams[event.target.getAttribute('name')] = event.target.value;
        this.setState({...this.state, searchParams: searchParams});
    };

    render = () => {
        const {contacts, loaded} = this.props;
        return (
            <div className="container row justify-content-around mx-auto my-3 p-3">
                <BootstrapInput type="text" name="first_name" label="First name" onChange={this.search}/>
                <BootstrapInput type="text" name="second_name" label="Second name" onChange={this.search}/>
                <BootstrapInput type="text" name="address" label="Email" onChange={this.search}/>
                <BootstrapInput type="text" name="number" label="Phone number" onChange={this.search}/>
                {(!contacts.length && loaded) ?
                    <div className="row text-center m-3 p-3"><h2 className="display-2"> No contacts found</h2></div>
                    : contacts.map((contact, index) => <ContactCard key={index} contact={contact}/>)}
            </div>)
    }
}

function mapStateToProps(state) {
    const {data, error, loaded} = state.contactsList;
    return {
        contacts: data,
        error,
        loaded
    };
}

export default connect(mapStateToProps)(withRouter(ContactsList))