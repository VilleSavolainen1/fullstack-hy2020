import React from 'react';
import './notification.css';

const Notification = ({message, setNotification}) => {
    if(message === null){
        return null;
    }
    setTimeout(() => {
        setNotification(null)
    }, 3000)

    return (
        <div className="message">
            {message}
        </div>
    )
}

export default Notification;