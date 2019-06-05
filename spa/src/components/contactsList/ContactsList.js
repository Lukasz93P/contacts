import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import ContactCard from '../contactDetails/ContactCard'
import {getContactsList} from "../../actions/contactsListActions";

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

    search = () => {
        this.props.dispatch(getContactsList(this.state.searchParams));
    };

    changeSearchParamValue = event => {
        const searchParams = this.state.searchParams;
        searchParams[event.target.name] = event.target.value;
        this.setState({...this.state, searchParams: searchParams});
    };

    render = () => {
        return (
            <div className="container row justify-content-around mx-auto my-2 p-2">
                    <input type="text" name="first_name" placeholder="First name" onChange={this.changeSearchParamValue}/>
                    <input type="text" name="second_name" placeholder="Second name" onChange={this.changeSearchParamValue}/>
                    <input type="text" name="address" placeholder="Email" onChange={this.changeSearchParamValue}/>
                    <input type="text" name="number" placeholder="Phone number" onChange={this.changeSearchParamValue}/>
                    <button className="btn btn-primary btn-sm" onClick={this.search}>Search</button>
                {this.props.contacts.map((contact, index) => <ContactCard key={index} contact={contact}/>)}
            </div>)
    }
}

function mapStateToProps(state) {
    const {data, error} = state.contactsList;
    return {
        contacts: data,
        error,
    };
}

export default connect(mapStateToProps)(withRouter(ContactsList))