import React from 'react'
import PersonList from './components/PersonList'
import AddPerson from './components/AddPerson'
import personService from './services/persons'
import Notification from './components/Notification'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [
            ],
            newName: '',
            newNumber: '',
            newFilter: '',
            status: null
        }
    }

    componentDidMount() {
        personService
        .getAll()
        .then(response =>{
            this.setState({
                persons: response
            })
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const personObject = {
            name: this.state.newName, 
            number: this.state.newNumber
        }

        const samePersons = this.state.persons.some(person => person.name === this.state.newName)
        const samePerson = this.state.persons.find(person => person.name === this.state.newName)

        //lisätään uusi henkilö
        if (samePersons === false) {
            personService
            .create(personObject)
            .then(response => {
                this.setState ({
                    persons: this.state.persons.concat(response),
                    newName: '',
                    newNumber:'',
                    status: `Henkilön ${personObject.name} lisäys onnistui`
                })
                setTimeout(() => {
                    this.setState({status: null})
                }, 3000)
            })
        }

        //päivitetään vanhan henkilön numero
        if (samePersons === true && this.state.newNumber.length > 0) {

            const personObject = { ...samePerson, number: this.state.newNumber }

            personService
            .update(personObject.id, personObject)
            .then(response => {
                const persons = this.state.persons.map(person => person.id !== personObject.id ? person: response)
                this.setState ({
                    persons,
                    newName: '',
                    newNumber:'',
                    status: `Henkilön ${personObject.name} puhelinnumeron päivitys onnistui`
                })
                setTimeout(() => {
                    this.setState({status: null})
                }, 3000)
            })
        }

        this.setState ({
            newName: '',
            newNumber:''
        })
    }

    //poistetaan henkilö
    removePerson = (id) => {
        const removedPerson = this.state.persons.find(person => person.id === id)

        return () => {
            personService
            .remove(id)
            .then(response => {
                console.log(response)
                personService.getAll()
                .then(response => {
                    this.setState ({
                        persons: response,
                        status: `Henkilön ${removedPerson.name} poistaminen onnistui`
                    })
                    setTimeout(() => {
                        this.setState({status: null})
                    }, 3000)
                })
            })
            .catch(error => {
                console.log('fail')
            })
        }
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
        <div>
            <h2>Puhelinluettelo</h2>
            <Notification message={this.state.status}/>
            <div>
                rajaa näytettäviä: <input 
                                        name='newFilter'
                                        value={this.state.newFilter}
                                        onChange={this.handleInput}/>
            </div>
            <AddPerson handleSubmit={this.handleSubmit} handleInput={this.handleInput} state={this.state}/>
            <h2>Numerot</h2>
            <PersonList
                className='list' 
                persons={this.state.persons}
                filter={this.state.newFilter}
                removePerson={this.removePerson}/>
      </div>
    )
  }
}

export default App

