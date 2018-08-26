import React from 'react'

var buttonStyle = {
    textAlign: 'left'
}

const DeleteButton = ({ person, removePerson }) => {
    return (
        <div style={buttonStyle}>
            <button onClick={removePerson(person.id)}>poista</button>
        </div>   
    )
}

export default DeleteButton