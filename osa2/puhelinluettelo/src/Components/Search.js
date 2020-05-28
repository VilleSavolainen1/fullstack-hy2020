import React from 'react';

const Search = ({search, setSearch}) => {

    const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
        filter shown with: <input value={search} onChange={handleSearch}></input>
    </div>
  )
}



  export default Search;