// En Card.js
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: grid; /* Usar display: grid */
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Distribuir en columnas automáticas */
  gap: 20px; /* Espacio entre tarjetas */
  justify-items: center; /* Centrar horizontalmente */
`;

const StyledCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
`;

const CardImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const HeartIcon = styled.span`
  font-size: 24px;
  color: ${(props) => (props.isFavorite ? '#F00' : '#FFF')};
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  margin: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Card = ({
  character,
  handleAddCharacter,
  handleRemoveCharacter,
  handleToggleFavorite,
}) => {
  const { id, name, status, species, gender, origin, favorite, imagen } = character;

  return (
    <CardContainer>
      <StyledCard>
        <CardImage src={imagen} alt={name} />
        <h2>{name}</h2>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
        <p>Origin: {origin.name}</p>
        <p><HeartIcon isFavorite={favorite}>{favorite ? '❤️' : '🤍'}</HeartIcon></p>
        <Button onClick={() => handleAddCharacter(character)}>Agregar</Button>
        <Button onClick={() => handleRemoveCharacter(id)}>Eliminar</Button>
        <Button onClick={() => handleToggleFavorite(id)}>
          Agregar a favoritos
        </Button>
      </StyledCard>
    </CardContainer>
  );
};

export default Card;
