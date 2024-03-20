import { useState, useEffect } from 'react';
import phoneBookServices from "./services/phonebookService";
import Names from "./Components/Names"

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState(0);

  // setting data db
  useEffect(()=> {
    // call returns a promise
    phoneBookServices.getAll()
    .then(res => setPersons(res))
  }, [])

  // console.table(persons)

  // adding a note 


  const handleEventChange = (event) => {

    console.log(event.target.value);
    // setting new name 
    setNewName(event.target.value);
  }

  // if exists 
  const ifExists = (array, data) => {
    for (const person of array) {
      if (person.id === data.id  && person.name === data.name && person.number === data.number) {
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
      const data = phoneBookServices.create(newEntry);
      console.log(data);
      setPersons(persons.concat(newEntry));
    }
    // adding a new note to the server 
    
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

        {
          persons.map(person => <Names key={person.id} name={person.name} number = {person.number}/>)
        }
        
      </ul>
    </div>
  )
}

export default App