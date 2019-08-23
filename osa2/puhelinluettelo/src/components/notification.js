import React from 'react'

var notificationStylePositive = {
    color: 'green',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px'
  }

  var notificationStyleNegative = {
    color: 'green',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px'
  }

const Notification = ({ message, type }) => {
    if (message === null) {
        return null
    } else if (type === 'fail') {
        return (
            <div style={notificationStyleNegative}>
              {message}
            </div>
          )
    }
    return (
      <div style={notificationStylePositive}>
        {message}
      </div>
    )
  }

  export default Notification