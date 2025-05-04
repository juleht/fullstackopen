import { useState } from 'react'
import PersonToShow from './components/Person'
import { Header } from './components/Parts'
import { FilterFrom, SubmitForm } from './components/Form'

const App = (props) => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showPerson, setShowPerson] = useState('')
  const personsToShow = persons.filter(person => new RegExp(showPerson, 'i').test(person.name))

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }
    if (persons.some((x) => x.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
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