import { useState } from 'react'


const Person = ({ person }) => {
  return (
    <ul>{person.name}</ul>
  )
}


const App = (props) => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('')


  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    console.log('button clicked', event.target)
  }

  const handleAddNewPerson = (event) => {
    console.log('button clikked', event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleAddNewPerson} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <Person key={person.name} person={person} />
        )}
      </ul>
      <div>debug: {newName}</div>
    </div>

  )

}

export default App