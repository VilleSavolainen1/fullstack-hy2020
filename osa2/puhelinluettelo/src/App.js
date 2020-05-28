import React, {useState, useEffect} from 'react';
import AddPerson from './Components/AddPerson';
import Search from './Components/Search';
import Numbers from './Components/Numbers';
import personsDb from './services/personsDb'
import Notification from './Components/Notification';
import Error from './Components/Error';


const App = () => {

  
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [notification, setNotification] = useState(null)
  const [error, setError] = useState(null)

  let person = persons.map(object =>  {return `${object.name} ${object.number}`})
  

  useEffect(() => {
    personsDb
    .getAll()
    .then(response => {
      setPersons(persons.concat(response.data));
    }) 
  }, [])
  
  

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} setNotification={setNotification}/>
      <Error error={error} setError={setError}/>
      <Search search={search} setSearch={setSearch} />
      <AddPerson newName={newName} newNumber={newNumber} 
      setNewName={setNewName} setNewNumber={setNewNumber}
      persons={persons} setPersons={setPersons} notification={notification}
      setNotification={setNotification} setError={setError}
      />
      <h2>Numbers</h2>
      <Numbers search={search} persons={persons} person={person} setPersons={setPersons}
      setError={setError}/>
    </div>
  );
}

export default App;
