import React from 'react';
import personsDb from '../services/personsDb'

const AddPerson = ({newName, newNumber, setNewName, setNewNumber, persons, setPersons, setNotification, setError}) => {

let isNew = true;

const sameNumber = ({newName, newNumber}) => {
  for(let x in persons){
    if(newName.toLowerCase() === persons[x].name.toLowerCase() && newNumber === persons[x].number){
      isNew = false;
      alert(`${newName} is already added!`)
    }
  }
}

const sameName = ({newName, newNumber}) => {
  for(let x in persons){
    if(newName.toLowerCase() === persons[x].name.toLowerCase() && newNumber !== persons[x].number){
      isNew = false;
      if(window.confirm(`${persons[x].name} is already added. Replace number?`)){
        personsDb
        .update(persons[x].id, {name: persons[x].name, number: newNumber})
        .catch(() => {
          setError(`${newName} is already removed.`)
        })
        personsDb
        .getAll()
        .then(res => {
          setPersons(res.data)
        })
      }
      }
    }
  }

  const newPerson = ({newName, newNumber}) => {
    if(isNew){
      personsDb
      .create({name: newName, number: newNumber})
      setPersons(persons.concat({name: newName, number: newNumber}))
      setNotification(`Added ${newName}`)
      personsDb
      .getAll()
      .then(res => {
        setPersons(res.data)
      })
    }
  }


    const addName = (event) => {
        event.preventDefault()
        sameNumber({newName, newNumber});
        sameName({newName, newNumber});
        newPerson({newName, newNumber});
        setNewName('');
        setNewNumber('')
        personsDb
        .getAll()
        .then(res => {
          setPersons(res.data)
        })
    }

    const handleNameAdding = (event) => {
        setNewName(event.target.value)
    }
    
    const handleNumberAdding = (event) => {
      setNewNumber(event.target.value)
    }
    
    return (
        <form onSubmit={addName}>
        <div>
          <h2>add a new</h2>
          name: <input value={newName} onChange={handleNameAdding}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberAdding}></input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default AddPerson;