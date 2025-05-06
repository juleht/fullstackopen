const Person = ({ person }) => {
    return (
        <span>{person.name} {person.number}</span>
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

const Button = ({ type, text, onClick }) => {
    return (
        <span>
            <button type={type} onClick={onClick}>{text}</button>
        </span>
    )
}

export default { Person, Header, Input, Button }