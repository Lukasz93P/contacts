import React from 'react';
import {Link, Route} from 'react-router-dom';

import ContactsList from './contactsList/ContactsList';
import CreatePerson from './person/CreatePerson';
import EditPerson from "./person/EditPerson";

const ContactsMain = () => {
    return (
        <div>
            <Route exact path="/" render={() =>
                <div>
                    <Link to="/add">
                        <button className="btn btn-primary">Add new contact</button>
                    </Link>
                    <ContactsList/>
                </div>}/>
            <Route exact path="/add" component={CreatePerson}/>
            <Route
                exact
                path="/edit/:id"
                render={() => {
                    return <EditPerson/>;
                }}
            />
        </div>
    )
};

export default ContactsMain;