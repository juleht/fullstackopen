import { useState } from 'react'

const Header = ({ headers }) => <h1>{headers}</h1>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
  
const Display = ({ text, value }) => <div>{text} {value}</div>


  
const App = () => {
  const headers = ['give feedback', 'statistics']

  const [feedback, setFeedback] = useState({
    good : 0,
    neutral: 0,
    bad: 0
  })

  const total = feedback.good + feedback.neutral + feedback.bad

  const average = (feedback.good + (feedback.bad * -1)) / total

  const positive = (feedback.good / total) * 100


  const handleGoodFeedbackClick = () => {setFeedback({ ...feedback, good: feedback.good + 1 })}
  const handleNeutralFeedbackClick = () => {setFeedback({ ...feedback, neutral: feedback.neutral + 1 })}
  const handleBadFeedbackClick = () => {setFeedback({ ...feedback, bad: feedback.bad + 1 })}

  return (
    <div>
      <Header headers={headers[0]} />
      <Button onClick={handleGoodFeedbackClick} text = 'good'/>
      <Button onClick={handleNeutralFeedbackClick} text = 'neutral'/>
      <Button onClick={handleBadFeedbackClick} text = 'bad'/>
      <Header headers={headers[1]} />
      <Display text='good' value={feedback.good} />
      <Display text='neutral' value={feedback.neutral} />
      <Display text='bad' value={feedback.bad} />
      <Display text='all' value={total} />
      <Display text='average' value={average} />
      <Display text='positive' value={positive} />
    </div>
  )
}

export default App