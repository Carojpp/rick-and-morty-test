// src/App.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setCharacters, setSearchTerm, searchCharactersByName} from './redux/actions/actions';
import CardContainer from './components/CardContainer';
import axios from 'axios';
import SearchBar from './components/SearchBar';

const App = ({ characters=[], setCharacters }) => {

  console.log ({characters})

  useEffect(() => {
    if (characters.length === 0) {
      console.log('consume api')
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then((response) => {
        const charactersWithImages = response.data.results.map((character) => ({
          ...character,
          imagen: character.image,
          favorite: false
        }));
        setCharacters(charactersWithImages);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    }
  }, [setCharacters]);
  console.log({characters})
  return (
    <div style={{width: '600px', margin:'auto'}} className="App">
       <nav>
        <h1>Rick and Morty</h1>
        <SearchBar /> {/* Agregamos el componente SearchBar */}
      </nav>
      <CardContainer characters={characters} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  characters: state.characters.characters,
  searchTerm: state.characters.searchTerm,
});

const mapDispatchToProps = {
  setCharacters,
  setSearchTerm,
  searchCharactersByName,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
