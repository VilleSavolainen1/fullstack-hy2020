import React from 'react';
import ShowInfo from './ShowInfo';


const Find = ({search, country, countries, capital, population, languages, flag, setClick, setHeader, setCapitalInfo,
                setPopulationInfo, setLanguagesInfo, setFlagInfo}) => {

    let index;

    const filter = (arr, query) => {
        let name = arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
        name = name.map(n => <li key={n}>{n}</li>)
        return name;
        }

        const handleClick = e => {
            setClick(true);
            setHeader(e.name.key)
            for(let i in countries){
                if(countries[i].name === e.name.key){
                    index = i;
                    setCapitalInfo(countries[i].capital)
                    setPopulationInfo(countries[i].population)
                    setLanguagesInfo(langs(i))
                    setFlagInfo(countries[i].flag)
                }
            }
        }

    const langs = i => {
        let arr = [];
        for(let x in languages[i]){
            arr.push(languages[i][x].name);
        }
        return arr.map((lang, i) => <li key={i}>{lang}</li>);
    }

        if(filter(country, search).length > 10 && search.length > 0){
            return 'Too many matches, specify another filter'
        } else if(filter(country, search).length > 1 && search.length !== 0) {
            return filter(country, search).map((name, i) => 
                <div key={i}>
                    {name}
                    <button onClick={() => handleClick({name})}>Show</button>
                </div>);
        } else if(filter(country, search).length === 1){
            for(let i in countries){
                if(countries[i].name === filter(country, search)[0].key){
                    index = i;
                }
        }
        return (
            <div>
                <ShowInfo header={filter(country, search)}
                    capital={capital[index]} population={population[index]}
                    languages={langs(index)} flag={flag[index]}
                />
            </div>
        )
        } else {
            return null;
        }
}


export default Find;