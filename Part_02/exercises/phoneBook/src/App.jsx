import { useState, useEffect } from 'react';
import phoneBookServices from "./services/phonebookService";
import Names from "./Components/Names"

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState(0);

  // setting data db getting data from server
  useEffect(()=> {
    // call returns a promise
    phoneBookServices.getAll()
    .then(res => setPersons(res))
  }, [])


  const handleEventChange = (event) => {

    console.log(event.target.value);
    // setting new name 
    setNewName(event.target.value);
  }

  // if exists 
  const ifExists = (array, data) => {
    for (const person of array) {
      if (person.name === data.name && person.number === data.number) {
        return true ;
      }
    }
    return false;
  } 

  // updating phone book 
  const updatePhoneBook = (event) => {
    event.preventDefault() ; // prevent default reloading

    const newEntry = {
      name : newName, 
      number : number,
    }
    console.log(newEntry)
    if(ifExists(persons, newEntry)) {
      alert(`${newName} is alrerady added to the phonebook`)
    }
    else {
      // updating the phonebook by adding newEntry to the server
      phoneBookServices
        .create(newEntry) // adding to the server
        .then((res) => {
          console.table(res);
          setPersons(persons.concat(res)); // concatinating the updated data
        })
    }
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNumber(event.target.value)
  }

  return (
    <div >
      <h2>Phonebook</h2>
      <form onSubmit={updatePhoneBook} >
        <div>
          name : <input onChange={handleEventChange} /> <br />
          number : <input onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {/* displaying all the persons */}
        {
          persons.map(person => <Names key={person.id} name={person.name} number = {person.number}/>)
        }
        
      </ul>
    </div>
  )
}

export default App