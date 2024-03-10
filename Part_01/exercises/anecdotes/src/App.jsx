import { useState } from 'react'


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
  const [maxVotes, setMaxVotes] = useState(0) ;
  const [maxVotesIndex, setMaxVotesIndex] = useState(0) ;
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
    if (copy[selected] > maxVotes) {
      setMaxVotes(copy[selected])
      setMaxVotesIndex(selected)
    }
    updateVotes(copy)
    console.log(votes)
  }

  console.log(maxVotes, maxVotesIndex)

  return (
    <div>
      {anecdotes[selected]}
      <br />
      <p>has {votes[selected]} votes</p>
      <br />
      <button onClick={onVote}>Vote</button>
      <button onClick={onSmash}>next anectode</button>
    </div>
  )
}

export default App