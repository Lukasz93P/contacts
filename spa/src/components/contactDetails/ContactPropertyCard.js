import React from 'react';

const ContactProperty = ({value, id, editHandler, deleteHandler}) => {
    return (
        <div>
            <div className='card my-2 p-1 w-50 mx-auto'>
                <div className="bg-light-blue dib br3 pa3 ma2  dim bw2 shadow-3">
                    <div className="tc">
                        <div><p>{value}</p>
                            <button className="btn btn-danger bg-light-purple btn-sm dim grow br3"
                                    onClick={() => deleteHandler(id)}>
                                Delete
                            </button>
                        </div>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ContactProperty;