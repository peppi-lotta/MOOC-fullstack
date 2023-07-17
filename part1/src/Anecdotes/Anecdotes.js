import { useState } from 'react'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

const Anecdote = (props) => {
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
  return (
    <>
      {anecdotes[props.selected]}
      <p>has {props.votes} votes</p>
    </>
  );
}


const Anecdotes = () => {

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([
    0, 0, 5, 0, 0, 0, 0, 0
  ])
  const [indexOfMaxVotes, seIindexOfMaxVotes] = useState(0)

  function vote(selected) {
    let copy = [ ...votes ]
    copy[selected] += 1;
    setVotes(copy)
    seIindexOfMaxVotes(votes.indexOf(Math.max(...votes)))
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <Anecdote selected={selected} votes={votes[selected]} />
      <button onClick={() => setSelected(getRandomInt(0, 7))}>Next anecdote</button>
      <button onClick={() => vote(selected)}>Vote</button>
      <h1>Anecdote with most votes</h1>
      <Anecdote selected={indexOfMaxVotes} votes={votes[indexOfMaxVotes]} />
    </>
  )
}

export default Anecdotes