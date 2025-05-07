import parts from './Parts'

const PersonForm = ({ personsToShow, handleDelete }) => {
    return (
        <div>
            {personsToShow.map(person =>
                <div key={person.id}>
                    <span>
                        <parts.Person person={person} />
                    </span>
                    <span>
                        <parts.Button type={'button'} text={'delete'} onClick={() => { if (window.confirm(`Delete ${person.name} ?`)) { handleDelete(person.id) } }} />
                    </span>
                </div>
            )}
        </div>
    )
}

const FilterFrom = ({ onChange, showPerson }) => {
    return (
        <form>
            <parts.Input text={'filter shown with'} value={showPerson} onChange={onChange} />
        </form>
    )
}

const SubmitForm = ({ handleAddNewPerson, newName, newNumber, handleAddNewNumber, addPerson }) => {
    return (
        <form onSubmit={addPerson} >
            <parts.Input text={'name:'} value={newName} onChange={handleAddNewPerson} />
            <parts.Input text={'number:'} value={newNumber} onChange={handleAddNewNumber} />
            <parts.Button text={'add'} type={'submit'} />
        </form>
    )
}

//onSubmit={() => {if (window.confirm(`${newName} is already added to phonebook, replace the old number with new one?`)) {addPerson}}}
//onSubmit={addPerson}
export default { FilterFrom, SubmitForm, PersonForm }