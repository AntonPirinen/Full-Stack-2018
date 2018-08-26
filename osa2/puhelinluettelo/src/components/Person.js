import React from 'react'
import DeleteButton from './DeleteButton'

var style = {
    margin: 'auto',
    width: '20%',
    float: 'left'
}

const Person = ({ person, removePerson }) => {
    return (
        <div>
            <div style={style}>{person.name} {person.number}</div>   
            <DeleteButton className="deleteButton" person={person} removePerson={removePerson}/>
         </div>
    )
}

export default Person