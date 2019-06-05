import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import ContactPropertyCard from './ContactPropertyCard'
import ContactsApiAxiosService from '../../services/axios/contactsApiService/ContactsApiAxiosService'

class ContactCard extends Component {

    constructor() {
        super();
        this.state = {
            typedEmail: '',
            typedPhoneNumber: null,
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
            this.forceUpdate();
        } catch (e) {

        }
    };

    addElement = async (callback, values, elementName) => {
        try {
            const response = await callback(values);
            this.props.contact[elementName].push(response.data);
            this.forceUpdate();
        } catch (e) {

        }
    };

    addEmail = () => {
        this.addElement(ContactsApiAxiosService.addEmail, {
            address: this.state.typedEmailValue,
            person: this.props.contact.id
        }, 'emails');
    };

    addPhone = () => {
        this.addElement(ContactsApiAxiosService.addPhone, {
            number: this.state.typedPhoneNumber,
            person: this.props.contact.id
        }, 'phones');
    };

    setTypedEmailValue = event => {
        this.setState({...this.state, typedEmailValue: event.target.value});
    };

    setTypedPhoneNumberValue = event => {
        this.setState({...this.state, typedPhoneNumber: event.target.value});
        console.log(this.state)
    };

    deleteContact = async () => {
        try {
            await ContactsApiAxiosService.deleteContact(this.props.contact.id);
            this.setState({...this.state, shouldBeRendered: false});
        } catch (e) {

        }
    };

    render() {
        const {first_name, second_name, emails, phones, id} = this.props.contact;
        const shouldBeRendered = this.state.shouldBeRendered;
        return (
            <div className={shouldBeRendered ? 'card m-2 p-1 w-100' : ''}>
                {
                    shouldBeRendered ?
                        <div>
                            <div className="bg-light-blue dib br3 pa3 ma2  dim bw2 shadow-3">
                                <div className="tc">
                                    <h2>{first_name}</h2>
                                    <p>{second_name}</p>
                                    <Link to={`/edit/${id}`}>
                                        <button className="btn btn-primary">Edit contact</button>
                                    </Link>
                                    <div>
                                        <div>
                                            <p>Emails:</p>
                                            {emails.length ? emails.map((email) => <ContactPropertyCard key={email.id}
                                                                                                        id={email.id}
                                                                                                        value={email.address}
                                                                                                        deleteHandler={this.deleteEmail}/>) :

                                                <p className="mb-2">Not added yet</p>}
                                            <input type="text" onChange={this.setTypedEmailValue}/>
                                            <button className="btn btn-sm btn-outline-primary"
                                                    onClick={this.addEmail}>Save
                                            </button>
                                        </div>
                                        <div>
                                            <p>Phone numbers:</p>
                                            {phones.length ? phones.map((phone) => <ContactPropertyCard key={phone.id}
                                                                                                        id={phone.id}
                                                                                                        value={phone.number}
                                                                                                        deleteHandler={this.deletePhone}/>) :
                                                <p className="mb-2">Not added yet</p>}
                                            <input type="text" onChange={this.setTypedPhoneNumberValue}/>
                                            <button className="btn btn-sm btn-outline-primary"
                                                    onClick={this.addPhone}>Save
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="btn btn-danger" onClick={this.deleteContact}>Delete contact
                                        </button>
                                    </div>
                                    <br/>
                                </div>
                            </div>
                        </div> : <div></div>
                }
            </div>
        );
    }
}

export default ContactCard