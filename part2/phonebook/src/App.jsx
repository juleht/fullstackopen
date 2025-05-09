import { useState, useEffect } from 'react'
import parts from './components/Parts'
import forms from './components/Form'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showPerson, setShowPerson] = useState('')
  const personsToShow = persons.filter(person => new RegExp(showPerson, 'i').test(person.name))

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])


  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }
    if (persons.some((x) => x.name === newName)) {
      const person = persons.find(p => p.name === newName)
      if (window.confirm(`${newName} already exists. Replace old number with a new one?`)) {
        const id = person.id
        const changedPerson = { ...person, number: newNumber }
        personService
          .update(id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
            setNewName('')
            setNewNumber('')
          })
      }
    } else {
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
    console.log('button clicked', event.target)
  }

  const handleDelete = (id) => {
    personService
      .deleteOne(id)
      .then(returnedPerson => {
        setPersons(persons.filter(returnedPerson => returnedPerson.id !== id))
      })
  }

  const handleAddNewPerson = (event) => {
    console.log('handleAddNewPerson', event.target.value)
    setNewName(event.target.value)
  }

  const handleAddNewNumber = (event) => {
    console.log('handleAddNewNumber', event.target.value)
    setNewNumber(event.target.value)
  }

  const handleShowPerson = (event) => {
    console.log('handleShowPerson', event.target.value)
    setShowPerson(event.target.value)
  }
  return (
    <div>
      <parts.Header header={'Phonebook'} />
      <forms.FilterFrom value={showPerson} onChange={handleShowPerson} />
      <parts.Header header={'add a new'} />
      <forms.SubmitForm addPerson={addPerson} newName={newName} handleAddNewPerson={handleAddNewPerson} newNumber={newNumber} handleAddNewNumber={handleAddNewNumber} />
      <parts.Header header={'Numbers'} />
      <forms.PersonForm personsToShow={personsToShow} handleDelete={handleDelete} />
    </div>
  )
}
export default App