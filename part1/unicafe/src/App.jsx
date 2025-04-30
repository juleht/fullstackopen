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

const Display = (props) => {
  return (
    <div>{props.text} {props.good} {props.neutral} {props.bad}</div>
  )
}



const App = () => {
  // otsikot
  const headers = ['give feedback', 'statistics']
  
  // tallenna napit omaan hook
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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
      <Display text={'good'} good={good} />
      <Display text={'neutral'} neutral={neutral} />
      <Display text={'bad'} bad={bad} />
    </div>
  )
}

export default App