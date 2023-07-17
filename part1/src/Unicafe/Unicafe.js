import { useState } from 'react'


const StatisticLine = (props) => {
  return (
    <>
      <p>{props.text}: {props.value}</p>
    </>
  )
}

const Statistics = (props) => {
  let all = props.good + props.bad + props.neutral;
  let average = (props.bad * -1 + props.good) / all;
  let positive = props.good / all;
  return (
    <>
      <h1>Statistics</h1>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive} />
    </>
  )
}

const Unicafe = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default Unicafe