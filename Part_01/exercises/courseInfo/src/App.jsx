


const App = () => {
  
  const course = {
    name : "Half Stack application development",
    parts : [
      {
        name : "Fundamentals of React",
        exercises  : 10 
      },
      {
        name: "Using props to pass data",
        exercises : 7
      }, 
      {
        name:"State of Component",
        exercises : 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}></Header>
      <Content 
        parts = {course.parts}
      />
      <Total parts={course.parts}/>
    </div>
  )
}

// Header of the course 

const Header = (props) => {
  return (
    <h1>
      {props.course}
    </h1>
  )
}


// information of each part 
const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

// adding up each content 
const Content = (props) =>{

  const result = []

  // create tag for each name and exercises
  props.parts.forEach(
    (course) => {
      result.push(
        <Part name={course.name} exercises={course.exercises}/>
      )
    }
  )  

  return result;
}

// Total exercises  
const Total = (props) => {
  
  let total = 0;

  // run through each part to sum the exercises 
  props.parts.forEach(
    (course) => {
      total += course.exercises
    }
  )

  return (
    <p>
      Number of exercises {
        total
      }
    </p>
  )
}



export default App
