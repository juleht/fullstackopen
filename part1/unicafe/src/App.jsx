import { useState } from 'react'

const Header = ({headers}) => {
  return (
    <h1>{headers}</h1>
  )
 }


const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const DisplayGood = (props) => {
  return (
    <div>good {props.good}</div>
  )
}

const DisplayNeutral = (props) => {
  return (
    <div>neutral {props.neutral}</div>
  )
}

const DisplayBad = (props) => {
  return (
    <div>bad {props.bad}</div>
  )
}


const App = () => {
  // otsikot
  const headers = ['give feedback', 'statistics']
  
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  console.log(good, neutral, bad)

  // tapahtuman käsittelijä

  const handleClick = () => {
    console.log('clicked')
  }

      //<Header header={header} />
  return (
    <div>
      <Header headers={headers[0]} />
      <Button
        onClick={() => setGood(good + 1)}
        text = 'good'
        />
      <Button
        onClick={() => setNeutral(neutral + 1)}
        text = 'neutral'
        />
      <Button
        onClick={() => setBad(bad + 1)}
        text = 'bad'
        />
      <Header headers={headers[1]} />
      <DisplayGood good={good} />
      <DisplayNeutral neutral={neutral} />
      <DisplayBad bad={bad} />


    </div>
  )
}

export default App