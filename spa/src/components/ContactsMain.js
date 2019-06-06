import React from 'react';
import {Link, Route} from 'react-router-dom';

import ContactsList from './contactsList/ContactsList';
import CreatePerson from './person/CreatePerson';
import EditPerson from "./person/EditPerson";
import CreateEmail from './email/CreateEmail';
import CreatePhone from './phone/CreatePhone';

const ContactsMain = () => {
    return (
        <div>
            <Route exact path="/"
                   render={() =>
                       <div className="m-2 p-2">
                           <Link to="/add/person">
                               <button className="btn btn-primary">Add new contact</button>
                           </Link>
                           <ContactsList/>
                       </div>}/>
            <Route exact path="/add/person" component={CreatePerson}/>
            <Route exact path="/edit/:id" component={EditPerson}/>
            <Route exact path="/add/email/:personId" component={CreateEmail}/>
            <Route exact path="/add/phone/:personId" component={CreatePhone}/>
        </div>
    )
};

export default ContactsMain;