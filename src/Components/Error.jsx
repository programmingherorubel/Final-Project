import React from 'react';

const Error = ({errorTitle}) => {
    return (
        <div>
            <h3 className='text-2xl text-center'>{errorTitle}</h3>
        </div>
    );
};

export default Error;