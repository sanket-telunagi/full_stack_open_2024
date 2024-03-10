import { useState } from 'react'


const DisplayAnectode = ({ text, votes }) => {
  return (
    <>
      <p>{text}</p>
      <p>has {votes} votes</p>
    </>
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
  const [votes, updateVotes] = useState(new Uint32Array(8))
  
  const [maxVotesIndex, setMaxVotesIndex] = useState(0);
  console.log(votes)

  // gives random value between 0 and length of the array
  const selectRandom = () => Math.floor(Math.random() * anecdotes.length)

  const onSmash = () => {
    setSelected(selectRandom())
  }

  const onVote = () => {
    const copy = [...votes]
    copy[selected] += 1


    // keep track of the maximum votes
    if (copy[selected] > votes[maxVotesIndex]) {

      setMaxVotesIndex(selected)
    }
    updateVotes(copy)
    console.log(votes)
  }

  console.log(votes[maxVotesIndex], maxVotesIndex)

  return (
    <div>
      <DisplayAnectode text={anecdotes[selected]} votes={votes[selected]}/>
      <button onClick={onVote}>Vote</button>
      <button onClick={onSmash}>next anectode</button>

      <h1>Anectode with most votes</h1>
      <DisplayAnectode text={anecdotes[maxVotesIndex]} votes={votes[maxVotesIndex]}/>

    </div>
  )
}

export default App