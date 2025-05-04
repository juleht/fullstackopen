import { Person } from "./Parts"

const PersonToShow = ({ personsToShow }) => {
    return (
        <ul>
            {personsToShow.map(person =>
                <Person key={person.name} person={person} />
            )}
        </ul>
    )
}
export default PersonToShow