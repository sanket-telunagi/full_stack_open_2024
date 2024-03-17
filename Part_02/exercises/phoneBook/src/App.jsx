import { useState } from 'react'
import Names from './Components/Names'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number : '040-1234567',
      id : 1}
  ]) 
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState(0);

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
      id : newName.length + 1
    }
    console.log(newEntry)
    if(ifExists(persons, newEntry)) {
      alert(`${newName} is alrerady added to the phonebook`)
    }
    else setPersons(persons.concat(newEntry));
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
          persons.map(person => <Names key={person.id} data={person}/>)
        }
      </ul>
    </div>
  )
}

export default App