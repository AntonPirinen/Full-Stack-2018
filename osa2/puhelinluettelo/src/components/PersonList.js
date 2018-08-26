import React from 'react'
import Person from './Person'

const List = ({ persons, filter, removePerson }) => {
    return (
        <div>
            {persons.map(person => <Person key={person.name} person={person} removePerson={removePerson}/>)
                    .filter(row => row.key.toUpperCase().includes(filter.toUpperCase()))}   
        </div>
    )
}

export default List