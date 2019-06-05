import React from 'react';

const Error = ({error}) => {
  return (
    error &&
    <div className="alert alert-danger">
      {<p>{error}</p>}
    </div>
  );
};

export default Error;
