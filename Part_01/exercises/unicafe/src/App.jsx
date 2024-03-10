import { useState } from 'react'


const Button = ({name, onSmash}) =>{
  return <button onClick={onSmash}>{name}</button> 
}

const StatisticLine = ({text, value}) => {
  if (text == "positive") return (
    <tr>
      <td>{text}</td>
      <td>{value} %</td>
    </tr>
  )
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad ;
  const average = (good*1 + neutral * 0 + bad * -1) / all;
  const positive = good / all *100;
  
  if (all <= 0) return <p>No feedback given</p>

  return (
    <>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="good" value={good}/>
          <StatisticLine text="neutral" value={neutral}/>
          <StatisticLine text="bad" value={bad}/>
          <StatisticLine text="all" value={all}/>
          <StatisticLine text="average" value={average}/>
          <StatisticLine text="positive" value={positive}/>
        </tbody>
      </table>  
    </>
  )
}



function App() {
  // three reviews 
  /**
   * Good 
   * neutral 
   * bad 
   */

  const [good, setGood] = useState(0) ;
  const [neutral, setNeutral] = useState(0) ;
  const [bad, setBad] = useState(0) ;


  const responses = {
    good,
    neutral,
    bad
  }

  const onGoodSmash = () => {
    setGood(good + 1)
    console.log(good)
  }
  const onBadSmash = () => {
    setBad(bad + 1)
    console.log(bad)
  }
  const onNeutralSmash = () => {
    setNeutral(neutral + 1)
    console.log(neutral)
  }

  return (
    <>
      <h1>
        Taking feedback
      </h1>

      <Button name={"good"} onSmash={onGoodSmash}></Button>
      <Button name={"neutral"} onSmash={onNeutralSmash}></Button>
      <Button name={"bad"} onSmash={onBadSmash}></Button>

      <Statistics 
        good={good}
        bad={bad}
        neutral={neutral}

      ></Statistics>
      
    </>
  )
}

export default App
