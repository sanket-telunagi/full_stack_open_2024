const Total = ({parts}) => {
  
    const total = parts.reduce((accumulatedSum, currentObject) => accumulatedSum + currentObject.exercises,
     0)
  
    return (
      <p>
        <b>total of {total} exercises</b>
      </p>
    )
  }

export default Total;