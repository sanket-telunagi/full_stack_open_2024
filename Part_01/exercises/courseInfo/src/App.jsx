


const App = () => {
  
  const course = "Half Stack application development"
  const part1 = "Fundamentals of React"
  const exercises1 = 10
  const part2 = "Using props to pass data"
  const exercises2 = 7
  const part3 = "State of a component"
  const exercises3 = 14

  const exercises = [
    exercises1,
    exercises2,
    exercises3
  ]

  const part = [
    part1,
    part2,
    part3
  ]

  return (
    <div>
      <Header course={course}></Header>
      <Content 
        exercises = {exercises}
        part = {part}
      />
      <Total exercises={exercises}/>
    </div>
  )
}


const Header = (props) => {
  return (
    <h1>
      {props.course}
    </h1>
  )
}


const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}
const Content = (props) =>{
  return (
    <div>
      <Part part = {props.part[0]} exercise={props.exercises[0]}/>
      <Part part = {props.part[1]} exercise={props.exercises[1]}/>
      <Part part = {props.part[2]} exercise={props.exercises[2]}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {
        props.exercises[0] +
        props.exercises[1] + 
        props.exercises[2] 
      }
    </p>
  )
}



export default App
