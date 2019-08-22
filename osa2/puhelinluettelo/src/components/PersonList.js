import React from 'react'
import Person from './Person'
 
 
 // muodostetaan lista henkilöistä
  const PersonList = ({ persons, filter }) => {

    return (
      <div>
        {persons.filter(person => person.name.toUpperCase().includes(filter.toUpperCase()))
                .map(person=> <Person key={person.name} person={person}/>)  
        }
      </div>
    )
  }

export default PersonList
