import React from 'react';
import './error.css';

const Error = ({error, setError}) => {
    if(error === null){
        return null;
    }

    setTimeout(() => {
        setError(null)
    }, 3000)

    return (
        <div className="errorMessage">
            {error}
        </div>
    )
}

export default Error;