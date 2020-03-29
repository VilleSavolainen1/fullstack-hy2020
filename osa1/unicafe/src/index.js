import React, {useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Display = ({name, value}) => {
  return (
    <div>
      <table style={{width: "20%"}}>
        <thead>
        <tr>
          <td>{name}</td>
          <td style={{textAlign: "right"}}>{value}</td>
        </tr>
        </thead>
      </table>
    </div>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <Display name={text} value={value} />
  )
}

const Statistics = ({good, neutral, bad, all, averageValue, positive}) => {
  if(good === 0 && neutral === 0 && bad === 0){
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>Statistics</h1>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="All" value={all} />
      <StatisticLine text="Average" value={averageValue} />
      <StatisticLine text="Positive" value={positive} />
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [average, setAverage] = useState(0);
  let all = good + neutral + bad;
  let averageValue = (good - bad) / all;
  let positive = (good * 100) / all + "%";


  const setGoodValue = () => {
    setGood(good + 1);
    setAverage(average + 1);
  }

  const setBadValue = () => {
    setBad(bad + 1);
    setAverage(average - 1);
  }


  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGoodValue()} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBadValue()} text="bad" />
      <Statistics good={good} neutral={neutral}
       bad={bad} all={all} averageValue={averageValue} 
       positive={positive}
       />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
);

