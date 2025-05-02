import { useState } from 'react'

const Header = ({ headers }) => <h1>{headers}</h1>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Statistics = ( {feedback} ) => {
  const all = feedback.good + feedback.neutral + feedback.bad
  const average = (feedback.good + (feedback.bad * -1)) / all
  const positive = (feedback.good / all) * 100

return (
  <div>
    <table>
      <tr><td>good {feedback.good}</td></tr>
      <tr><td>neutral {feedback.neutral}</td></tr>
      <tr><td>bad {feedback.bad}</td></tr>
      <tr><td>all {all}</td></tr>
      <tr><td>average {average}</td></tr>
      <tr><td>positive {positive}</td></tr>
    </table>
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