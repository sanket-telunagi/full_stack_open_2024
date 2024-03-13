const Total = ({parts}) => {
  
    let total = 0;
  
    // run through each part to sum the exercises 
    parts.forEach(
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

export default Total;