import { useState } from 'react'

const Display = ({ title, anecdote, votes }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{anecdote}</p>
      <p>has { votes } votes</p>
    </div>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0})

  const increaseVote = () => {
    const votesCopy = { ...points }
    votesCopy[selected] += 1
    setPoints(votesCopy)
  }

  const mostVoted = () => {
    let keys = Object.keys(points)
    let max = keys[0]
  
    for (let index = 0; index < keys.length; index++) {
      let value = keys[index]
      if (points[value] > points[max]) max = value
    }

    return parseInt(max)
  }

  const nextAnecdote = () => setSelected(Math.floor(Math.random() * 8))
  let mostPoints = mostVoted()

  return (
    <div>
      <Display title='Anecdote of the day' anecdote={anecdotes[selected]} votes={ points[selected] } />
      <Button onClick={ increaseVote } text='vote'/>
      <Button onClick={ nextAnecdote } text='next anecdote' />
      <Display title='Anecdote with most votes' anecdote={ anecdotes[mostPoints] } votes={ points[mostPoints] } />
    </div>
  )
}

export default App