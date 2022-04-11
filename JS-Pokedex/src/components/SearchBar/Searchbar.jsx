import React, {useState} from "react";
import "./SearchBar.scss";
import {BsSearch} from 'react-icons/bs'
import "../../App";
const Searchbar = ({searchResults}) => {


  const [searchValue, setSearchValue] = useState('')
  const handlePokemon = () => {
    searchResults(searchValue.toLowerCase())
  }
  return (
    <div className="input__container">
      <input
        type="text"
        placeholder="Search pokemon..."
        className="search-input"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={ e => e.key === 'Enter' && handlePokemon()}
      />
      <BsSearch onClick={searchValue ?  handlePokemon : null}/>
      {/* <div className="input__options">
        {searchValue ? (
          <ul>
            <li>Buscar: {searchValue}</li>
          </ul>
        ) : (
          null
        )}
      </div> */}
    </div>
  );
};

export default Searchbar;
