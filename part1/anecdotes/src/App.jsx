import { useState } from 'react'


const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Header = ({ header }) => <h1>{header}</h1>

const ShowAnecdote = ({ anecdotes, index }) => <p>{anecdotes[index]}</p>



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const header = ['Anecdote of the day', 'Anecdote with most votes']

  const [selected, setSelected] = useState(0)
  const [allVotes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleNextAnecdote = () => { setSelected(Math.floor(Math.random() * anecdotes.length)) }
  const handleVote = () => {
    const updateVotes = [...allVotes]
    updateVotes[selected] += 1
    setVotes(updateVotes)
  }
  console.log(allVotes)
  console.log(allVotes.indexOf(Math.max.apply(Math, allVotes)))
  allVotes
  const mostVoted = allVotes.indexOf(Math.max.apply(Math, allVotes))





  return (
    <div>
      <Header header={header[0]}/>
      <ShowAnecdote anecdotes={anecdotes} index={selected}/>
      <Button onClick={handleNextAnecdote} text='next anecdote' />
      <Button onClick={handleVote} text='vote' />
      <Header header={header[1]}/>
      <ShowAnecdote anecdotes={anecdotes} index={mostVoted}/>
    </div>
  )
}

export default App