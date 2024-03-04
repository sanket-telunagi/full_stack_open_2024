import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Hello = () => {
  return (
    <div>
      <p>hello world!</p>
    </div>
  );
}

const App = () => {
  const now = new Date() ;
  const a = 10 ;
  const b = 20 ;

  console.table(now, a+b);

  return (
   <div>
    <p>Hello world, it is {now.toString()}</p>
    <p>
      {a} plus {b} is {a+bf}
    </p>
   </div> 
  )
}
export default App
