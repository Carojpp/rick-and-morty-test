// src/redux/reducers/charactersReducer.js
import {
  ADD_CHARACTER,
  REMOVE_CHARACTER,
  TOGGLE_FAVORITE,
  SET_CHARACTERS,
  SET_SEARCH_TERM,
  SEARCH_CHARACTERS_BY_NAME,
} from '../actions/types';

const initialState = {
  characters: [],
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTERS:
      const charactersWithImages = action.payload.map((character) => ({
        ...character,
        imagen: character.image, // Asignamos la imagen al atributo 'imagen'
      }));
      return {
        ...state,
        characters: charactersWithImages,
      };
    case ADD_CHARACTER:
      return {
        ...state,
        characters: [...state.characters, action.payload],
      };
    case REMOVE_CHARACTER:
      return {
        ...state,
        characters: state.characters.filter(
          (character) => character.id !== action.payload
        ),
      };
    case TOGGLE_FAVORITE:
      console.log('TOGGLE_FAVORITE')
      return {
        ...state,
        characters: state.characters.map((character) =>
          character.id === action.payload
            ? { ...character, favorite: !character.favorite }
            : character
        ),
      };
    
    case SET_SEARCH_TERM:
        return {
          ...state,
          searchTerm: action.payload,
        };
    case SEARCH_CHARACTERS_BY_NAME: // Manejamos SEARCH_CHARACTERS_BY_NAME
        const filteredCharactersByName = state.characters.filter((character) =>
          character.name.toLowerCase().includes(action.payload.toLowerCase())
        );
        return {
          ...state,
          characters: filteredCharactersByName,
        };
        
    default:
      return state;
  }
};

export default charactersReducer;
