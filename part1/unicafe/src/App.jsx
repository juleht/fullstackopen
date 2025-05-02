import { useState } from 'react'

const Header = ({ headers }) => <h1>{headers}</h1>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const StatisticsLine = ({ text, value}) => <div>{text} {value}</div>

const Statistics = ( {feedback} ) => {
  const all = feedback.good + feedback.neutral + feedback.bad
  const average = (feedback.good + (feedback.bad * -1)) / all
  const positive = (feedback.good / all) * 100

  if (all == 0) {
    return (
      <div>No feedback given</div>
    )
  }
  else
  return (
  <div>
    <StatisticsLine text='good' value={feedback.good}/>
    <StatisticsLine text='neutral' value={feedback.neutral}/>
    <StatisticsLine text='bad' value={feedback.bad}/>
    <StatisticsLine text='all' value={all}/>
    <StatisticsLine text='average' value={average}/>
    <StatisticsLine text='positive' value={positive}/>
  </div>
)}


  
const App = () => {
  const headers = ['give feedback', 'statistics']

  const [feedback, setFeedback] = useState({
    good : 0,
    neutral: 0,
    bad: 0
  })

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
      <Statistics feedback={feedback}/>
    </div>
  )
}

export default App