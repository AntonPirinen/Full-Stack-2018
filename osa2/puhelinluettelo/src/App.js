import React, { useState, useEffect } from 'react'
import FilterForm from './components/filterForm'
import PersonList from './components/PersonList'
import personService from './services/persons'
import Notification from './components/notification'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [filter, setFilter] = useState('')
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter] = useState('')
  const [ message, setMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  })

  const addPerson = (event) => {
    event.preventDefault()

    const personObject= {
      name: newName,
      number: newNumber
    }

    const samePerson = persons.find(person => person.name === personObject.name)

    //päivitetään vanhan henkilön numero
    if (samePerson 
    && personObject.number.length > 0
    && samePerson.number !== personObject.number
    ) {

      const updatedPerson = { ...samePerson, number: personObject.number}
      
      personService
      .update(updatedPerson.id, updatedPerson)
      .then(response => {
        const newPersons = persons.map(person => person.id !== updatedPerson.id ? person: response)
        setMessage(
          `Updated ${personObject.name}'s number.`
        )
        setTimeout(() => {
          setMessage(null)  
        }, 5000)
        setPersons(newPersons)
      })
      setNewName('')
      setNewNumber('')
      return
    }  

    //lisätään uusi henkilö
    if (persons.some(person => person.name === personObject.name)) {
      alert(personObject.name + ' is already added to phonebook')
    } else {
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setMessage(
            `Added '${personObject.name}'.`  
          )
          setTimeout(() => {
            setMessage(null)  
          }, 5000)
        })
      }
    setNewName('')
    setNewNumber('')
  }

  const deletePerson = (id) => {

    const deletablePerson = persons.find(person => person.id === id)

    personService
    .remove(id)
    .then(response => {
      console.log(response)
      personService.getAll()
      .then(persons => {
        setMessage(
          `Deleted ${deletablePerson.name}.`  
        )
        setTimeout(() => {
          setMessage(null)  
        }, 5000)
        setPersons(persons)
      })
    })
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    setNewFilter(event.target.value)
  }

// muodostetaan näkymä
  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={message}/>

      <FilterForm newFilter={newFilter} handleFilterChange={handleFilterChange}/>
      <h2>Add a person</h2>
      <form onSubmit={addPerson}>
        <div>
          name: 
          <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number:
          <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <PersonList persons={persons} filter={filter} remove={deletePerson}/>
    </div>
  )

  }

export default App