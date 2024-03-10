import { useState } from 'react'

/*
  Event Handlers : 
    - it must always be a function or a referance to a function 
    - the btn will not work if the event handler is set to a variable of any other type.
    - Event handler is assigned the returned value from the function
*/

const App = (props) => {
  // const now = new Date() ;
  // const a = 10 ;
  // const b = 20 ;
  
  // console.log(now, a+b);

  // setting counter
  // const [counter, setCounter] = useState(0)

  // console.log("rendering with counter value", counter) // it renders every time the counter renders

  // const handleclick = () => console.log("clicked...")
  // const increaseByOne = () => {
  //   console.log("value of counter before increament" , counter)
  //   setCounter(counter + 1)
  // }
  // const restart = () =>  {
  //   console.log("resetting value to zero, value before", counter)
  //   setCounter(0)
  // }
  
  // const decreaseByOne = () => {
  //   console.log("value of counter before decreament", counter)
  //   setCounter(counter - 1)
  // }
  // console.log(increaseByOne)


  // left and right clicks 
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat("R"))
    setRight(right +1)
  }
  
  return (
  //  <div>
  //   <Hello />
  //   <Hello name="George"></Hello>
  //   <Hello age="heoo"></Hello>
  //   <Hello></Hello>
  //   {props.counter}
  //  </div> 
  
  // <>
  //   <div>Counter value is : {counter}</div>
  //   {/* <Button onclick = {increaseByOne} text = "increament"/> */}
  //   {/* <Button onclick = {restart} text = "reset"/> */}
  //   {/* <button onClick={restart} > reset</button> */}
    //   {/* <Button onclick = {decreaseByOne} text = "Decreament"/> */}
    //   <BtnSmash onSmash={increaseByOne} text="increament"/>
    //   <BtnSmash onSmash={restart} text="reset"/>
    //   <BtnSmash onSmash={decreaseByOne} text="decreament"/>
    // </>
    
    <>
      {left}
      <BtnSmash onSmash={handleLeftClick} text="Left"/>
      <BtnSmash onSmash={handleRightClick} text="Right"/>
      {right}
      <History allClicks={allClicks}/>
    </>
  )
}

// conditional rendring
const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history : {
        props.allClicks.join(' ')
      }
    </div>
  )
}

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

const Button = (props) => {

  return (
    <button onClick={props.onclick} >
      {props.text}
    </button>
  )
}

const BtnSmash = ({onSmash, text}) => <button onClick={onSmash}>{text}</button>
export default App
