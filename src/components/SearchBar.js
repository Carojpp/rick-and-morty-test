// src/components/SearchBar.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setSearchTerm, searchCharactersByName } from '../redux/actions/actions';

const SearchBar = ({ setSearchTerm, searchCharactersByName }) => {
  const [searchTermLocal, setSearchTermLocal] = useState('');

  const handleSearch = () => {
    console.log({searchTermLocal})
    setSearchTerm(searchTermLocal);
    searchCharactersByName(searchTermLocal);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar personaje por nombre"
        value={searchTermLocal}
        onChange={(e) => setSearchTermLocal(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar por Nombre</button>
    </div>
  );
};

const mapDispatchToProps = {
  setSearchTerm,
  searchCharactersByName,
};

export default connect(null, mapDispatchToProps)(SearchBar);
