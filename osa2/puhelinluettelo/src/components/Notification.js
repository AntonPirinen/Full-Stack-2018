import React from 'react'

var notificationStyle = {
    color: 'white',
    background: 'green',
    fontSize: '20px',
    padding: '15px',
    width: '50%',
    margin: 'auto',
    marginBottom: '50px',
    textAlign: 'center'
}

const Notification = ({ message }) => {
    if (message === null) {
        return null
    }
    return (
        <div style={notificationStyle}>
            {message}
        </div>
    )
}

export default Notification