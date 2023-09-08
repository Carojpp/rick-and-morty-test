// src/redux/actions/actions.js
import {
  ADD_CHARACTER,
  REMOVE_CHARACTER,
  TOGGLE_FAVORITE,
  SET_CHARACTERS,
  SET_SEARCH_TERM,
  SEARCH_CHARACTERS_BY_NAME,
} from './types';

export const setCharacters = (characters) => ({
  type: SET_CHARACTERS,
  payload: characters,
});

export const addCharacter = (character) => ({
  type: ADD_CHARACTER,
  payload: character,
});

export const removeCharacter = (characterId) => ({
  type: REMOVE_CHARACTER,
  payload: characterId,
});

export const toggleFavorite = (characterId) => ({
  type: TOGGLE_FAVORITE,
  payload: characterId,
});

export const setSearchTerm = (searchTerm) => ({
  type: SET_SEARCH_TERM,
  payload: searchTerm,
});

// Nueva acción para buscar personajes por nombre
export const searchCharactersByName = (name) => ({
  type: SEARCH_CHARACTERS_BY_NAME,
  payload: name,
});