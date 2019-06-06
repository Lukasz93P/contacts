import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import ContactPropertyCard from './ContactPropertyCard';
import ContactsApiAxiosService from '../../services/axios/contactsApiService/ContactsApiAxiosService';
import {showMessage} from "../../utils/messages/showMessage";

class ContactCard extends Component {

    constructor() {
        super();
        this.state = {
            shouldBeRendered: true,
        }
    }

    deleteEmail = id => {
        this.deleteElement(ContactsApiAxiosService.deleteEmail, id, 'emails');
    };

    deletePhone = id => {
        this.deleteElement(ContactsApiAxiosService.deletePhone, id, 'phones');
    };

    deleteElement = async (callback, id, elementName) => {
        const elements = this.props.contact[elementName];
        try {
            await callback(id);
            this.props.contact[elementName] = elements.filter(element => element.id !== id);
            showMessage('Element successfully deleted');
            this.forceUpdate();
        } catch (e) {
            showMessage('Operation failed', false);
        }
    };

    deleteContact = async () => {
        try {
            await ContactsApiAxiosService.deleteContact(this.props.contact.id);
            showMessage('Person successfully deleted');
            this.setState({...this.state, shouldBeRendered: false});
        } catch (e) {
            showMessage('Person with assigned emails or phone numbers cannot be deleted', false);
        }
    };

    render() {
        const {first_name, second_name, emails, phones, id} = this.props.contact;

        return (
            this.state.shouldBeRendered ?
                <div className='card m-3 p-3 w-100'>
                    <div>
                        <div className="row p-2">
                            <button className="btn btn-danger btn-sm m-2"
                                    onClick={this.deleteContact}>Delete
                            </button>
                            <Link to={`/edit/${id}`}>
                                <button className="btn btn-primary btn-sm m-2">Edit</button>
                            </Link>
                            <Link to={`/add/email/${id}`}>
                                <button className="btn btn-primary btn-sm m-2">Add new email</button>
                            </Link>
                            <Link to={`/add/phone/${id}`}>
                                <button className="btn btn-primary btn-sm m-2">Add new phone number</button>
                            </Link>
                        </div>
                        <div className="tc">
                            <p className="display-4">First name: {first_name}</p>
                            <p className="display-4">Second name: {second_name}</p>
                            <div>
                                <div className="m-2 p-2">
                                    <span>Emails:</span>
                                    {emails.length ? emails.map((email) => <ContactPropertyCard key={email.id}
                                                                                                id={email.id}
                                                                                                value={email.address}
                                                                                                deleteHandler={this.deleteEmail}/>) :

                                        <span> not added yet</span>}
                                </div>
                                <div className="m-2 p-2">
                                    <span>Phone numbers:</span>
                                    {phones.length ? phones.map((phone) => <ContactPropertyCard key={phone.id}
                                                                                                id={phone.id}
                                                                                                value={phone.number}
                                                                                                deleteHandler={this.deletePhone}/>) :
                                        <span> not added yet</span>}
                                </div>
                            </div>
                            <br/>
                        </div>
                    </div>
                </div>
                : ''
        );
    }
}

export default ContactCard