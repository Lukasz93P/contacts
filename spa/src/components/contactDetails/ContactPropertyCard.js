import React, {Component} from 'react';

import ConfirmationModal from '../common/ConfirmationModal';

class ContactPropertyCard extends Component {
    constructor() {
        super();
        this.state = {
            confirmationModalOpen: false,
            visible: true,
        };
    }

    rejectConfirmation = () => {
        this.setState({...this.state, confirmationModalOpen: false});
    };

    openConfirmationModal = () => {
        this.setState({...this.state, confirmationModalOpen: true});
    };

    render() {
        const {value, id, deleteHandler} = this.props;
        const {rejectConfirmation, openConfirmationModal} = this;
        return (
            <div>
                <div className='card my-2 p-1 w-50 mx-auto'>
                    <div><span>{value}</span>
                        <button className="btn btn-danger btn-sm m-2"
                                onClick={openConfirmationModal}>
                            Delete
                        </button>
                    </div>
                    <br/>
                </div>
                <ConfirmationModal
                    open={this.state.confirmationModalOpen}
                    close={rejectConfirmation}
                    onConfirm={() => deleteHandler(id)}
                    message="Delete this element"
                />
            </div>
        );
    }
}

export default ContactPropertyCard;
