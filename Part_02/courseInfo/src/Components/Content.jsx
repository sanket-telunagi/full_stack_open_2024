import Part from "./Part"

/**
 * 
 * This component gives the content from the course 
 * With the indivisual course "name" and "exercise"
 */
const Content = ({parts}) =>{
 
  return (parts.map(
    (data) => {
      {
        // console.log(data.name, data.exercises)
        
        return(<Part
          key={data.id}
          partName={data.name}
          partExercises={data.exercises}
        ></Part>)
      }
    }
  ))
  
}

export default Content;