import React from 'react';
import Find from './Find';
import ShowInfo from './ShowInfo'


const ShowCountry = ({search, setSearch, countries, index, setIndex, isClicked, setClick, header, setHeader, capitalInfo,
                        setCapitalInfo, populationInfo, setPopulationInfo, languagesInfo, setLanguagesInfo, flagInfo,
                        setFlagInfo}) => {

    let country = countries.map(country => {return country.name});
    let capital = countries.map(capital => {return capital.capital});
    let population = countries.map(pop => {return pop.population});
    let languages = countries.map(lang => {return lang.languages});
    let flag = countries.map(flag => {return flag.flag});


    const handleChange = (event) => {
        setSearch(event.target.value);
        setClick(false)
    }
    
    return (
        <div>
            Find countries <input onChange={handleChange}></input>
            <div>
                <Find search={search} country={country} 
                    index={index} setIndex={setIndex} countries={countries}
                    capital={capital} population={population} languages={languages}
                    flag={flag} isClicked={isClicked} setClick={setClick} setHeader={setHeader}
                    setCapitalInfo={setCapitalInfo} setPopulationInfo={setPopulationInfo}
                    setLanguagesInfo={setLanguagesInfo} setFlagInfo={setFlagInfo}
                />
                {isClicked && <ShowInfo header={header} capital={capitalInfo} population={populationInfo}
                languages={languagesInfo} flag={flagInfo}/>}
            </div>
        </div>
    )
}

export default ShowCountry;