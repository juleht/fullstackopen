const Person = ({ person }) => {
    return (
        <li>{person.name} {person.number}</li>
    )
}

const Header = ({ header }) => {
    return (
        <h2>{header}</h2>
    )
}

const Input = ({ text, value, onChange }) => {
    return (
        <div>
            <label>{text}</label>
            <input value={value} onChange={onChange} />
        </div>
    )
}

const Button = ({ type, text }) => {
    return (
        <div>
            <button type={type}>{text}</button>
        </div>
    )
}

export { Person, Header, Input, Button }