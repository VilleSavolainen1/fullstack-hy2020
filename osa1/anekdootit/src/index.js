import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Button = ({handleClick, text}) => {
  return (
  <button onClick={handleClick}>{text}</button>
  )
}


const MostVotes = () => {
  let biggest = anecdotesCopy.indexOf(Math.max(...anecdotesCopy));
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[biggest]}</p>
      <p>Has {anecdotesCopy[biggest]} votes.</p>
      </div>
  )
}


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

let anecdotesCopy = [...anecdotes].fill(0);


const App = () => {
  let random = Math.floor(Math.random() * anecdotes.length);
  let [selected, setSelected] = useState(random);
  let [vote, setVote] = useState(0);
  let [anecdoteVote, setAnecdote] = useState(0);


  const randomAnecdote = () => {
    random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
    setVote(vote === random);
  }

  const voteAnecdote = () => {
    let index = anecdotesCopy[selected];
    anecdotesCopy[selected]++;
    setAnecdote(anecdoteVote + index);
    setVote(selected);                                                                              
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Has {anecdotesCopy[selected]} votes</p>
      <Button handleClick={() => voteAnecdote()} text={"vote"} />
      <Button handleClick={() => randomAnecdote()} text={"next anecdote"} />
      <MostVotes />
    </div>
  )
}


ReactDOM.render(
    <App anecdotes={anecdotes} />,
  document.getElementById('root')
);
