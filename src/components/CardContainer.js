// src/components/CardContainer.js
import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import { addCharacter, removeCharacter, toggleFavorite } from '../redux/actions/actions';

const CardContainer = ({
  characters,
  addCharacter,
  removeCharacter,
  toggleFavorite,
}) => {
  const handleAddCharacter = (character) => {
    addCharacter(character);
  };

  const handleRemoveCharacter = (characterId) => {
    removeCharacter(characterId);
  };

  const handleToggleFavorite = (characterId) => {
    toggleFavorite(characterId);
  };
  console.log({ characters })
  return (
    <div className="card-container" style={{display: 'grid'}}>
      {characters && characters.map((character) => (
        <Card
          key={character.id}
          character={character}
          handleAddCharacter={handleAddCharacter}
          handleRemoveCharacter={handleRemoveCharacter}
          handleToggleFavorite={handleToggleFavorite}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  characters: state.characters,
});

const mapDispatchToProps = {
  addCharacter,
  removeCharacter,
  toggleFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
