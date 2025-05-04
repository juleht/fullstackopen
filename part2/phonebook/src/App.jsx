import { useState } from 'react'


const Person = ({ person }) => {
  return (
    <ul>{person.name} {person.number}</ul>
  )
}

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
      <h2>Phonebook</h2>
      <form>
        <div>
          filter shown with <input value={showPerson} onChange={handleShowhPerson}/>
        </div>
      </form>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleAddNewPerson} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleAddNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person =>
          <Person key={person.name} person={person} />
        )}
      </ul>
      <div>debug: {newName}</div>
    </div>

  )

}

export default App