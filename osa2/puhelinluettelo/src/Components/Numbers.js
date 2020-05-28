import React from 'react';
import personsDb from '../services/personsDb';

const Numbers = ({search, persons, setPersons, person}) => {


    const filter = (arr, query) => {
        let name = arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
        return name.map((n, i) => <li key={i}>{n}<button onClick={() => 
            handleClick(persons[i].id, persons[i].name)}>Delete</button></li>)
    }


    const handleClick = (target, name) => {
        if(window.confirm(`Delete ${name}?`)){
            personsDb
            .del(target)
            personsDb
            .getAll()
            .then(response => {
                setPersons(response.data)
                window.location.reload(true)
            })
        }
    }

    return (
        <div>
        {filter(person, search)}
        </div>
    )
}

export default Numbers;

 