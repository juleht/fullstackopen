import { useState, useEffect } from 'react'
import PersonToShow from './components/Person'
import { Header } from './components/Parts'
import { FilterFrom, SubmitForm } from './components/Form'
import axios from 'axios'
import personService from './services/persons'
 
const App = (props) => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showPerson, setShowPerson] = useState('')
  const personsToShow = persons.filter(person => new RegExp(showPerson, 'i').test(person.name))

  useEffect(() => {
    personService
    .getAll()
    .then(response => {
      setPersons(response.data)
    })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }
    if (persons.some((x) => x.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      personService
      .create(personObject)
      .then(response => {
        console.log(response)
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
      })
    }
    console.log('button clicked', event.target)
  }


  const handleAddNewPerson = (event) => {
    console.log('button clikked', event.target.value)
    setNewName(event.target.value)
  }

  const handleAddNewNumber = (event) => {
    console.log('button clikked', event.target.value)
    setNewNumber(event.target.value)
  }

  const handleShowhPerson = (event) => {
    setShowPerson(event.target.value)
  }
  return (
    <div>
      <Header header={'Phonebook'} />
      <FilterFrom value={showPerson} onChange={handleShowhPerson} />
      <Header header={'add a new'} />
      <SubmitForm addPerson={addPerson} newName={newName} handleAddNewPerson={handleAddNewPerson} newNumber={newNumber} handleAddNewNumber={handleAddNewNumber} />
      <Header header={'Numbers'} />
      <PersonToShow personsToShow={personsToShow} />
      <div>debug: {newName}</div>
    </div>

  )

}
export default App