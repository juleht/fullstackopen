import { Button, Input } from "./Parts";


const FilterFrom = ({ onChange, showPerson }) => {
    return (
        <form>
            <Input text={'filter shown with'} value={showPerson} onChange={onChange} />
        </form>
    )
}

const SubmitForm = ({ handleAddNewPerson, newName, newNumber, handleAddNewNumber, addPerson }) => {
    return (
        <form onSubmit={addPerson}>
            <Input text={'name:'} value={newName} onChange={handleAddNewPerson} />
            <Input text={'number:'} value={newNumber} onChange={handleAddNewNumber} />
            <Button text={'add'} type={'submit'} />
        </form>
    )
}


export { FilterFrom, SubmitForm }