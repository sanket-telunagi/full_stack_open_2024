import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>hello {props.name} your age is {props.age}</p>
    </div>
  );
}

const Compo_returning_an_array  = (props) => {
  // this function returns the array of components
  return [
    <Hello></Hello>
  ]
}

const App = () => {
  const now = new Date() ;
  const a = 10 ;
  const b = 20 ;

  console.log(now, a+b);

  return (
   <div>
    <Hello/>
    <Hello name="George"></Hello>
    <Hello age="heoo"></Hello>
    <Hello></Hello>
   </div> 
  )
}
export default App
